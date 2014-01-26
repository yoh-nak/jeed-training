
describe('add', function() {
 it('足し算の合計をかえすべき', function() {
  var result = add(1, 2);
  expect(result).toEqual(3);
 });
  it('引数が数値ではない場合はNaNを返すべき',function(){
    var result = add('test', 2);
    expect(result != result).toBeTruthy;
  });
});

describe('multiply', function() {
 it('負の数どうしをかけると正の数になるべき', function() {
  var result = multiply(-1, -2);
  expect(result).not.toEqual(-2);
 });
});