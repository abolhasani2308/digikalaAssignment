import NumberDigitsConverter from './NumberDigitsConverter';
import NumberFormatter from './NumberFormatter';

export default function NumberFixer(value: number | string) {
  return NumberDigitsConverter(NumberFormatter(Number(value)));
}
