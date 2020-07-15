'use strict';

// 目標:マウスストーカーの自力実装 / 座標取得についての知見を深める / ちょっといじる

{
	const link = document.getElementById('clickableArea');
	const cursor = document.getElementById('cursor');
	const follower = document.getElementById('cursor-follower');
	const txt = document.getElementById('cursor-txt');
	const cWidth = cursor.offsetWidth;
	const fWidth = follower.offsetWidth;
	const tWidth = txt.offsetWidth;
	const tHeight = txt.offsetHeight;
	const delay = 10;
	const duration = 0.016;
	let mouseX = 0;
	let mouseY = 0;
	let posX = 0; // followerの座標
	let posY = 0;

	TweenMax.to({}, duration, {
		repeat: -1,
		onRepeat: function(){
			posX += (mouseX - posX) / delay;
			posY += (mouseY - posY) / delay;

			TweenMax.set(cursor, {
				left: mouseX - cWidth / 2, // 座標を中心に持ってくるための処理
				top: mouseY - cWidth / 2
			});
			
			TweenMax.set(follower, {
				left: posX - fWidth / 2, // 座標を中心に持ってくるための処理
				top: posY - fWidth / 2
			});

			TweenMax.set(txt, {
				left: posX - tWidth / 2, // 座標を中心に持ってくるための処理
				top: posY - tHeight / 2
			});
		}   
	});


	// マウスの座標を取得
	document.addEventListener('mousemove', e => {
		mouseX = e.pageX;
		mouseY = e.pageY;
	});

	link.addEventListener('mouseenter', (e) => {
		cursor.classList.add('active')
		follower.classList.add('active')
		txt.classList.add('active')
	});

	clickableArea.addEventListener('mouseleave', e => {
		cursor.classList.remove('active')
		follower.classList.remove('active')
		txt.classList.remove('active')
	});

	
}