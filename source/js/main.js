import {iosVhFix} from './utils/ios-vh-fix';
import {clickOnToggle, clickOnBody, closeMenu} from './modules/modals/burger';
import {scrollPage} from './modules/modals/scroll';
import {inputFormTel, inputFormName} from './modules/modals/form';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  const HEADER_NAV = document.querySelector('.header');
  HEADER_NAV.classList.remove('header--nojs');

  const BODY = document.body;

  window.addEventListener('resize', function () {
    if (BODY.offsetWidth >= 768) {
      closeMenu();
    }
  });

  iosVhFix();
  clickOnToggle();
  clickOnBody();
  scrollPage();
  inputFormTel();
  inputFormName();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  // window.addEventListener('load', () => {
  // initModals();
  // });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
