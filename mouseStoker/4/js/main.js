'use strict';

// 目標:マウスストーカーをTweenMaxなしで実装

{
	const cursor = document.getElementById('cursor');
	const follower = document.getElementById('cursor-follower');
 	const link = document.getElementById('clickableArea');
	const ease = 0.13;  // イージング係数＝追従スピード（数値が大きいほど追従スピードが早い）
	let cw = cursor.offsetWidth; // カーソルの横幅
	let ch = cursor.offsetHeight; // カーソルの横幅
	let fw = follower.offsetWidth; // フォロワーの横幅
	let fh = follower.offsetHeight; //フォロワーの縦幅
	let posX = 0; // 動かした後のマウスのx座標
	let posY = 0; //動かした後のマウスのy座標
	let mouseX = 0; //現在のマウスのx座標
	let mouseY = 0; //現在のマウスのy座標

	window.requestAnimationFrame(update); // update関数をコールし続ける

	window.addEventListener('mousemove', (e) => {
		mouseX = e.clientX; // 現在のマウスのx座標
		mouseY = e.clientY;  // 現在のマウスのy座標
	});

	function update() {
		posX += (mouseX - posX) * ease; // 現在の座標 += （目的地の座標 - 現在地の座標） * イージング係数
		posY += (mouseY - posY) * ease; 

		cursor.style.left = (mouseX - cw / 2) + 'px'; // カーソルのx座標
		cursor.style.top = (mouseY - ch / 2) + 'px';  // カーソルのy座標

		follower.style.left = (posX - fw / 2) + 'px'; // フォロワーのx座標
		follower.style.top = (posY - fh / 2) + 'px'; // フォロワーのy座標

		window.requestAnimationFrame(update); 
	}

	link.addEventListener('mouseenter', (e) => { // マウスがlink上にのったとき
		follower.classList.add('active'); // activeクラスをadd
	});
	link.addEventListener('mouseleave', (e) => { // マウスがlink上から離れたとき
		follower.classList.remove('active'); // activeクラスをremove
	});

	
}