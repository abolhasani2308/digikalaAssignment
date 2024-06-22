import NumberDigitsConverter from './NumberDigitsConverter';
import NumberFormatter from './NumberFormatter';

export default function NumberFixer(value: number | string): string {
  return NumberDigitsConverter(NumberFormatter(Number(value)));
}
