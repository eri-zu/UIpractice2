'use strict';

// 目標:マウスストーカーをTweenMaxなしで実装

{
	const cursor = document.getElementById('cursor');
	const follower = document.getElementById('cursor-follower');
 	const link = document.getElementById('clickableArea');
	let cw = cursor.offsetWidth;
	let ch = cursor.offsetHeight;
	let fw = follower.offsetWidth;
	let fh = follower.offsetHeight;
	let mouseX;
	let mouseY;

	window.addEventListener('mousemove', (e) => {

		mouseX = e.pageX;
		mouseY = e.pageY; 

		cursor.style.left = (mouseX - cw / 2) + 'px';
		cursor.style.top = (mouseY - ch / 2) + 'px';

		follower.style.left = (mouseX - fw / 2) + 'px';
		follower.style.top = (mouseY - fh / 2) + 'px';

	});

	link.addEventListener('mouseenter', (e) => {
		follower.classList.add('active');
	});
	link.addEventListener('mouseleave', (e) => {
		follower.classList.remove('active');
	});

	



	
}