import Indicator from "../Util/Indicator.js";
import Slider from "../Util/Slider.js";

export default class Manager extends EventTarget {

	constructor () {
		super ();

		// 管轄するクラス
		this.indicator = new Indicator();
		this.slider = new Slider();

		this.indicator.addEventListener('clickedIndicator', (e) => {
			this.slider.goToSlide(e.detail);
		});

	}

}