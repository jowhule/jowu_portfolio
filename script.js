// smooth anchor links
document.querySelectorAll('#move_in_page').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// hide navbar on scroll down
const nav = document.getElementById("navbar");
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  // change navbar height on scroll
  if (currentScrollPos != 0 && !nav.classList.contains('nav-shadow')) {
    nav.classList.add('nav-shadow');
    nav.style.height = "70px";
    nav.style.transition = "top 0.3s, height 0.25s ease-out"
  } else if (currentScrollPos == 0 && nav.classList.contains('nav-shadow')) {
    nav.style.height = "100px";
    nav.style.transition = "top 0.3s, height 0.25s ease-in"
    nav.classList.remove('nav-shadow');
  }

  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

// hover profile image
const about_box = document.querySelector('.about-box');
const about_img = document.querySelector('#about-img');
const img_cover = document.querySelector('.about-img-cover');

about_box.addEventListener('mouseover', () => {
  img_cover.style.opacity = '0';
  img_cover.style.height = '290px';
  img_cover.style.width = '290px';
  img_cover.style.top = '10px';

});

about_box.addEventListener('mouseout', () => {
  img_cover.style.opacity = '0.5';
  img_cover.style.height = '280px';
  img_cover.style.width = '280px';
  img_cover.style.top = '20px';
});