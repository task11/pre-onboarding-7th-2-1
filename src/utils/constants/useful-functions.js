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

  const data = new Date(string).toLocaleDateString('ko-KR', options).split(' ');

  return `${data[0]} ${data[1]} (${data[2][0]})`;
}
