const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  let result = 0;
  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    result += element;
  }
  return result;
}
