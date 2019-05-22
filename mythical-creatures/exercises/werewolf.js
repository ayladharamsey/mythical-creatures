class Werewolf{
	constructor(name, location){
		this.name = name;
		this.location = location;
		this.human = true;
		this.wolf = false;
		this.hungry = false;
	}
	change(){
		if (this.human === true){
			this.human = false;
			this.wolf = true;
			this.hungry = true;
		} else {
		this.human = true;
		this.wolf = false;
		this.hungry = false;
	}
	}

	//change(){ //Because these are both booleans they can be handled like light switches. We just want the change function to change true to false and false to true
	// 	this.human = !this.human
	// 	this.wolf = !this.wolf
	//  this.hungry =!this.hungry
	// }
	eat(victim){
		if (this.human === true){
			return 
		} else {
			victim.alive = false;
			this.hungry = false;
			this.change();
		}
	}

}







module.exports = Werewolf