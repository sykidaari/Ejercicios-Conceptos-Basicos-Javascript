// Ejercicio propio para mejor comprensión
const berries = ['blackberry', 'strawberry', 'valberry', 'blueberry'];
const findShortestWord = (param) => {
  let shortest = param[0];
  for (let i = 0; i < param.length; i++) {
    if (param[i].length < shortest.length) {
      shortest = param[i];
    }
  }
  return shortest;
};
console.log(findShortestWord(berries));
