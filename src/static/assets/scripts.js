"use strict";

var menu = document.querySelector('.menu');

if (menu) {
  var menu__dropdown = menu.querySelector('.menu__dropdown');
  menu__dropdown.classList.remove('menu__dropdown_loading');

  var changePage = function changePage(_ref) {
    var target = _ref.target;
    menu__dropdown.classList.add('menu__dropdown_loading');
    window.location.href = target.value;
  };

  menu.addEventListener('change', changePage);
}