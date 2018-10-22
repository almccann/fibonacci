
function loop(n) {
  var a = 0, b = 1, f = 1;

  if (n === 0) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  for(var i = 2; i <= n; i++) {
      f = a + b;
      a = b;
      b = f;
  }
  return f;
};

//console.log(loop(Number(process.argv[2])));

module.exports = loop;
