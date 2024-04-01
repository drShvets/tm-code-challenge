export function formatNumber(value, options = {}) {
  const formatter = new Intl.NumberFormat('en', { ...options });
  return formatter.format(value);
}
