'use strict';
{
	// 目標：スムーススクロールでリンク先に移動する、移動スピードは調整できるようにする

	const btns = document.querySelectorAll('.menu-item');
	const duration = 1;

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
				ease: CustomEase.create("custom", "M0,0,C0.25,0,0.294,0.023,0.335,0.05,0.428,0.11,0.466,0.292,0.498,0.502,0.532,0.73,0.524,0.843,0.574,0.896,0.664,0.992,0.698,1,1,1"),
				scrollTop: offsetTop,
			});

		});
		
	});

}