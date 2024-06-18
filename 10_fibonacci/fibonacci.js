const fibonacci = function (n) {
  n = Number(n);
  if (isNaN(n) || n < 0)
    return "OOPS";
  if (n === 0)
    return 0;
  else if (n === 1)
    return 1;
  else {
    let a = 1;
    let b = 0;
    for (let i = 2; i <= n; i++) {
      ans = a + b;
      b = a;
      a = ans;
    }
    return ans;
  }
};

// Do not edit below this line
module.exports = fibonacci;
