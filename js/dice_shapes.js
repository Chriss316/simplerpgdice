function d4(targetID, vbX, vbY, vbW, vbH, color) {
	let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

	svg.className = 'd4';
	svg.style.position = 'absolute';
	svg.style.top = vbY + 'px';
	svg.style.left = vbX + 'px';
	svg.style.width = vbW + 'px';
	svg.style.height = vbH + 'px';

	targetID.appendChild(svg);

	let points = (vbW / 2) + "," + 0 + " " + vbW + "," + vbH + " " + 0 + "," + vbH;

	polygon(0, 0, vbW, vbH, svg, points, color);
}

function d6(targetID, vbX, vbY, vbW, vbH, color) {
	let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

	svg.className = 'd6';
	svg.style.position = 'absolute';
	svg.style.top = vbY + 'px';
	svg.style.left = vbX + 'px';
	svg.style.width = vbW + 'px';
	svg.style.height = vbH + 'px';

	targetID.appendChild(svg);

	rect(0, 0, vbW, vbH, svg, color);
}

function d8(targetID, vbX, vbY, vbW, vbH, color) {
	let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

	svg.className = 'd8';
	svg.style.position = 'absolute';
	svg.style.top = vbY + 'px';
	svg.style.left = vbX + 'px';
	svg.style.width = vbW + 'px';
	svg.style.height = vbH + 'px';

	targetID.appendChild(svg);

	let point1 = (vbW / 2) + "," + 0;
	let point2 = vbW + ", " + (vbH / 2);
	let point3 = (vbW / 2) + "," + vbH;
	let point4 = 0 + ", " + (vbH / 2);

	let points = point1 + " " + point2 + " " + point3 + " " + point4;

	polygon(0, 0, vbW, vbH, svg, points, color);
}

function d10(targetID, vbX, vbY, vbW, vbH, color) {
	let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

	svg.className = 'd10';
	svg.style.position = 'absolute';
	svg.style.top = vbY + 'px';
	svg.style.left = vbX + 'px';
	svg.style.width = vbW + 'px';
	svg.style.height = vbH + 'px';

	targetID.appendChild(svg);

	let point1 = (vbW / 2) + "," + 0;
	let point2 = vbW + ", " + ((vbH / 2) + 12);
	let point3 = (vbW / 2) + "," + vbH;
	let point4 = 0 + ", " + ((vbH / 2) + 12);

	let points = point1 + " " + point2 + " " + point3 + " " + point4;

	polygon(0, 0, vbW, vbH, svg, points, color);
}

function d12(targetID, vbX, vbY, vbW, vbH, color, strokeColor="#FFFFFF", strokeWidth="0") {
	let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

	svg.className = 'd12';
	svg.style.position = 'absolute';
	svg.style.top = vbY + 'px';
	svg.style.left = vbX + 'px';
	svg.style.width = vbW + 'px';
	svg.style.height = vbH + 'px';

	targetID.appendChild(svg);

	let point1 = (vbW / 2) + "," + 2;
	let point2 = vbW - 2 + ", " + ((vbH / 2) - 3);
	let point3 = (vbW - 12) + "," + (vbH - 2);
	let point4 = 12 + "," + (vbH - 2);
	let point5 = 2 + "," + ((vbH / 2) - 3);

	let points = point1 + " " + point2 + " " + point3 + " " + point4 + " " + point5;

	polygon(0, 0, vbW, vbH, svg, points, color, strokeColor, strokeWidth);
}

function d20(targetID, vbX, vbY, vbW, vbH, color) {
	let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

	svg.className = 'd20';
	svg.style.position = 'absolute';
	svg.style.top = vbY + 'px';
	svg.style.left = vbX + 'px';
	svg.style.width = vbW + 'px';
	svg.style.height = vbH + 'px';

	targetID.appendChild(svg);

	let point1 = (vbW / 2) + "," + 0;
	let point2 = vbW - 3 + ", " + ((vbH / 2) - 16);
	let point3 = vbW - 3 + "," + ((vbH / 2) + 16);
	let point4 = (vbW / 2) + "," + vbH;
	let point5 = 3 + "," + ((vbH / 2) + 16);
	let point6 = 3 + ", " + ((vbH / 2) - 16);

	let points = point1 + " " + point2 + " " + point3 + " " + point4 + " " + point5 + " " + point6;

	polygon(0, 0, vbW, vbH, svg, points, color);
}

function rect(x, y, width, height, target, color="#333333", strokeColor="#FFFFFF", strokeWidth="0", id="-1") {
	let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
	rect.setAttribute("x", x);
	rect.setAttribute("y", y);
	rect.setAttribute("width", width);
	rect.setAttribute("height", height);
	rect.setAttribute("fill", color);
	rect.setAttribute("stroke", strokeColor);
	rect.setAttribute("stroke-width", strokeWidth);
	rect.setAttribute("id", id);

	target.appendChild(rect);
}

function polygon(x, y, width, height, target, points, color="#333333", strokeColor="#FFFFFF", strokeWidth="0", id="-1") {
	let poly = document.createElementNS("http://www.w3.org/2000/svg", "polygon");

	poly.setAttribute("points", points);
	poly.setAttribute("fill", color);
	poly.setAttribute("stroke", strokeColor);
	poly.setAttribute("stroke-width", strokeWidth);
	poly.setAttribute("id", id);

	target.appendChild(poly);
}