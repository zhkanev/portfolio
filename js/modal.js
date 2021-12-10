const modalToggler = () => {

	const modal = document.querySelector('.modal');
	const previews = document.querySelectorAll('.app_screen-gallery img');
	const original = document.querySelector('.full-img');
	const caption = document.querySelector('.caption');

	previews.forEach(preview => {
		preview.addEventListener('click', () => {
			original.classList.add('open');
			modal.classList.add('open');

			const originalSrc = preview.getAttribute('data-original');
			original.src = `./images/full/${originalSrc}`;
		})
	})

	modal.addEventListener('click', (e) => {
		if(e.target.classList.contains('modal')) {
			modal.classList.remove('open');
			original.classList.remove('open');
			original.src = '';
		}
	});
}

export default modalToggler();