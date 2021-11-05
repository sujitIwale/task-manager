function resizeGridItem(item) {
	const grid = document.getElementsByClassName('grid')[0];
	const rowHeight = parseInt(
		window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')
	);
	const rowGap = parseInt(
		window.getComputedStyle(grid).getPropertyValue('grid-row-gap')
	);

	const rowSpan = Math.ceil(
		(item.querySelector('.sub').getBoundingClientRect().height +
			rowGap +
			2) /
			(rowHeight + rowGap)
	);
	
	item.style.gridRowEnd = 'span ' + rowSpan;
}

export function resizeAllGridItems() {
	// console.log('resize')
	if (!window || !window.document) return;
	const allItems = document.getElementsByClassName('note');
	if (!allItems) return;
	for (let x = 0; x < allItems.length; x++) {
		resizeGridItem(allItems[x]);
	}
}
