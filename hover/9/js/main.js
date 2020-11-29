'use strict';

// 目標:ハンバーガーメニュー

{
  const bar01 = document.getElementById('bar01');
  const bar02 = document.getElementById('bar02');
	const icon = document.getElementById('menuIcon');
	const bars = document.querySelectorAll('.menuIcon-bar');
	const txt = document.getElementById('menuIcon-txt');
	const bg = document.getElementById('menu-bg');
	const menuItems = document.querySelectorAll('.menu-item');
	const menu = document.getElementById('menu');
	const closeIcon = document.getElementById('menu-closebtn');
	const closebtnBars = document.querySelectorAll('.menu-closebtn-bar');

	icon.addEventListener('mouseenter', wave);
 
	function wave() {

		const tl = new TimelineMax();

		tl
		.staggerTo(bars, 0.4, {
			scaleX: 0,
			startAt: {
				scaleX: 1,
        transformOrigin: "0 0"
			},
			ease: Expo.easeOut
		}, 0.1)
		.staggerTo(bars, 0.4, {
			scaleX: 1,
			startAt: {
				scaleX: 0,
        transformOrigin: "100% 0"
			},
			ease: Expo.easeOut
		}, 0.1)
		
	}

	icon.addEventListener('click', show);

	function show() {
		menu.classList.add('is-active');
		fadeOutMenuIcon();
		fadeInBg();
	}

	function fadeOutMenuIcon() {
		TweenMax.to(txt, 0.5, {
			ease: Expo.easeOut,
			opacity: 0
		});

		TweenMax.staggerTo(bars, 0.5, {
			ease: Expo.easeOut,
			opacity: 0
		}, 0);
	}

	function fadeInBg() {

		const tl = new TimelineMax();

		tl
		.to(
			bg, 
			0.8, 
			{
				ease: Expo.easeOut,
				x: 0,
				opacity: 1,
				z: 1,
				startAt: {
          x: 300,
					opacity: 0,
					transformOrigiin: "0 0"
				} 
			}
		)
		.staggerTo(
			menuItems, 
		  2, 
			{
				ease: Expo.easeOut,
				x: 0,
				opacity: 1,
				startAt: {
          x: 10,
					opacity: 0,
				} 
			}, 0.06, "-=0.2" // each item 0.06 // 本来あるべきタイムラインより0.2s早く始まる
		)
		closebtnBars.forEach((closebtnBar, i) => {
			tl.to(
				closebtnBar, 
				0.4, 
				{
					scaleX: 1,
					startAt: {
						scaleX: 0,
						transformOrigin: "100% 0",
						rotation: i == 0 ? -45 : 45
					},
					ease: Expo.easeOut,
					delay: 0.1
				}, 
				0.1 * i, 
			);
		});
	}

	closeIcon.addEventListener('mouseenter', wave02);

	function wave02() {
		
		const tl = new TimelineMax();

		closebtnBars.forEach((closebtnBar, i) => {
			tl
			.to(
				closebtnBar, 
				0.4, 
				{
					scaleX: 0,
					startAt: {
						scaleX: 1,
						transformOrigin: "100% 0",
						rotation: i == 0 ? -45 : 45
					},
					ease: Expo.easeOut,
				}, 
				0.1 * i, 
			)
			.to(
				closebtnBar, 
				0.4, 
				{
					scaleX: 1,
					startAt: {
						scaleX: 0,
						transformOrigin: "100% 0",
						rotation: i == 0 ? -45 : 45
					},
					ease: Expo.easeOut,
				}, 
				0.1 * i + 0.2, 
			)
		});

	}

	



}