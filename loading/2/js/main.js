'use strict';

// 目標:TweenMaxでローティング
{
	const dots = document.querySelectorAll('.loader-dot');

	// 2秒かけて、left, scale, opacityを変更 0.2秒ごとに実行
	TweenMax.staggerTo(dots, 2, {
		// 初期値
		startAt:{
			scale:0.5
		}, 
		left: '20px', // 20でもokだが、単位は%とかも可能なので多分'20px'と書くのが良い
		scale: 1.5,
		opacity: 0, 
		repeat: -1, // -1は無限リピート
	}, 0.2);

}