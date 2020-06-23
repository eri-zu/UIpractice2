export default class Images extends EventTarget {

	constructor () {
		super ();
		// DOM
		this.imgs = document.querySelectorAll('img');
		this.len = this.imgs.length;
	}

	setSrc() {
		this.imgs.forEach(img => {
	
			img.addEventListener('load', () => {
				this.dispatchEvent(new Event('loadedImg'));
			});
		
			const src = img.getAttribute('data-src');
			img.setAttribute('src', src);

		});
	}

}