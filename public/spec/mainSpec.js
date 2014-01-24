describe('sum', function() {
  it('引数の合計をかえすことができる', function() {
    var result = sum(1, 2);
    expect(result).toEqual(3);
  });
  it('引数が数値ではない場合はNaNを返すべき',function(){
    var result = sum('test', 2);
    expect(result != result).toBeTruthy;
  });
});
