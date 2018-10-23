const Benchmark = require('benchmark');
const loop = require('./loop');
const ongoing = require('./ongoing');
const recursive = require('./recursive');
const recursiveMemo = require('./recursiveMemo');

const suite = new Benchmark.Suite;

const i = 20;

suite
  .add('loop', () => {
    loop(i);
  })
  .add('while', () => {
    ongoing(i);
  })
  .add('recursive', () => {
    recursive(i);
  })
  .add('recursiveMemo', () => {
    recursiveMemo(i);
  })
  .on('cycle', e => {
    console.log(String(e.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({'async': true });

