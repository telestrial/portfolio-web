// Album picture fly-in
const firstAboutPic = document.querySelector('.about__pic--1');
const middleAboutPic = document.querySelector('.about__pic--2');
const lastAboutPic = document.querySelector('.about__pic--3');

const albumShow = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (window.innerWidth <= 1100) {
      } else {
        lastAboutPic.classList.add('about__pic--appear3');
        middleAboutPic.classList.add('about__pic--appear2');
        firstAboutPic.classList.add('about__pic--appear1');
      }
    }
  });
};

const options = {
  rootMargin: '0px 0px 10% 0px',
};

const observer = new IntersectionObserver(albumShow, options);

observer.observe(lastAboutPic);

// Disabling arrow glow on scroll
const scrollArrow = document.querySelector('.scroll');

window.addEventListener('scroll', (e) => {
  if (window.scrollY > 10) {
    scrollArrow.classList.replace('scroll', 'scroll--done');
  }
});
