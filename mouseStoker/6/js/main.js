'use strict';

// 目標:マウスストーカーをTweenMaxなしで実装

{
	const follower = document.getElementById('cursor-follower');
 	const hoverableArea = document.getElementById('hoverableArea');
	const ease = 0.13;  // イージング係数＝追従スピード（数値が大きいほど追従スピードが早い）
	const color = [];
	let fw = follower.offsetWidth; // フォロワーの横幅
	let fh = follower.offsetHeight; //フォロワーの縦幅
	let posX = 0; // 動かした後のマウスのx座標
	let posY = 0; //動かした後のマウスのy座標
	let mouseX = 0; //現在のマウスのx座標
	let mouseY = 0; //現在のマウスのy座標

	setInterval(changeColor, 30);

	function changeColor() {

		for(let i = 0; i < 3; i ++) {
			color[i] = Math.floor(Math.random() * 256);
		}

		follower.style.backgroundColor = `rgba(${color[0]}, ${color[1]}, ${color[2]})`;

	}

	window.requestAnimationFrame(update); // update関数をコールし続ける

	window.addEventListener('mousemove', (e) => {
		mouseX = e.clientX; // 現在のマウスのx座標
		mouseY = e.clientY;  // 現在のマウスのy座標
	});

	function update() {
		posX += (mouseX - posX) * ease; // 現在の座標 += （目的地の座標 - 現在地の座標） * イージング係数
		posY += (mouseY - posY) * ease; 

		follower.style.left = (posX - fw / 2) + 'px'; // フォロワーのx座標
		follower.style.top = (posY - fh / 2) + 'px'; // フォロワーのy座標

		window.requestAnimationFrame(update); 
	}

	hoverableArea.addEventListener('mouseenter', (e) => { // マウスがlink上にのったとき
		follower.classList.add('active'); // activeクラスをadd
	});
	hoverableArea.addEventListener('mouseleave', (e) => { // マウスがlink上から離れたとき
		follower.classList.remove('active'); // activeクラスをremove
	});

	
}