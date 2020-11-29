'use strict';

// 目標:ハンバーガーメニュー

{
	const icon = document.getElementById('menuIcon');
	const bars = document.querySelectorAll('.menuIconBar');
	const menu = document.getElementById('menu');
	const bg = document.getElementById('bg');
	const closeBtnBar = document.querySelectorAll('.closeBtn-bar');
	const menuItems = document.querySelectorAll('.menu-item');


	icon.addEventListener('mouseenter', () => {
    bars.forEach(bar => {
		  bar.classList.add('is-active');	
		});
	});
	icon.addEventListener('mouseleave', () => {
    bars.forEach(bar => {
		  bar.classList.remove('is-active');	
		});
	});

	icon.addEventListener('click', show);

	function show() {

		menu.style.display = "block"

		menu.classList.add('is-active');

		var tl = new TimelineMax();

		tl
		.to(
			//bg
			bg, 
			0.8, 
			{
				opacity: 1,
				x: 0,
				z: 1,
				startAt: {
					x: 300,
					opacity: 0
				},
				ease: Expo.easeOut,
			}
		)
    .add(() => {
			// menuItem
			TweenMax.staggerTo(menuItems, 1, {
				startAt: {
					opacity: 0,
					x: 10,
					// skewX: "20deg"
				},
				x: 0,
				opacity: 1,
				// skewX: "0deg"
			}, 0.07);
		}, 0.6)
    .add(() => {
			// closeBtnBar
			TweenMax.staggerTo(closeBtnBar, 0.5, {
				startAt: {
					"transform-origin": "100% 0",
					scaleX: 0,
					rotate: '30deg'
				},
				ease: Expo.easeOut,
				scaleX: 1,
			}, 0.1);
		}, 0.6)

	}




}