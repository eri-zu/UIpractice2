'use strict';

{
	const btn = document.getElementById('pagetop');
	const ease = 0.9; // 数字が大きいほど遅い（いっぱい刻むので）

	btn.addEventListener('click', goBack);

	function goBack() {
		const nowY = window.pageYOffset; // 現在のスクロール量

		window.scrollTo(0, Math.floor(nowY * ease)); // どんどん遅くなる（ease-out）

		if(nowY > 0) {
			window.setTimeout(goBack, 10); 
		}

		console.log(nowY);

	}

	// 関数の中でsetTimeoutを呼び出し、さらにそれをsetTimeoutで呼び出すと繰り返しになる
	// setTimeoutを再起的に呼び出す

}