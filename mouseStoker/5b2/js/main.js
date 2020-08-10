'use strict';

// 目標:マウスストーカーをTweenMaxなしで実装

{
	const follower = document.getElementById('cursor-follower');
	const ease = 0.13;  // イージング係数＝追従スピード（数値が大きいほど追従スピードが早い）
	let fw = follower.offsetWidth; // フォロワーの横幅
	let fh = follower.offsetHeight; //フォロワーの縦幅
	let posX = 0; // 目標地点のマウスのx座標
	let posY = 0; //目標地点のマウスのy座標
	let mouseX = 0; //現在のマウスのx座標
	let mouseY = 0; //現在のマウスのy座標

	window.requestAnimationFrame(update); // update関数をコールし続ける

	window.addEventListener('mousemove', (e) => {
		//マウスの位置
		mouseX = e.clientX; 
		mouseY = e.clientY;  
	});

	function update() {
		// イージングの公式
		posX += (mouseX - posX) * ease;
		posY += (mouseY - posY) * ease; 

		//　フォロワーの位置を更新
		follower.style.left = (posX - fw / 2) + 'px';
		follower.style.top = (posY - fh / 2) + 'px'; 

		window.requestAnimationFrame(update); 
	}

}