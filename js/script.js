// Toggle class Active untuk Hamburger
const navbarNav = document.querySelector('.navbar-nav');
//ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
  navbarNav.classList.toggle('active')
  e.preventDefault()
}

// Toggle class Active untuk Search Form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault()
}

// Toggle class Active untuk Shoping Cart 
const shopingCart = document.querySelector('.shoping-cart')

document.querySelector('#shoping-cart-button').onclick = (e) => {
  shopingCart.classList.toggle('active');
  e.preventDefault()
}

// klik di luar element
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shoping-cart-button');

document.addEventListener('click', (e) => {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active')
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active')
  }
  if (!sc.contains(e.target) && !shopingCart.contains(e.target)) {
    shopingCart.classList.remove('active')
  }
})


// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex'
    e.preventDefault();
  }
})


// klik tombol Close 
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
}

// klik di luar modal 
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
}