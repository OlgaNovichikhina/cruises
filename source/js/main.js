import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {clickOnToggle, clickOnBody} from './modules/modals/burger';
import {scrollPage} from './modules/modals/scroll';



// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  const HEADER_NAV = document.querySelector('.header');
  const PROMO = document.querySelector('.promo');

  HEADER_NAV.classList.remove('header--nojs');
  PROMO.classList.remove('promo--nojs');


  const JOURNEY = document.querySelector('.journey');
  const BODY = document.body;
  const PROMO_TEXT = document.querySelector('.promo__text');
  let scroll;

  scroll = PROMO.scrollHeight;
  JOURNEY.style.marginTop = scroll + 'px';

  window.addEventListener('resize', function () {
    if (BODY.offsetWidth >= 1023) {
      scroll = PROMO.scrollHeight;
      PROMO_TEXT.style.display = 'block';
      HEADER_NAV.classList.add('header--closed');
      HEADER_NAV.classList.remove('header--opened');
    }
    if (BODY.offsetWidth >= 768 && BODY.offsetWidth < 1023) {
      scroll = PROMO.scrollHeight;
      PROMO_TEXT.style.display = 'block';
      HEADER_NAV.classList.add('header--closed');
      HEADER_NAV.classList.remove('header--opened');
    }
    if (BODY.offsetWidth < 768) {
      scroll = PROMO.scrollHeight;
      PROMO_TEXT.style.display = 'none';
    }
    JOURNEY.style.marginTop = scroll + 'px';
    scroll = 0;
  });


  iosVhFix();
  clickOnToggle();
  clickOnBody();
  scrollPage();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
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
