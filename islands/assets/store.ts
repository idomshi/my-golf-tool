import { batch, computed, signal } from "@preact/signals";

export const total = signal(11000);
export const entry = signal(500);
export const divide = signal(4);
export const ball = signal([17, 17, 17, 17]);

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

export function incDivide() {
  batch(() => {
    divide.value += 1;
    const b = ball.value[ball.value.length - 1];
    ball.value.push(b);
  });
}

export function decDivide() {
  batch(() => {
    divide.value -= 1;
    if (divide.value < 1) {
      divide.value = 1;
      return;
    }
    ball.value.splice(-1);
  });
}

export function setBall(index: number, value: string) {
  if (index >= ball.value.length) return;
  const num = parseInt(value);
  if (isNaN(num)) return;
  ball.value[index] = num;
}

export const stops = computed(() => {
  let remain = total.value;
  const usable = (total.value - entry.value * divide.value) /
    divide.value;
  const result = [];
  for (let i = 0; i < divide.value; ++i) {
    result.push({
      start: Math.floor((remain - entry.value) / ball.value[i]),
      stop: Math.floor((remain - entry.value - usable) / ball.value[i]),
      balls: Math.floor(usable / ball.value[i]),
      ballfee: ball.value[i],
    });

    remain -= entry.value + usable;
  }

  return result;
});

export const total_balls = computed(() => {
  return stops.value.map((v) => v.balls).reduce((p, c) => p + c, 0);
});
