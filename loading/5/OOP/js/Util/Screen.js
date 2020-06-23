export default class Screen extends EventTarget {
	constructor () {
		super ();
		// DOM
		this.loadingScreen = document.querySelectorAll('.loading');
	}

	onComplete() {
		this.loadingScreen.classList.add('hide');
	}

}