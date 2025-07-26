document.querySelector('.header__burger').addEventListener('click', function() {
	this.classList.toggle('active');
	document.querySelector('.header__menu').classList.toggle('open')
	if (document.querySelector('.header__menu').classList.contains('open')) {
		document.body.classList.add('no-scroll')
	} else {
		document.body.classList.remove('no-scroll')
	}
})
