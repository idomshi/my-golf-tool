import { Signal } from "@preact/signals";
import { useId } from "preact/hooks";

interface Props {
  label: string;
  value: Signal<number>;
  setValue: (val: string) => void;
}

export default function NumberInput(props: Props) {
  const id = useId();
  function changeValue(ev: Event) {
    const target = ev.target;
    if (!(target instanceof HTMLInputElement)) return;
    props.setValue(target.value);
  }

  return (
    <div class="flex flex-col gap-2 items-start">
      <label htmlFor={id} class="text-right text-slate-600">
        {props.label}
      </label>
      <input
        type="text"
        id={id}
        class="w-full p-2 border rounded text-right"
        value={props.value}
        onInput={changeValue}
      />
    </div>
  );
}
