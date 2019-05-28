class Direwolf{
	constructor(name, home, size){
		this.name = name;
		this.home = home || 'Beyond the Wall';
		this.size = size || 'Massive';
		this.starksToProtect = [];

	}
	protect(stark){
		if(this.home === stark.location){
			this.starksToProtect.push(stark)
		}
		if(this.starksToProtect >= 3){
			this.starksToProtect.pop(stark)
		}
		}

		
	}






module.exports = Direwolf