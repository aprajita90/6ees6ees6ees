class ForagerBee extends Bee {
	constructor(color ='yellow',food){
		super(color ='yellow',food)
		this.age = 10;
		this.job = 'find pollen';
		this.canFly = true;
		this.treasureChest = [];
	}
	forage(){
		this.treasureChest.push('treasure');
	}

 
};
