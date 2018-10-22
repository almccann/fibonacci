function test(fib) {
  
  let count = 0;

  return function() {
    let f = recursive(count);

    if (f === fib) {
      return count;
    }
    count++
  }
}
