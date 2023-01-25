// smooth anchor links
document.querySelectorAll('.menu-item').forEach(anchor => {
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

// page loader

function render() {
  setTimeout(showPage, 5000);
  setTimeout(loader_text_small, 4000);
  setTimeout(load_page, 5010);

}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page").style.display = "block";
}

var load_text = document.getElementById('load-text');
function loader_text_small() {
  load_text.setAttribute('style', "font-size: 16px;");
  load_text.style.opacity = '0';
  load_text.style.width = '200px';
  load_text.style.transition = 'all 1s ease'
}

// load in header elements
function load_page() {
  var load = document.querySelector('.quote');
  load.style.opacity = '1';
  load.style.transition = 'all 1s ease-in';

  onload_header('.home', '.5s');
  onload_header('#about-nav', '1s');
  onload_header('#work-nav', '1.1s');
  onload_header('#contact-nav', '1.2s');
  onload_header('#resume-nav', '1.3s');

  onload_header('.title1', '1.8s');
  onload_header('.title2', '1.9s');
  onload_header('.title3', '2.0s');
  onload_header('.title4', '2.1s');


  onload_contacts();
}

function onload_header(element, time) {
  var ele = document.querySelector(element)
  ele.style.opacity = '1';
  ele.style.transform = 'translateY(0px)'
  ele.style.transition = 'opacity .6s ease ' + time + ', transform .6s ease ' + time;
}

function onload_contacts() {
  var ele = document.querySelectorAll('.contacts-display');
  for (let display of ele) {
    display.style.opacity = '1';
    display.style.transition = 'opacity .6s ease 2.6s';
  }

}

// console typing animation
consoleText(['"Love what you do;\nDo what you love."'], 'text');

function consoleText(words, id) {
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      words.push(usedWord);
      x = 1;
      letterCount += x;
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 80)
  window.setInterval(function () {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}


// scroll reveal
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("revealed");
    }
  }
}

window.addEventListener("scroll", reveal);