import { computed, signal } from "@preact/signals";

export const total = signal(11000);
export const entry = signal(500);
export const divide = signal(4);
export const ball = signal(17);

export function setTotal(value: string) {
  const v = parseInt(value);
  if (isNaN(v)) return;
  total.value = v;
}

export function setEntry(value: string) {
  const v = parseInt(value);
  if (isNaN(v)) return;
  entry.value = v;
}

export function setDivide(value: string) {
  const v = parseInt(value);
  if (isNaN(v)) return;
  divide.value = v;
}

export function setBall(value: string) {
  const v = parseInt(value);
  if (isNaN(v)) return;
  ball.value = v;
}

export const stops = computed(() => {
  let remain = total.value;
  const usable = Math.round(total.value - entry.value * divide.value) /
    divide.value;
  const result = [];
  for (let i = 0; i < divide.value; ++i) {
    result.push({
      start: Math.floor((remain - entry.value) / ball.value),
      stop: Math.floor((remain - entry.value - usable) / ball.value),
      balls: Math.floor(usable / ball.value),
    });

    remain -= entry.value + usable;
  }

  return result;
});

export const total_balls = computed(() => {
  return stops.value.map((v) => v.balls).reduce((p, c) => p + c, 0);
});
