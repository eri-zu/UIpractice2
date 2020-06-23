export default class Percent extends EventTarget{

	constructor () {
		super ();
		// DOM
		this.txt = document.querySelector('.loading-percent');
		// variable
		this.target = 0;
		this.loadIndex = 0;
	}

	updateProgress() {

		//カウンター
		this.loadIndex ++;

		// 進捗率（%）
		this.target = this.loadIndex / this.len * 100;
		this.txt.textContent = Math.floor(this.target); 

		// 終了処理
		if(this.target >= 100) {
			this.dispatchEvent(new Event('reachedMax'));
		}

		// 更新報告
		this.dispatchEvent(new Event('updatedCounter'));
			
	}

}