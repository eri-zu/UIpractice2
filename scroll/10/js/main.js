'use strict';

{
	const sections = document.querySelectorAll('.sec');
	const dots = document.querySelectorAll('.indicator-dot');
	let scrollY = 0;

	window.addEventListener('scroll', () => {

		scrollY = window.pageYOffset;

		// section02
		const sec2 = document.getElementById('section02');
		let sec2top = sec2.getBoundingClientRect().top + scrollY;

		// section03 
		const sec3 = document.getElementById('section03');
		let sec3top = sec3.getBoundingClientRect().top + scrollY;

		// section04
		const sec4 = document.getElementById('section04');
		let sec4top = sec4.getBoundingClientRect().top + scrollY;

		// section05
		const sec5 = document.getElementById('section05');
		let sec5top = sec5.getBoundingClientRect().top + scrollY;

		if(scrollY > sec2top && scrollY < sec3top) {
			removeAllActive();
			putActive(1);
		} else if(scrollY > sec3top && scrollY < sec4top) {
			removeAllActive();
			putActive(2);
		} else if(scrollY > sec4top && scrollY < sec5top) {
			removeAllActive();
			putActive(3);
		} else if(scrollY > sec5top) {
			removeAllActive();
			putActive(4);
		} else {
			removeAllActive();
			putActive(0);
		}
 
	});

	function removeAllActive() {
		dots.forEach(dot => {
			dot.classList.remove('active');
		});
	}

	function putActive(i) {
		dots[i].classList.add('active');
	}

	dots.forEach(dot => {
		dot.addEventListener('click', (e) => {

			const targetDot = e.target;
			const targetIndex = Array.prototype.indexOf.call(dots, targetDot);
			const destination = sections[targetIndex];
			const offsetTop = destination.getBoundingClientRect().top + scrollY;

			dot.classList.remove('active');
			putActive(targetIndex);

			TweenMax.to(document.documentElement, 0.7, {
				ease: Power4.easeInOut,
				scrollTop: offsetTop,
			});

		});
	});

}