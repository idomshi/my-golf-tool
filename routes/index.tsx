import { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";

interface Data {
  isAllowed: boolean;
}

export const handler: Handlers = {
  GET(req, ctx) {
    const cookies = getCookies(req.headers);
    return ctx.render!({ isAllowed: cookies.auth === "bar" });
  },
};

export default function Home({ data }: PageProps<Data>) {
  return (
    <div class="p-2">
      <div>
        <p>
          <a href="secret_or_redirect" class="underline">
            for authenticated users only
          </a>
        </p>
        <p>
          You currently {data.isAllowed ? "are" : "are not"} logged in.
        </p>
      </div>
      {!data.isAllowed ? <Login /> : <a href="/logout">Logout</a>}
    </div>
  );
}

function Login() {
  return (
    <form action="/api/login" method="post" class="flex flex-row gap-2">
      <input type="text" name="username" class="border rounded p-1" />
      <input type="password" name="password" class="border rounded p-1" />
      <button
        type="submit"
        class="rounded px-4 py-1 border bg-gray-400 text-white"
      >
        Submit
      </button>
    </form>
  );
}
