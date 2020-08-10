'use strict';

{
	const btn = document.getElementById('pagetop');
	// let timer;


	btn.addEventListener('click', goBack);

	function goBack() {
		const nowY = window.pageYOffset; // 現在のスクロール量

		window.scrollTo(0, nowY - 100);

		if(nowY > 0) {
			const timer = window.setTimeout(goBack, 10);
		}

	}

	// 関数の中でsetTimeoutを呼び出し、さらにそれをsetTimeoutで呼び出すと繰り返しになる
	// setTimeoutを再起的に呼び出す

}