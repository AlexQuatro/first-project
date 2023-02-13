"use strict"

const isMmobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i)
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i)
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i)
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i)
	},
	any: function () {
		return (
			isMmobile.Android() ||
			isMmobile.BlackBerry() ||
			isMmobile.iOS() ||
			isMmobile.Opera() ||
			isMmobile.Windows());
	}
};
if (isMmobile.any()) {
	document.body.classList.add('_touch');
	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length>0) {
		for (let index = 0; index < menuArrows.length; index++) {
			menuArrows[index].addEventListener('click', (e) => {
				if (!menuArrows[index].parentElement.className.includes('_active')){
					menuArrows[index].parentElement.className += '_active'
				}
				for (let x = 0; x < menuArrows.length; x++) {
					if (menuArrows[index] !== menuArrows[x]) {
						menuArrows[index].parentElement.className.replaceAll('_active', '')
					}
				}
			})
		}
	} 
} else {
	document.body.classList.add('_pc');
};
const iconMenu = document.querySelector('.header__icon');
const menuBody = document.querySelector('.header__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
};