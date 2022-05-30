const eote_colours = {
	boost: 'rgb(114, 204, 219)',
	setback: 'rgb(0, 0, 0)',
	ability: 'rgb(63, 172, 73)',
	difficulty: 'rgb(82, 36, 128)',
	proficiency: 'rgb(255, 241, 0)',
	challenge: 'rgb(209, 35, 42)',
	force: 'rgb(255, 255, 255)',
};

function EOTE() {
	this.history = {
		'boost': [],
		'setback': [],
		'ability': [],
		'difficulty': [],
		'proficiency': [],
		'challenge': [],
		'force': [],
	};
}
EOTE.prototype.recall_all = function() {
	return this.history;
}
EOTE.prototype.recall_dice = function(dice) {
	return this.history[dice];
}
EOTE.prototype.recall_dice_num = function(dice, index) {
	return this.history[dice][index];
}
EOTE.prototype.roll = function(counts) {
	for(let i = 0; i < counts.length; i++) {
		for(let j = 0; j < counts[i]; j++) {
			let result = [];
			let colour;

			if(i === 0) {
				result = this.ability();
				colour = eote_colours.ability;
			}
			if(i === 1) {
				result = this.difficulty();
				colour = eote_colours.difficulty;
			}
			if(i === 2) {
				result = this.force();
				colour = eote_colours.force;
			}
			if(i === 3) {
				result = this.proficiency();
				colour = eote_colours.proficiency;
			}
			if(i === 4) {
				result = this.challenge();
				colour = eote_colours.challenge;
			}
			if(i === 5) {
				result = this.boost();
				colour = eote_colours.boost;
			}
			if(i === 6) {
				result = this.setback();
				colour = eote_colours.setback;
			}

			let face = result[0][1].split(', ');
			create_dice(face, dice_tray, colour);
		}
	}
}
EOTE.prototype.boost = function(qty=1) {
	let tmp = [];

	for(let i = 0; i < qty; i++) {
		let rng = new RNG();
		let num = rng.nextRange(1, 7);
		let face = '';

		if(num === 1 || num === 2) {
			face = 'blank';

		} else if(num === 3) {
			face = 'advantage, advantage';

		} else if(num === 4) {
			face = 'advantage';

		} else if(num === 5) {
			face = 'success, advantage';

		} else if(num === 6) {
			face = 'success';

		} else {
			face = 'error - rolled to high!';
		}

		this.history['boost'].push([num, face]);
		tmp.push([num, face]);
	}

	return tmp;
}
EOTE.prototype.setback = function(qty=1) {
	let tmp = [];

	for(let i = 0; i < qty; i++) {
		let rng = new RNG();
		let num = rng.nextRange(1, 7);
		let face = '';

		if(num === 1 || num === 2) {
			face = 'blank';

		} else if(num === 3 || num === 4) {
			face = 'failure';

		} else if(num === 5 || num === 6) {
			face = 'threat';

		} else {
			face = 'error - rolled to high!';
		}

		this.history['setback'].push([num, face]);
		tmp.push([num, face]);
	}

	return tmp;
}
EOTE.prototype.ability = function(qty=1) {
	let tmp = [];

	for(let i = 0; i < qty; i++) {
		let rng = new RNG();
		let num = rng.nextRange(1, 9);
		let face = '';

		if(num === 1) {
			face = 'blank';

		} else if(num === 2 || num === 3) {
			face = 'success';

		} else if(num === 4) {
			face = 'success, success';

		} else if(num === 5 || num === 6) {
			face = 'advantage';

		} else if(num === 7) {
			face = 'success, advantage';

		} else if(num === 8) {
			face = 'advantage, advantage';

		} else {
			face = 'error - rolled to high!';
		}

		this.history['ability'].push([num, face]);
		tmp.push([num, face]);
	}

	return tmp;
}
EOTE.prototype.difficulty = function(qty=1) {
	let tmp = [];

	for(let i = 0; i < qty; i++) {
		let rng = new RNG();
		let num = rng.nextRange(1, 9);
		let face = '';

		if(num === 1) {
			face = 'blank';

		} else if(num === 2) {
			face = 'failure';

		} else if(num === 3) {
			face = 'failure, failure';

		} else if(num === 4 || num === 5 || num === 6) {
			face = 'threat';

		} else if(num === 7) {
			face = 'threat, threat';

		} else if(num === 8) {
			face = 'failure, threat';

		} else {
			face = 'error - rolled to high!';
		}

		this.history['difficulty'].push([num, face]);
		tmp.push([num, face]);
	}

	return tmp;
}
EOTE.prototype.proficiency = function(qty=1) {
	let tmp = [];

	for(let i = 0; i < qty; i++) {
		let rng = new RNG();
		let num = rng.nextRange(1, 13);
		let face = '';

		if(num === 1) {
			face = 'blank';

		} else if(num === 2 || num === 3) {
			face = 'success';

		} else if(num === 4 || num === 5) {
			face = 'success, success';

		} else if(num === 6) {
			face = 'advantage';

		} else if(num === 7 || num === 8 || num === 9) {
			face = 'success, advantage';

		} else if(num === 10 || num === 11) {
			face = 'advantage, advantage';

		} else if(num === 12) {
			face = 'triumph';

		} else {
			face = 'error - rolled to high!';
		}

		this.history['proficiency'].push([num, face]);
		tmp.push([num, face]);
	}

	return tmp;
}
EOTE.prototype.challenge = function(qty=1) {
	let tmp = [];

	for(let i = 0; i < qty; i++) {
		let rng = new RNG();
		let num = rng.nextRange(1, 13);
		let face = '';

		if(num === 1) {
			face = 'blank';

		} else if(num === 2 || num === 3) {
			face = 'failure';

		} else if(num === 4 || num === 5) {
			face = 'failure, failure';

		} else if(num === 6 || num === 7) {
			face = 'threat';

		} else if(num === 8 || num === 9) {
			face = 'failure, threat';

		} else if(num === 10 || num === 11) {
			face = 'threat, threat';

		} else if(num === 12) {
			face = 'despair';

		} else {
			face = 'error - rolled to high!';
		}

		this.history['challenge'].push([num, face]);
		tmp.push([num, face]);
	}

	return tmp;
}
EOTE.prototype.force = function(qty=1) {
	let tmp = [];

	for(let i = 0; i < qty; i++) {
		let rng = new RNG();
		let num = rng.nextRange(1, 13);
		let face = '';

		if(num === 1 || num === 2 || num === 3 || num === 4 || num === 5 || num === 6) {
			face = 'darkside';

		} else if(num === 7) {
			face = 'darkside, darkside';

		} else if(num === 8 || num === 9) {
			face = 'lightside';

		} else if(num === 10 || num === 11 || num === 12) {
			face = 'lightside, lightside';

		} else {
			face = 'error - rolled to high!';
		}

		this.history['force'].push([num, face]);
		tmp.push([num, face]);
	}

	return tmp;
}