import { createDate } from '@/helpers/date';

const UNKNOWN_VAL = 'unknown';

export function numberCompare(a, b) {
  if (a === UNKNOWN_VAL && b === UNKNOWN_VAL) return 0;
  if (a === UNKNOWN_VAL) return -1;
  if (b === UNKNOWN_VAL) return 1;

  const _a = Number(a);
  const _b = Number(b);
  if (_a > _b) return 1;
  if (_a < _b) return -1;
  return 0;
}

export function dateCompare(a, b) {
  const _a = createDate(a).unix();
  const _b = createDate(b).unix();
  if (_a > _b) return 1;
  if (_a < _b) return -1;
  return 0;
}
