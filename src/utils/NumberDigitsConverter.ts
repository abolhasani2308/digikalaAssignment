export default function NumberDigitsConverter(number: number | string) {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  return number?.toString()?.replace(/\d/g, x => farsiDigits[x]);
}
