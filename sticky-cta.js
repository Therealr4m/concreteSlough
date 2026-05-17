const stickyCTA = document.getElementById('stickyCTA');
const stickyClose = document.getElementById('stickyClose');

window.addEventListener('scroll', () => {

  if(window.scrollY > 700){
    stickyCTA.classList.add('show');
  } else {
    stickyCTA.classList.remove('show');
  }

});

stickyClose.addEventListener('click', () => {
  stickyCTA.style.display = 'none';
});
