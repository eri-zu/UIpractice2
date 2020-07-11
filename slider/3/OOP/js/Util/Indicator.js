export default class Indicator extends EventTarget {

	constructor() {
		super ();
		// DOM
		this.indicators = document.querySelectorAll('.indicator-dot');
	}

	getIndex() {
		this.indicators.forEach(indicator => {
			indicator.addEventListener('click', (e) => {
				
				const clickedItem = e.target;
				this.targetIndex = Array.prototype.indexOf.call(this.indicators, clickedItem);

				this.dispatchEvent(new CustomEvent('clickedIndicator', {detail: this.targetIndex}));

			});
		});
	}

}