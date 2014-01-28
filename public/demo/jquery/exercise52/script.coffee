$ ->
	$('#iam')  # id 属性が "iam" である要素を取得 
	.css('background-color', 'Yellow')  # 背景を黄色に 

	.children()  # 子要素群を取得 
	.css('font-weight', 'bold')  # フォントを太字に 
	.end()  # カレント要素を元の位置に 

	.prev()  # 直前の兄要素を取得 
	.css('background-color', 'Lime')  # 背景をライム色に 
	.end()  # カレント要素を元の位置に 

	.prevAll()  # すべての兄要素を取得 
	.css('color', 'Red')  # テキストを赤色に 
	.end()  # カレント要素を元の位置に 

	.prevUntil('.border')  # class 属性が "border" である兄要素まで取得 
	.css('font-style', 'italic')  # フォントを斜体に 
	.end()  # カレント要素を元の位置に 

	.next()  # 直後の弟要素を取得 
	.css('background-color', 'Aqua')  # 背景をアクア色に 
	.end()  # カレント要素を元の位置に 

	.nextAll()  # すべての弟要素を取得 
	.css('color', 'Blue')  # テキストを青色に 
	.end()  # カレント要素を元の位置に 
	
	return
	.nextUntil('.border')  # class 属性が "border" である弟要素まで取得 (=該当なし) 
	.css('font-size', 'xx-small')  # フォントサイズを最小に 
	.end()  # カレント要素を元の位置に 

	.parent()  # 親要素を取得 
	.css('border', 'solid 1px Black');  # 黒の枠線を付与 