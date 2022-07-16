// Burger

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const menuLinks = menu.querySelectorAll('.menu__link');

burger.addEventListener('click',
  function () {

    burger.classList.toggle('header__burger--active')

    menu.classList.toggle('header__menu--active');

    document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function(el) {
  el.addEventListener('click', function () {
    burger.classList.remove('header__burger--active');

    menu.classList.remove('header__menu--active');

    document.body.classList.remove('stop-scroll');
  })
})

// Swiper

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // navigation: {
  // nextEl: '.swiper-button-next',
  // prevEl: '.swiper-button-prev',
  // },
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  });


// Tabs

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    //  e.currentTarget выделяет конкретный нажатый элемент
    //  dataset.path получает значения атрибута data-path
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('tabs-nav__btn--active') });
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function (item) { item.classList.remove('tabs-item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});


// search

const searchBtn = document.querySelector('.search__btn');
const searchBtnClose = document.querySelector('.search__btn-close')
const search = document.querySelector('.search__body');

searchBtn.addEventListener('click',
  function() {
    search.classList.add('search__body--active');
  }
)

searchBtnClose.addEventListener('click',
  function() {
    search.classList.remove('search__body--active');
  })


