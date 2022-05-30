function DICE_ADJUSTOR(parent, x, y, w, dice_set, dice_name, text_colour='#000000') {
	let value = 0;

	let container = document.createElement('DIV');
	container.className = 'dice_adjustor';
	container.style.left = x + 'px';
	container.style.top = y + 'px';
	container.style.width = w + 'px';
	parent.appendChild(container);

	let number = document.createElement('LABEL');
	
	number.className = 'dice_qty';
	number.innerHTML = value;
	number.style.color = text_colour;
	container.appendChild(number);

	let dec = document.createElement('INPUT');
	dec.className = 'decrement';
	dec.type = 'button';
	dec.value = '-';
	dec.onclick = function() { 
		dice_set['sub_' + dice_name]();

		value--;

		if(value < 0) {
			value = 0;
		}
		number.innerHTML = value;
	};
	container.appendChild(dec);

	let inc = document.createElement('INPUT');
	inc.className = 'increment';
	inc.type = 'button';
	inc.value = '+';
	inc.onclick = function() { 
		dice_set['add_' + dice_name]();

		value++;

		if(value > 99) {
			value = 99;
		}
		number.innerHTML = value;
	};
	container.appendChild(inc);
}



function create_dice(face, parent, color) {
	let dice = document.createElement('DIV');
	dice.className = 'dice';
	dice.style.backgroundColor = color;

	let icon = document.createElement('img');
	icon.className = 'dice_face_center';
	icon.src = 'img/' + face[0] + '.png';

	dice.appendChild(icon);

	// If dice has 2 icons on the face, create the second icon
	// and update the first face from center to top left
	if(face.length === 2) {
		icon.className = 'dice_face_top_left';

		let icon2 = document.createElement('img');
		icon2.className = 'dice';
		icon2.className = 'dice_face_bottom_right';
		icon2.src = 'img/' + face[1] + '.png';

		dice.appendChild(icon2);
	}

	parent.appendChild(dice);
}

function roll_dice(dice_set) {
	let dice_tray = document.getElementById('dice_tray');
	dice_tray.innerHTML = '';

	dice_set.new_dice();

	let counts = dice_set.get_counts();

	let roll = dice_set.get_dice();
	roll.roll(counts);
}