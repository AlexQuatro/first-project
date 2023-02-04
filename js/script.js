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

	var btnContainer = document.getElementsByClassName("menu__footer");
	var btns = btnContainer.getElementsByClassName("menu__list");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function() {
		  var current = document.getElementsByClassName("_active");
	if (current.length > 0) {
	current[0].className = current[0].className.replace(" _active", "");
	}
	this.className += " _active";
  });
}

} else {
	document.body.classList.add('_pc');
}
const iconMenu = document.querySelector('.header__icon');
const menuBody = document.querySelector('.header__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}