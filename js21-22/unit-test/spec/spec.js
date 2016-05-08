var pow =  require('../../js/script.js');

describe("pow", function() {
  it("positive exponent", function() {
    var result;
    result = pow('2,3');
    expect(result).toBe(8);
  });
  it("zero exponent", function(){
    var result;
    result = pow('2,0');
    expect(result).toBe(1);
  });
  it("negative exponent", function(){
    var result;
    result = pow('2,-1');
    expect(result).toBe(0.5);
  });
});
