'use strict';

// 目標:マウスストーカーをTweenMaxなしで実装

{
	const cursor = document.getElementById('cursor');
	const follower = document.getElementById('cursor-follower');
 	const link = document.getElementById('clickableArea');
	const ease = 0.15;
	let cw = cursor.offsetWidth;
	let ch = cursor.offsetHeight;
	let fw = follower.offsetWidth;
	let fh = follower.offsetHeight;
	let nowX = 0;
	let nowY = 0;
	let mouseX = 0;
	let mouseY = 0;

	window.requestAnimationFrame(update);

	window.addEventListener('mousemove', (e) => {
		mouseX = e.clientX;
		mouseY = e.clientY; 
	});

	function update() {
		nowX += (mouseX - nowX) * ease;
		nowY += (mouseY - nowY) * ease;

		cursor.style.left = (mouseX - cw / 2) + 'px';
		cursor.style.top = (mouseY - ch / 2) + 'px';

		follower.style.left = (nowX - fw / 2) + 'px';
		follower.style.top = (nowY - fh / 2) + 'px';

		window.requestAnimationFrame(update);
	}

	link.addEventListener('mouseenter', (e) => {
		follower.classList.add('active');
	});
	link.addEventListener('mouseleave', (e) => {
		follower.classList.remove('active');
	});

	
}