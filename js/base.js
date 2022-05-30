// Load the selected dice set.
window.addEventListener('load', function() {
	let dice_jail = document.getElementById('dice_wrapper');
	let selected = document.getElementById('dice_selector');
	let dice_tray = document.getElementById('dice_tray');
	let dice_set;

	// Set up the selected dice
	document.getElementById('dice_selector').addEventListener('change', function(evnt) {
		let option = diceChange(evnt);

		// Clear the elements before creating the new elements
		dice_jail.innerHTML = '';
		dice_tray.innerHTML = '';
		dice_set = '';

		if(option === 'poly_option') {
			dice_set = load_poly(dice_jail);
		} else if(option === 'eote_option') {
			dice_set = load_eote(dice_jail);
		} else {
			dice_jail.innerHTML = '';
			dice_tray.innerHTML = '';
			dice_set = '';
		}

	});

	// Roll the chosen dice in a set
	document.getElementById('roll').addEventListener('click', function() {
		roll_dice(dice_set, dice_tray);
	});
});

function diceChange(evnt) {
	let selectElement = evnt.target;
	return selectElement.options[selectElement.selectedIndex].id;
}

function intCheck(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseInt(str)) // ...and ensure strings of whitespace fail
}
