function EOTE_DICE_TRAY() {
	this.diceArray = [];
	this.ability_count = 0;
	this.difficulty_count = 0;
	this.force_count = 0;
	this.proficiency_count = 0;
	this.challenge_count = 0;
	this.boost_count = 0;
	this.setback_count = 0;
	this.dice_set;
}
EOTE_DICE_TRAY.prototype.new_dice = function() {
	this.dice_set = new EOTE();
}
EOTE_DICE_TRAY.prototype.get_dice = function() {
	return this.dice_set;
}
EOTE_DICE_TRAY.prototype.add_ability_count = function() {
	this.ability_count++;

	if(this.ability_count > 99) {
		this.ability_count = 99;
	}
}
EOTE_DICE_TRAY.prototype.sub_ability_count = function() {
	this.ability_count--;

	if(this.ability_count < 0) {
		this.ability_count = 0;
	}
}
EOTE_DICE_TRAY.prototype.add_difficulty_count = function() {
	this.difficulty_count++;

	if(this.difficulty_count > 99) {
		this.difficulty_count = 99;
	}
}
EOTE_DICE_TRAY.prototype.sub_difficulty_count = function() {
	this.difficulty_count--;

	if(this.ability_count < 0) {
		this.ability_count = 0;
	}
}
EOTE_DICE_TRAY.prototype.add_force_count = function() {
	this.force_count++;

	if(this.force_count > 99) {
		this.force_count = 99;
	}
}
EOTE_DICE_TRAY.prototype.sub_force_count = function() {
	this.force_count--;

	if(this.force_count < 0) {
		this.force_count = 0;
	}
}
EOTE_DICE_TRAY.prototype.add_proficiency_count = function() {
	this.proficiency_count++;

	if(this.proficiency_count > 99) {
		this.proficiency_count = 99;
	}
}
EOTE_DICE_TRAY.prototype.sub_proficiency_count = function() {
	this.proficiency_count--;

	if(this.proficiency_count < 0) {
		this.proficiency_count = 0;
	}
}
EOTE_DICE_TRAY.prototype.add_challenge_count = function() {
	this.challenge_count++;

	if(this.challenge_count > 99) {
		this.challenge_count = 99;
	}
}
EOTE_DICE_TRAY.prototype.sub_challenge_count = function() {
	this.challenge_count--;

	if(this.challenge_count < 0) {
		this.challenge_count = 0;
	}
}
EOTE_DICE_TRAY.prototype.add_boost_count = function() {
	this.boost_count++;

	if(this.boost_count > 99) {
		this.boost_count = 99;
	}
}
EOTE_DICE_TRAY.prototype.sub_boost_count = function() {
	this.boost_count--;

	if(this.boost_count < 0) {
		this.boost_count = 0;
	}
}
EOTE_DICE_TRAY.prototype.add_setback_count = function() {
	this.setback_count++;

	if(this.setback_count > 99) {
		this.setback_count = 99;
	}
}
EOTE_DICE_TRAY.prototype.sub_setback_count = function() {
	this.setback_count--;

	if(this.setback_count < 0) {
		this.setback_count = 0;
	}
}
EOTE_DICE_TRAY.prototype.get_counts = function() {
	return this.diceArray = [
		this.ability_count,
		this.difficulty_count,
		this.force_count,
		this.proficiency_count,
		this.challenge_count,
		this.boost_count,
		this.setback_count
	];
}
EOTE_DICE_TRAY.prototype.clear_tray = function() {
	this.diceArray = [];
	this.ability_count = 0;
	this.difficulty_count = 0;
	this.force_count = 0;
	this.proficiency_count = 0;
	this.challenge_count = 0;
	this.boost_count = 0;
	this.setback_count = 0;
}