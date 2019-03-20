(function () {
  'use strict';

  const sideNav = document.querySelector('#sidenav');
  const openSideNav = document.querySelector('#open');
  const closeSideNav = document.querySelector('.close');

  function expandSideNav() {
    sideNav.style.left = "0";
  }

  function collapseSideNav() {
    sideNav.style.left = "-200px"
  }

  openSideNav.addEventListener('click', expandSideNav);
  closeSideNav.addEventListener('click', collapseSideNav);
}());