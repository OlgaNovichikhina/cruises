import {FocusLock} from '../../utils/focus-lock';

const HEADER_NAV = document.querySelector('.header');
const HEADER_TOGGLE = document.querySelector('.header__toggle');
const BODY = document.body;
const HEADER_LIST = document.querySelector('.header__list');
const HEADER_LINK = document.querySelectorAll('.header__link');
const PROMO = document.querySelector('.promo');
const JOURNEY = document.querySelector('.journey');
let scroll;

function closeMenu() {
  BODY.classList.remove('page--lock');
  HEADER_NAV.classList.add('header--closed');
  HEADER_NAV.classList.remove('header--opened');
  scroll = PROMO.scrollHeight;
  JOURNEY.style.marginTop = scroll + 'px';
  scroll = 0;
}

function openMenu() {
  BODY.classList.add('page--lock');
  HEADER_NAV.classList.remove('header--closed');
  HEADER_NAV.classList.add('header--opened');
  scroll = PROMO.scrollHeight + 100;
  JOURNEY.style.marginTop = scroll + 'px';
  scroll = 0;
}

function clickOnToggle() {
  const focusLock = new FocusLock();
  HEADER_TOGGLE.addEventListener('click', function () {
    if (HEADER_NAV.classList.contains('header--closed')) {
      openMenu();
      focusLock.lock('.header');
    } else {
      closeMenu();
      focusLock.unlock();
    }

    HEADER_LINK.forEach((link) => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });
  });
  focusLock.unlock();

}


function clickOnBody() {
  const focusLock = new FocusLock();
  document.addEventListener('click', function (evt) {
    let target = evt.target;
    let headerList = target === HEADER_LIST || HEADER_LIST.contains(target);
    let toggle = target === HEADER_TOGGLE;
    let headerNav = HEADER_NAV.classList.contains('header--opened');

    if (!headerList && !toggle && headerNav) {
      closeMenu();
      focusLock.unlock();
    }
  });
  BODY.classList.remove('page--lock');
  focusLock.unlock();
}

export {clickOnToggle, clickOnBody, closeMenu};


