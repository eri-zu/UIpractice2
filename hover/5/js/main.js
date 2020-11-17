'use strict';

{
	const menuItems = document.querySelectorAll('.nav_pc-item');
	const menuBars = document.querySelectorAll('.nav_pc-bar');

	menuItems.forEach(menuItem => {

			menuItem.addEventListener('click', (e) => {

				const clickedItem = e.currentTarget;
				const targetIndex = Array.prototype.indexOf.call(menuItems, clickedItem);

			  menuBars.forEach(menuBar => {
					menuBar.classList.remove('is-on');
				});

				menuBars[targetIndex].classList.add('is-on');	
			})

	});

}