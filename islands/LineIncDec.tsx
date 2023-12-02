import { divide, setDivide } from "./assets/store.ts";

export default function LineIncDec() {
  function inc() {
    setDivide(String(divide.value + 1));
  }

  function dec() {
    setDivide(String(Math.max(1, divide.value - 1)));
  }
  return (
    <div class="flex flex-row justify-end gap-2">
      <button
        type="buttonn"
        onClick={dec}
        class="w-12 h-12 bg-indigo-500 text-white rounded text-2xl"
      >
        -
      </button>
      <button
        type="buttonn"
        onClick={inc}
        class="w-12 h-12 bg-indigo-500 text-white rounded text-2xl"
      >
        +
      </button>
    </div>
  );
}
