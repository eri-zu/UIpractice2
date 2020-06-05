'use strict';
{
	// 目標：スムーススクロールでリンク先に移動する、移動スピードは調整できるようにする

	const btns = document.querySelectorAll('.menu-item');
	const duration = 0.25;

	btns.forEach(btn => {

		btn.addEventListener('click', e => {

			e.preventDefault();

			const clickedItem = e.target;
			const targetHref = clickedItem.getAttribute('href');
			const destination = document.querySelector(targetHref);
			const offsetTop = destination.getBoundingClientRect().top;

			console.log(clickedItem);
			console.log(targetHref);
			console.log(destination);
			console.log(offsetTop);

			TweenMax.to(document.documentElement, duration, {
				scrollTop: offsetTop
			});

		});
		
	});

}