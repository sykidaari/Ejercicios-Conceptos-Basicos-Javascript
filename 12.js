const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
  for (let i = 0; i < param.length; i++) {
    const firstOne = param[i];
    for (let j = i + 1; j < param.length; j++) {
      const secondOne = param[j];
      if (firstOne === secondOne) {
        param.splice(j, 1);
        j--;
      }
    }
  }
  return param;
}
console.log(removeDuplicates(duplicates));
