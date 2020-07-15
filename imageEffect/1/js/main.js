'use strict';

{
	const covers = document.querySelectorAll('.photos-item');
	const wh = window.innerHeight;
	let scrollY = 0;

	window.addEventListener('scroll', () => {

		scrollY = window.pageYOffset;

		// ウィンドウ画面に入ってきた瞬間発動
		covers.forEach(cover => {
			const offsetTop = cover.getBoundingClientRect().top + scrollY - wh;

			if(scrollY > offsetTop) {
				cover.classList.add('active');
			}

		});
	
	});
	
}