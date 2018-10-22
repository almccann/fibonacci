
function ongoing(num) {
  var a = 1, b = 0, temp;

  if (num === 0) {
    return 0;
  }

  while (num >= 1){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

//console.log(ongoing(Number(process.argv[2])));

module.exports = ongoing;
