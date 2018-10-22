
function recursive(i) {
  if (i === 0) {
    return 0;
  }
  if (i === 1 || i === 2) {
    return 1;
  }
  return recursive(i - 1) + recursive(i - 2);
}

//console.log(recursive(Number(process.argv[2])));

module.exports = recursive;
