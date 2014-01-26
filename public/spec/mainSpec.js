describe('str', function() {
	it('引数が渡されればundefinedを返すべきではない', function() {
		expect(str('hoge')).toBeDefined();
	});
	it('引数が渡されなければundefinedを返すべき', function() {
		expect(str()).toBeUndefined();
	});
	it('引数にnullが指定されたらnullを返すべき', function() {
		expect(str(null)).toBeNull();
	});
	it('引数に与えられたものと同じものを返すべき', function() {
		expect(str('hoge')).toBe('hoge');
	});
	it('引数に文字が与えられるべき', function() {
		expect(str('hoge')).toMatch(/^[\D]+$/);
	});
	it('引数に文字以外が与えられるべきではない', function() {
		expect(str('1')).not.toMatch(/^[\D]+$/);
	});
});

describe('different', function() {
	it('引数に与えられた数値と違う数値を返すべき', function() {
		expect(different(1)).not.toBe(1);
	});
});

describe('add', function() {
	xit('足し算の合計をかえすべき', function() {
		//var result = add(1, 2);
		//expect(result).toEqual(3);

		expect(add(1, 2)).toEqual(3);
	});
	it('引数が数値ではない場合はNaNを返すべき',function(){
		//var result = add('hoge', 2);
		//expect(result !== result).toBeTruthy();

		expect(add('hoge', 2) !== add('hoge', 2)).toBeTruthy();
	});
});

describe('multiply', function() {
	xit('負の数どうしをかけると正の数になるべき', function() {
		//var result = multiply(-1, -2);
		//expect(result).not.toEqual(-2);

		expect(multiply(-1, -2)).not.toEqual(-2);
	});
});
describe('bool', function() {
	xit('trueを返すべき', function() {
		expect(bool('hoge')).toBeTruthy();
	});
});

describe('bool', function() {
	it('falseを返すべき', function() {
		expect(bool('foo')).toBeFalsy();
	});
});

describe('compare', function() {
	it('aがbより大きいべき', function() {
		expect(compare(2, 1)).toBeGreaterThan(1);
	});
	it('aがbより小さいべき', function() {
		expect(compare(1, 2)).toBeLessThan(2);
	});
});

describe('ary', function() {
	it('配列の要素に0を含むべき', function() {
		expect(ary([0,1,2,3])).toContain(0);
	});
	it('配列の要素に0を含まないべき', function() {
		expect(ary([1,2,3,4])).not.toContain(0);
	});
});	