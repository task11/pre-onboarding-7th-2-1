export function checkLength(value) {
  return !(value.length === 0);
}

export function addCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function formatDate(string) {
  const options = {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  };

  const date = new Date(string).toLocaleDateString('ko-KR', options).split(' ');

  return `${date[0]} ${date[1]} (${date[2][0]})`;
}

export function diffDate(string) {
  const now = new Date();
  const date = new Date(string);

  return Math.ceil((date.getTime() - now.getTime()) / (1000 * 3600 * 24)) <= 1;
}
