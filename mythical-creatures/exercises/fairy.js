class Fairy {
	constructor(name){
		this.name = name;
		this.dust = 10;
		this.clothes = {
			dresses: ['Iris']
		};
		this.disposition = 'Good natured';
		this.humanWards = [];
		this.stolenInfants = 0;
	}

	receiveBelief(){
		this.dust++;
	}

	believe(){
		this.dust += 10;
	}

	makeDresses(flowers){
		for (var i = 0; i < flowers.length; i++){
			this.clothes.dresses.push(flowers[i])
		}
	}
	provoke(){
		this.disposition = 'Vengeful';
	}

	replaceInfant(infant){
		this.stolenInfants ++
		if(this.disposition == 'Vengeful'){
			infant.disposition = 'Malicious';
			this.humanWards.push(infant);
		} else {
			return infant;
		}

		if(this. stolenInfants >= 3){
			this.disposition = 'Good natured';
		}
	}
}









module.exports = Fairy