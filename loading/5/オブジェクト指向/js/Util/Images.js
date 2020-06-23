import Percent from "./Percent.js";

export default class Images {

	constructor () {
		// DOM
		this.imgs = document.querySelectorAll('img');
		this.len = imgs.length;
	}

	setSrc() {
		this.imgs.forEach(img => {

			img.addEventListener('load', () => {
				this.percent = new Percent();
				this.percent.updateProgress();
			});

			src = img.getAttribute('data-src');
			img.setAttribute('src', src);

		});
	}

}