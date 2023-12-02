import { decDivide, incDivide } from "./assets/store.ts";

export default function LineIncDec() {
  return (
    <div class="mt-4 flex flex-row justify-end gap-2">
      <button
        type="buttonn"
        onClick={decDivide}
        class="w-12 h-12 bg-indigo-500 text-white rounded text-2xl"
      >
        -
      </button>
      <button
        type="buttonn"
        onClick={incDivide}
        class="w-12 h-12 bg-indigo-500 text-white rounded text-2xl"
      >
        +
      </button>
    </div>
  );
}
