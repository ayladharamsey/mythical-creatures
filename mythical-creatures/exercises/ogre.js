class Ogre{
	constructor(name, home){
		this.name = name;
		this.home = home || 'Swamp';
		this.swings = 0;
	}
	encounter(human){
		human.encounterCounter++
		if (human.encounterCounter %3 == 0){
			this.swings++
			
		}
		if (this.swings %2 == 0){
			human.knockedOut = true;
			}
	}
	swingAt(human){
		this.swings++

	}
	apologize(human){
		human.knockedOut = false;
	}
}


























// class Ogre{
// 	constructor(name, home){
// 		this.name = name;
// 		this.home = home || 'Swamp';
// 		this.swings = 0
// 	}
// 	encounter(human){
// 		human.encounterCounter++;
// 		human.noticesOgre();
// 		} 
// 	swingAt(human){
// 		this.swings++
// 	}
// 	}



















module.exports = Ogre
