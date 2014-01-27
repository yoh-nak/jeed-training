/**
合計値を算出する
@param {number} left 左辺値
@parem {number} right 右辺値
@return {number} 合計値
@example
	sum(1, 2); //=> 3
	sum(1); //=> NaN
*/
function sum(left, right){
	return left + right;
}

/**
平均値を算出する
@param {number} left 左辺値
@parem {number} right 右辺値
@return {number} 合計値
@example
	ave(1, 3); //=> 2
	ave(1); //=> NaN
*/
function ave(left, right){
	return (left + right) / 2;
}