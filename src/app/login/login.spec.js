describe("blog-app.login", function () {
  var test;

  beforeEach(module('blog-app.login'));
  beforeEach(inject(function(_test_) {
    test = _test_;
  }));

  it("should equal 2", function () {
    expect(test).toBe(2);
  });
});