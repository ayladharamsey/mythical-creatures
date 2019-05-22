class Centaur {
	constructor(name, breed){
		this.name = name;
		this.breed = breed;
		this.standing = true;
		this.counter = 0;
		this.cranky = false;
		this.layingDown = false;
	}

	shoot() {
		this.counter++
		if (this.counter >= 3){
			this.cranky = true;
			return 'NO!';
		} else if (this.layingDown === true){
			return 'NO!';
		}
			return 'Twang!!!';
	};

	run() {
		this.counter++
		if (this.layingDown === true){
			return 'NO!';
		}
		return 'Clop clop clop clop!!!';
	}

	sleep() {
		if (this.standing === true){
			return 'NO!'
		} else {
			this.cranky = false;
			this.counter = 0;
			return 'ZZZZ';
		} 

	};
	layDown(){
		this.standing = false;
		this.layingDown = true;
		if (this.cranky = true){
			this.cranky = false;
		}
	}
	standUp(){
		this.standing = true;
		this.layingDown = false;
	}
	drinkPotion() {
      if (this.standing === true && this.counter != 0) {
          this.counter = 0;
          this.cranky = false;
      } else if (this.standing === true && this.counter === 0) {
          this.cranky = true;
      } else {
          return 'Not while I\'m laying down!';
      }
	}
};
module.exports = Centaur;




