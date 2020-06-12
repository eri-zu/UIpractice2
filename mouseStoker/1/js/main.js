'use strict';

// 目標:マウスストーカーの実装 / 座標取得についての知見を深める

{
	const cursor = 	document.getElementById('cursor');
	const follower = document.getElementById('cursor-follower');
	const link = document.getElementById('clickableArea');
	const cWidth = 6;
	const fWidth = 40;
	const delay = 10; // followerの追従スピード
	let mouseX = 0; // cursor（マウス）の座標
	let mouseY = 0;
	let posX = 0; // followerの座標
	let posY = 0;

	// マウス座標を取得
	document.addEventListener('mousemove', (e) => {
		mouseX = e.pageX; //ページ全体でのマウスの位置座標
		mouseY = e.pageY;
	});

	TweenMax.to({}, 0.016, {
		repeat:-1,
		onRepeat:function(){
			posX += (mouseX - posX) / delay;
			posY += (mouseY - posY) / delay;
			
			TweenMax.set(follower, {
				left: posX - fWidth / 2, // 座標を中心に持ってくるための処理
				top: posY - fWidth / 2
			});
			TweenMax.set(cursor, {
				left: mouseX - cWidth / 2, // 座標を中心に持ってくるための処理
				top: mouseY - cWidth / 2
			});
		}   
	});

	// マウスが乗ったらクラスをつける
	link.addEventListener('mouseenter', (e) => {
		cursor.classList.add('active');
		follower.classList.add('active');
	});

	// マウスが外れたらクラスを外す
	link.addEventListener('mouseleave', (e) => {
		cursor.classList.remove('active');
		follower.classList.remove('active');
	});

}