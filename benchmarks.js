var Benchmark = require('benchmark');

var loop = require('./loop');
var ongoing = require('./ongoing');
var recursive = require('./recursive');
var recursiveMemo = require('./recursiveMemo');

var suite = new Benchmark.Suite;

var i = 20;

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

