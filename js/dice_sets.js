function load_eote(parent) {
	let dice_set = new EOTE_DICE_TRAY();

	d4(parent, 7, 10, 75, 66, eote_colours.ability);
	DICE_ADJUSTOR(parent, 7, 82, 75, dice_set, 'ability_count');

	d4(parent, 102, 10, 75, 66, eote_colours.difficulty);
	DICE_ADJUSTOR(parent, 102, 82, 75, dice_set, 'difficulty_count', '#FFFFFF');

	d12(parent, 197, 10, 66, 66, eote_colours.force, "#000000", '2');
	DICE_ADJUSTOR(parent, 197, 82, 66, dice_set, 'force_count');

	d12(parent, 283, 10, 66, 66, eote_colours.proficiency);
	DICE_ADJUSTOR(parent, 283, 82, 66, dice_set, 'proficiency_count');

	d12(parent, 369, 10, 66, 66, eote_colours.challenge);
	DICE_ADJUSTOR(parent, 369, 82, 66, dice_set, 'challenge_count');

	d6(parent, 465, 10, 66, 66, eote_colours.boost);
	DICE_ADJUSTOR(parent, 465, 82, 66, dice_set, 'boost_count');

	d6(parent, 561, 10, 66, 66, eote_colours.setback);
	DICE_ADJUSTOR(parent, 561, 82, 66, dice_set, 'setback_count', '#FFFFFF');

	return dice_set;
}

function load_poly(parent) {
	let dice_set = new POLY_DICE_TRAY();

	d4(parent, 7, 10, 75, 66, poly_colours.d4);
	DICE_ADJUSTOR(parent, 7, 82, 75, dice_set, 'd4_count');

	d6(parent, 102, 10, 75, 66, poly_colours.d6);
	DICE_ADJUSTOR(parent, 102, 82, 75, dice_set, 'd6_count', '#FFFFFF');

	d8(parent, 197, 10, 66, 66, poly_colours.d8, "#000000", '2');
	DICE_ADJUSTOR(parent, 197, 82, 66, dice_set, 'd8_count');

	d10(parent, 283, 10, 66, 66, poly_colours.d10);
	DICE_ADJUSTOR(parent, 283, 82, 66, dice_set, 'd10_count');

	d12(parent, 369, 10, 66, 66, poly_colours.d12);
	DICE_ADJUSTOR(parent, 369, 82, 66, dice_set, 'd12_count');

	d20(parent, 465, 10, 66, 66, poly_colours.d20);
	DICE_ADJUSTOR(parent, 465, 82, 66, dice_set, 'd20_count');

	return dice_set;
}