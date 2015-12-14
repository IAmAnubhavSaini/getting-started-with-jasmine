var app = (function(global) {
  global.app = global.app || {};
  function sum(a, b) {
    return a+b;
  }
  global.app = { sum: sum };
  return global.app;
});
