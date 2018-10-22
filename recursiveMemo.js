
function recursiveMemo(i, memo = {}) {

  if (memo[i]) return memo[i];  

  if (i === 0) {
    return 0;
  }
  if (i === 1 || i === 2) {
    return 1;
  }
  return memo[i] = recursiveMemo(i - 1, memo) + recursiveMemo(i - 2, memo);
}

//console.log(recursiveMemo(Number(process.argv[2])));

module.exports = recursiveMemo;
