const HEADER_NAV = document.querySelector('.header');
const HEADER_TOGGLE = document.querySelector('.header__toggle');
const BODY = document.body;
const PROMO_TEXT = document.querySelector('.promo__text');
const HEADER_LIST = document.querySelector('.header__list');

function clickOnToggle() {
  HEADER_TOGGLE.addEventListener('click', function () {
    if (HEADER_NAV.classList.contains('header--closed')) {
      BODY.classList.add('page--lock');
      HEADER_NAV.classList.remove('header--closed');
      HEADER_NAV.classList.add('header--opened');
      PROMO_TEXT.style.display = 'none';
    } else {
      BODY.classList.remove('page--lock');
      HEADER_NAV.classList.add('header--closed');
      HEADER_NAV.classList.remove('header--opened');
      PROMO_TEXT.style.display = 'block';
    }
  });
}


function clickOnBody() {
  document.addEventListener('click', function (evt) {
    let target = evt.target;
    let headerList = target === HEADER_LIST || HEADER_LIST.contains(target);
    let toggle = target === HEADER_TOGGLE;
    let headerNav = HEADER_NAV.classList.contains('header--opened');

    if (!headerList && !toggle && headerNav) {
      BODY.classList.remove('page--lock');
      HEADER_NAV.classList.add('header--closed');
      HEADER_NAV.classList.remove('header--opened');
      PROMO_TEXT.style.display = 'block';
    }
  });
}

export {clickOnToggle, clickOnBody};


