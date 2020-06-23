export default class Screen {
	constructor () {
		// DOM
		this.loadingScreen = document.querySelectorAll('.loading');
	}

	onComplete() {
		this.loadingScreen.classList.add('hide');
	}

}