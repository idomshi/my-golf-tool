import MainTable from "../components/MainTable.tsx";
import NumberInput from "../components/NumberInput.tsx";
import {
  ball,
  divide,
  entry,
  setBall,
  setDivide,
  setEntry,
  setTotal,
  total,
} from "./assets/store.ts";

export default function TheForm() {
  return (
    <>
      <section>
        <form action="">
          <ul class="w-4/5 mx-auto flex flex-row flex-wrap justify-around gap-y-4">
            <li class="w-5/12">
              <NumberInput label={"total"} value={total} setValue={setTotal} />
            </li>
            <li class="w-5/12">
              <NumberInput label={"entry"} value={entry} setValue={setEntry} />
            </li>
            <li class="w-5/12">
              <NumberInput
                label={"divide"}
                value={divide}
                setValue={setDivide}
              />
            </li>
            <li class="w-5/12">
              <NumberInput label={"ball"} value={ball} setValue={setBall} />
            </li>
          </ul>
        </form>
      </section>
      <MainTable />
    </>
  );
}
