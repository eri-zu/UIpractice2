import Screen from "../Util/Screen.js";
import Images from "../Util/Images.js";
import Percent from "../Util/Percent.js";

export default class Manager {

	constructor () {
		// 管轄するクラス
		this.screen = new Screen();
		this.images = new Images();
		this.percent = new Percent();

		this.percent.addEventListener('updatedCounter', () => {
			this.images.setSrc();
			this.dispatchEvent(new Event(goUpdate));
		});
		
		this.percent.addEventListener('reachedMax', () => {
			this.screen.onComplete();
		});
	}

}