import { stops, total_balls } from "../islands/assets/store.ts";

export default function MainTable() {
  return (
    <section class="mt-4">
      <table class="w-full mx-auto table-fixed divide-y md: w-4/5">
        <thead>
          <tr>
            <th>No.</th>
            <th>ball</th>
            <th>start</th>
            <th>end</th>
            <th>count</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          {stops.value.map(({ ballfee, start, stop, balls }, i) => {
            return (
              <tr key={i}>
                <td class="px-4 py-4 whitespace-nowrap text-sm text-right">
                  {i + 1}
                </td>
                <td class="px-4 py-4 whitespace-nowrap text-sm text-right">
                  {ballfee}
                </td>
                <td class="px-4 py-4 whitespace-nowrap text-sm text-right">
                  {start}
                </td>
                <td class="px-4 py-4 whitespace-nowrap text-sm text-right">
                  {stop}
                </td>
                <td class="px-4 py-4 whitespace-nowrap text-sm text-right">
                  {balls}
                </td>
              </tr>
            );
          })}
          <tr>
            <td colspan={4} class="px-4 py-4 whitespace-nowrap text-sm">
              total
            </td>
            <td class="px-4 py-4 whitespace-nowrap text-sm text-right">
              {total_balls.value}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
