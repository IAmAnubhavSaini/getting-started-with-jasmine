describe("app tests", function(){
  var global = {};
  var app = myAppCreator(global);
  it("creates app and returns sum", function(){
    expect(app.sum(1, 2)).toBe(3);
  });
});