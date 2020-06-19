'use strict';

// 目標:タイプライターアニメーションの基本2
// テキストの内容はhtmlに事前に記載 （ロードしたとき微妙？）
// forを使う
// タイピングバー（縦）を追加

{
	const target = document.querySelector('.text');
	const txt = target.textContent;
	target.textContent = '';
	let letters = txt.split(''); 

	const num = letters.length; // 245
	const speed = 50;

	for(let i = 0; i < num; i ++) {

		setTimeout(() => {
			target.textContent += letters[i];
		}, i * speed);

	}
	
}