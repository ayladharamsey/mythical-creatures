class Wizard {
	constructor(object){
		this.name = object.name;
		this.bearded = object.bearded;
		if (this.bearded === undefined){
			this.bearded = true;
		};
		this.isRested = true;
		this.counter = 0;
	}; 

	incantation(spell){
		return spell.toUpperCase();
		};

	cast(saying){
		this.counter ++ 
		if (this.counter < 3){
			this.isRested = true;
			return saying;
		} else(this.counter > 3)
			this.isRested = false;
			return 'I SHALL NOT CAST';
		}

	};




module.exports = Wizard