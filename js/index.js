
const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  console.log('Hello');
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

const header = document.querySelector('header');
const text = document.querySelector('h1');
const walk = 100; //stretch of the shadow, in px

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = header;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 8));
  const yWalk = Math.round((y / width * walk) - (walk / 8));

  text.style.textShadow = `
    ${yWalk * -0.5}px ${xWalk}px 0 rgba(255,0,0)
  `;
}
text.addEventListener('mousemove', shadow);

// const nav = document.querySelector('.nav-container');
// const topOfNav = nav.offsetTop;
// function fixNav() {
//   // console.log(topOfNav, window.scrollY);
//   if (window.scrollY >= topOfNav) {
//     document.body.classList.add('fixed-nav');
//   } else {
//     document.body.classList.remove('fixed-nav');
//   }

// }
// window.addEventListener('scroll', fixNav);