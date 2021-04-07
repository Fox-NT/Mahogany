const burger = document.querySelector('.nav-site__burger--mobile'),
	burgerMenu = document.querySelector('.nav-site_list--mobile'),
	burgerWrapper = document.querySelector('.site-header__nav'),
	burgerItem = document.querySelectorAll('.mobile-menu__item > a');

function closeBurgerMenu() {
	document.body.classList.remove('over_hide');
	burgerMenu.classList.remove('mobile-menu--active');
	burger.classList.remove('burger_active');
}
burger.addEventListener('click', () => {
	document.body.classList.toggle('over_hide');
	burgerMenu.classList.toggle('mobile-menu--active');
	burger.classList.toggle('burger_active');
});

document.addEventListener('keydown', e => {
	if (
		e.code == 'Escape' &&
		burgerMenu.classList.contains('mobile-menu--active')
	) {
		closeBurgerMenu();
	}
});

burgerItem.forEach(item => {
	item.addEventListener('click', closeBurgerMenu);
});

const deadtime = '2021-04-22';

function getTimeResistance(endtime) {
	const t = Date.parse(endtime) - new Date();

	const days = Math.floor(t / (1000 * 60 * 60 * 24)),
		hourse = Math.floor((t / (1000 * 60 * 60)) % 24),
		minutes = Math.floor((t / (1000 * 60)) % 60),
		seconds = Math.floor((t / 1000) % 60);

	return {
		'total:': t,
		days: days,
		hourse: hourse,
		minutes: minutes,
		seconds: seconds,
	};
}

function setClock(selector, endtime) {
	const timer = document.querySelector(selector),
		days = timer.querySelector('.timer__days'),
		hourse = timer.querySelector('.timer__hourse'),
		minutes = timer.querySelector('.timer__minutes'),
		seconds = timer.querySelector('.timer__seconds'),
		timeInterval = setInterval(updateClock, 1000);
	updateClock();

	function updateClock() {
		const time = getTimeResistance(endtime);
		days.innerHTML = addZero(time.days);
		hourse.innerHTML = addZero(time.hourse);
		minutes.innerHTML = addZero(time.minutes);
		seconds.innerHTML = addZero(time.seconds);

		if (time.total <= 0) {
			clearInterval(timeInterval);
		}
	}
}

function addZero(num) {
	if (num >= 0 && num < 10) {
		return `0${num}`;
	} else {
		return num;
	}
}

setClock('.site-main__timer-container', deadtime);

const broadcast = document.querySelector('#broadcast'),
	awards = document.querySelector('.site-main__award'),
	nomination = document.querySelector('.site-main__nomination'),
	contacts = document.querySelector('.site-main__questions'),
	links = document.querySelectorAll('.nav-site__link');

links.forEach(item => {
	item.addEventListener('click', e => {
		e.preventDefault();
		if (e.target == item) {
			switch (item.getAttribute('data-scroll')) {
				case 'broadcast':
					broadcast.scrollIntoView({
						behavior: 'smooth',
						block: 'center',
					});
					break;
				case 'awards':
					awards.scrollIntoView({
						behavior: 'smooth',
						block: 'center',
					});
					break;
				case 'nomination':
					nomination.scrollIntoView({
						behavior: 'smooth',
						block: 'center',
					});
					break;
				case 'contacts':
					contacts.scrollIntoView({
						behavior: 'smooth',
						block: 'center',
					});
					break;
			}
		}
	});
});
