const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  let totalLength = 0;
  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    if (typeof element === 'string') {
      totalLength += element.length;
    } else if (typeof element === 'number') {
      totalLength += element;
    }
  }
  return totalLength / param.length;
}
