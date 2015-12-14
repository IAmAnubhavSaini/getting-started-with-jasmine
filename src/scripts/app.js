var myAppCreator = function(global) {
  global.app = global.app || {};
  global.app.sum = function (a, b) {
    return a+b;
  };
  return global.app;
};
