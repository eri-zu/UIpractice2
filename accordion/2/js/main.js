'use strict';

// 目標:スライドダウンのアコーディオン
{
	const accs = document.querySelectorAll('.list-item');

	accs.forEach(acc => {
		acc.addEventListener('click', () => {
			const content = acc.querySelector('.list-content');

			content.classList.toggle('active');

			if(content.classList.contains('active')) {
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				content.style.maxHeight = '0px';
			}
		});
	});

}