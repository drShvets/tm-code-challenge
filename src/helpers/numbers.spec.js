import { formatNumber } from './numbers';

describe('formatNumber', () => {
  it.each`
    value          | options                    | expectedValue
    ${100_000_000} | ${{ notation: 'compact' }} | ${'100M'}
    ${100_000_000} | ${{}}                      | ${'100,000,000'}
  `(
    'when value is $value and options are $options should return $expectedValue',
    ({ value, options, expectedValue }) => {
      expect(formatNumber(value, options)).toBe(expectedValue);
    }
  );
});
