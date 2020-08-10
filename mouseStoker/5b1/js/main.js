'use strict';

{
	const follower = document.getElementById('cursor-follower');
	const fw = follower.offsetWidth; // フォロワーの横幅
	const fh = follower.offsetHeight; //フォロワーの縦幅
	let posX = 0; // 動かした後のマウスのx座標
	let posY = 0; //動かした後のマウスのy座標
	let mouseX = 0; //現在のマウスのx座標
	let mouseY = 0; //現在のマウスのy座標

	window.requestAnimationFrame(update); // update関数をコールし続ける

	// 現在のマウスの座標
	window.addEventListener('mousemove', (e) => {
		mouseX = e.clientX; 
		mouseY = e.clientY;  
	});

	function update() {

		posX = mouseX;
		posY = mouseY;

		// フォロワーの位置を更新
		follower.style.left = (posX - fw / 2) + 'px'; 
		follower.style.top = (posY - fh / 2) + 'px';

		window.requestAnimationFrame(update); 
	}
	
}