import dayjs from 'dayjs';

const DEFAULT_FORMAT = 'DD.MM.YYYY HH:mm';

export function formatDate(date, format = DEFAULT_FORMAT) {
  const _date = createDate(date);

  return _date.format(format);
}

export function createDate(date) {
  return dayjs(date);
}
