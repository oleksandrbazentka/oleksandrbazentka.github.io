const $mapLinks = document.querySelectorAll('.map a'),
	$info = document.querySelector('.info');

const requestData = (id = 1) => {
	fetch('data.json')
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		$info.innerHTML = `
			<div>${data[id - 1].city}</div>
		`;
	});
};

requestData();
$mapLinks.forEach(el => {
	el.addEventListener('mouseenter', (e) => {
		let self = e.currentTarget;
		let selfClass = self.getAttribute('href');
		let color = self.dataset.color;
		let currentPolygon = self.querySelectorAll('polygon');
		let currentPath = self.querySelectorAll('path');
		if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 2px;`);
		if (currentPath) currentPath.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 2px;`);
	});

	// el.addEventListener('mouseleave', (e) => {
	// 	let self = e.currentTarget;
	// 	let selfClass = self.getAttribute('href');
	// 	let currentPolygon = self.querySelectorAll('polygon');
	// 	let currentPath = self.querySelectorAll('path');
	// 	if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = ``);
	// 	if (currentPath) currentPath.forEach(el => el.style.cssText = ``);
	// });

	el.addEventListener('click', (e) => {
		e.preventDefault();
		let self = e.currentTarget;
		let selfClass = self.getAttribute('href');
		let color = self.dataset.color;
		let currentPolygon = self.querySelectorAll('polygon');
		let currentPath = self.querySelectorAll('path');
		if (currentPolygon) currentPolygon.forEach(el => el.style.fill = '#FFFFFF');
		if (currentPath) currentPath.forEach(el => el.style.fill = '#FFFFFF');
		let currentElement = document.querySelector(`.map-tab-link[href="${selfClass}"]`);
		let id = parseInt(currentElement.dataset.id);
		requestData(id);
	});
});