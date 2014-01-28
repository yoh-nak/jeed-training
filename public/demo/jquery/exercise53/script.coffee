$ ->
	$('#me')  # id 属性が "me" である要素を取得 
	.css('background-color', 'Yellow')  # 背景を黄色に 

	.prev('.new')  # 直前の兄要素が class="new" である場合のみ取得 (＝該当なし) 
	.css('background-color', 'Aqua')  # 背景をアクア色に 
	.end()  # カレント要素を元の位置に 

	.nextAll('.new')  # class="new" である弟要素を取得 
	.css('background-color', 'Lime');  # 背景をライム色に
	return