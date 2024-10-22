const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(param, chosenName) {
  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    if (element === chosenName) {
      return [i, true];
    }
  }
  return false;
}
// console.log(finderName(nameFinder, 'Peggy'));
