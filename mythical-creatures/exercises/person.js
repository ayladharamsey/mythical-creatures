class Person {
	constructor(name){
		this.name = name;
		this.stoned = false;
	}
	stare (victim){
		this.statues.push(victim);
		if(this.statues.length > 3) {
			this.statues.pop();
		}
		
	}


}


module.exports = Person