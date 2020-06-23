import Screen from "../Util/Screen.js";
import Images from "../Util/Images.js";
import Percent from "../Util/Percent.js";

export default class Manager extends EventTarget {

	constructor () {
		super ();

		// 管轄するクラス
		this.screen = new Screen();
		this.images = new Images();
		this.percent = new Percent();

		this.percent.addEventListener('updatedCounter', () => {
			this.images.setSrc();
		});
		
		this.percent.addEventListener('reachedMax', () => {
			this.screen.onComplete();
		});

		this.images.addEventListener('loadedImg', () => {
			this.percent.updateProgress();
		});

	}

}