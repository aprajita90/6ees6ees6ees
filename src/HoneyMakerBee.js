class HoneyMakerBee extends Bee {
	constructor(color='yellow',food){
		super(color='yellow',food)
		this.age = 10;
		this.job='make honey';
		this.honeyPot = 0;
	}
	makeHoney(){
		this.honeyPot++;
	}
	giveHoney(){
		this.honeyPot--;
	}
  
};
