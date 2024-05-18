console.log('test akata');

function nonConsecutiveDigits(N) {
  J = ++N;
  i = 0;
  while (true) {
    strJ = J.toString();
    if (strJ[i] === strJ[i + 1]) {
      J++;
      continue;
    }
    if (i >= strJ.length - 1) {
      break;
    } else {
      i++;
      continue;
    }
  }
  return J
}