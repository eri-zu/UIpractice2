'use strict';

{
	const menuItems = document.querySelectorAll('.nav_pc-item');
	const duration = 0.5;

	menuItems.forEach(menuItem => {

			menuItem.addEventListener('mouseenter', () => {

				const menuBar = menuItem.querySelector('.nav_pc-bar');
		
				TweenMax.to(menuBar, duration, {
					ease: Expo.easeOut,
					transformOrigin: "0 0",
					scaleX: 1
				});
			})

			menuItem.addEventListener('mouseleave', () => {

				const menuBar = menuItem.querySelector('.nav_pc-bar');
		
				TweenMax.to(menuBar, duration, {
					ease: Expo.easeOut,
					transformOrigin: "100% 0",
					scaleX: 0
				});
			})

	});


}