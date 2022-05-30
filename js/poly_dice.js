const poly_colours = {
	d4: 'rgb(114, 204, 219)',
	d6: 'rgb(0, 0, 0)',
	d8: 'rgb(63, 172, 73)',
	d10: 'rgb(82, 36, 128)',
	d12: 'rgb(255, 241, 0)',
	d20: 'rgb(209, 35, 42)',
};

function POLY() {
	this.history = {
		'd4': [],
		'd6': [],
		'd8': [],
		'd10': [],
		'd12': [],
		'd20': [],
	};
}
POLY.prototype.recall_all = function() {
	return this.history;
}
POLY.prototype.recall_dice = function(dice) {
	return this.history[dice];
}
POLY.prototype.recall_dice_num = function(dice, index) {
	return this.history[dice][index];
}
POLY.prototype.roll = function(counts) {
	for(let i = 0; i < counts.length; i++) {
		for(let j = 0; j < counts[i]; j++) {
			let result = [];
			let colour;

			if(i === 0) {
				result = this.d4();
				colour = poly_colours.d4;
			}
			if(i === 1) {
				result = this.d6();
				colour = poly_colours.d6;
			}
			if(i === 2) {
				result = this.d8();
				colour = poly_colours.d8;
			}
			if(i === 3) {
				result = this.d10();
				colour = poly_colours.d10;
			}
			if(i === 4) {
				result = this.d12();
				colour = poly_colours.d12;
			}
			if(i === 5) {
				result = this.d20();
				colour = poly_colours.d20;
			}

			let face = result[0][1].split(', ');
			create_dice(face, dice_tray, colour);
		}
	}
}
POLY.prototype.d4 = function(qty=1) {
	let tmp = [];

	for(let i = 0; i < qty; i++) {
		let rng = new RNG();
		let num = rng.nextRange(1, 5);
		let face = num.toString();

		this.history['d4'].push([num, face]);
		tmp.push([num, face]);
	}

	return tmp;
}
POLY.prototype.d6 = function(qty=1) {
	let tmp = [];

	for(let i = 0; i < qty; i++) {
		let rng = new RNG();
		let num = rng.nextRange(1, 7);
		let face = num.toString();

		this.history['d6'].push([num, face]);
		tmp.push([num, face]);
	}

	return tmp;
}
POLY.prototype.d8 = function(qty=1) {
	let tmp = [];

	for(let i = 0; i < qty; i++) {
		let rng = new RNG();
		let num = rng.nextRange(1, 9);
		let face = num.toString();

		this.history['d8'].push([num, face]);
		tmp.push([num, face]);
	}

	return tmp;
}
POLY.prototype.d10 = function(qty=1) {
	let tmp = [];

	for(let i = 0; i < qty; i++) {
		let rng = new RNG();
		let num = rng.nextRange(1, 11);
		let face = num.toString();

		this.history['d10'].push([num, face]);
		tmp.push([num, face]);
	}

	return tmp;
}
POLY.prototype.d12 = function(qty=1) {
	let tmp = [];

	for(let i = 0; i < qty; i++) {
		let rng = new RNG();
		let num = rng.nextRange(1, 13);
		let face = num.toString();

		this.history['d12'].push([num, face]);
		tmp.push([num, face]);
	}

	return tmp;
}
POLY.prototype.d20 = function(qty=1) {
	let tmp = [];

	for(let i = 0; i < qty; i++) {
		let rng = new RNG();
		let num = rng.nextRange(1, 21);
		let face = num.toString();

		this.history['d20'].push([num, face]);
		tmp.push([num, face]);
	}

	return tmp;
}