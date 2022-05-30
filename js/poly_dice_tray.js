function POLY_DICE_TRAY() {
	this.diceArray = [];
	this.d4_count = 0;
	this.d6_count = 0;
	this.d8_count = 0;
	this.d10_count = 0;
	this.d12_count = 0;
	this.d20_count = 0;
	this.dice_set;
}
POLY_DICE_TRAY.prototype.new_dice = function() {
	this.dice_set = new POLY();
}
POLY_DICE_TRAY.prototype.get_dice = function() {
	return this.dice_set;
}
POLY_DICE_TRAY.prototype.add_d4_count = function() {
	this.d4_count++;

	if(this.d4_count > 99) {
		this.d4_count = 99;
	}
}
POLY_DICE_TRAY.prototype.sub_d4_count = function() {
	this.d4_count--;

	if(this.d4_count < 0) {
		this.d4_count = 0;
	}
}
POLY_DICE_TRAY.prototype.add_d6_count = function() {
	this.d6_count++;

	if(this.d6_count > 99) {
		this.d6_count = 99;
	}
}
POLY_DICE_TRAY.prototype.sub_d6_count = function() {
	this.d6_count--;

	if(this.d6_count < 0) {
		this.d6_count = 0;
	}
}
POLY_DICE_TRAY.prototype.add_d8_count = function() {
	this.d8_count++;

	if(this.d8_count > 99) {
		this.d8_count = 99;
	}
}
POLY_DICE_TRAY.prototype.sub_d8_count = function() {
	this.d8_count--;

	if(this.d8_count < 0) {
		this.d8_count = 0;
	}
}
POLY_DICE_TRAY.prototype.add_d10_count = function() {
	this.d10_count++;

	if(this.d10_count > 99) {
		this.d10_count = 99;
	}
}
POLY_DICE_TRAY.prototype.sub_d10_count = function() {
	this.d10_count--;

	if(this.d10_count < 0) {
		this.d10_count = 0;
	}
}
POLY_DICE_TRAY.prototype.add_d12_count = function() {
	this.d12_count++;

	if(this.d12_count > 99) {
		this.d12_count = 99;
	}
}
POLY_DICE_TRAY.prototype.sub_d12_count = function() {
	this.d12_count--;

	if(this.d12_count < 0) {
		this.d12_count = 0;
	}
}
POLY_DICE_TRAY.prototype.add_d20_count = function() {
	this.d20_count++;

	if(this.d20_count > 99) {
		this.d20_count = 99;
	}
}
POLY_DICE_TRAY.prototype.sub_d20_count = function() {
	this.d20_count--;

	if(this.d20_count < 0) {
		this.d20_count = 0;
	}
}
POLY_DICE_TRAY.prototype.get_counts = function() {
	return this.diceArray = [
		this.d4_count,
		this.d6_count,
		this.d8_count,
		this.d10_count,
		this.d12_count,
		this.d20_count
	];
}
POLY_DICE_TRAY.prototype.clear_tray = function() {
	this.diceArray = [];
	this.d4_count = 0;
	this.d6_count = 0;
	this.d8_count = 0;
	this.d10_count = 0;
	this.d12_count = 0;
	this.d20_count = 0;
}