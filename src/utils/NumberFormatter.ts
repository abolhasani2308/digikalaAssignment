import numbro from 'numbro';

export default function NumberFormatter(value: number) {
  if (typeof value !== 'number') return value;
  if (value) {
    const parts = String(value)?.split('.');

    let integer = numbro(parts?.[0])?.format({thousandSeparated: true});
    let res;
    if (parts?.length > 1) {
      res = integer + '.' + parts?.[1];
    } else {
      res = integer;
    }
    return res ?? '0';
  } else {
    return '0';
  }
}
