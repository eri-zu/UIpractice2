import Screen from "../Util/Images";
import Images from "../Util/Images";
import Percent from "../Util/Images";

export default class Manager {

	constructor () {
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
	}

}