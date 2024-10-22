const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let result = 0;
  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    result += element;
  }
  return result / param.length;
}
average(numbers);
