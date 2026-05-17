const stickyCTA = document.getElementById('stickyCTA');

const stickyClose = document.getElementById('stickyClose');



let ctaVisible = false;

let hideTimer;



function showCTA(){



  if(ctaVisible) return;



  ctaVisible = true;



  stickyCTA.classList.add('show');



  hideTimer = setTimeout(() => {

    stickyCTA.classList.remove('show');

    ctaVisible = false;

  }, 5000);



}



window.addEventListener('scroll', () => {



  if(window.scrollY > 700 && !ctaVisible){

    showCTA();

  }



});



stickyClose.addEventListener('click', () => {



  stickyCTA.classList.remove('show');



  clearTimeout(hideTimer);



  ctaVisible = false;



});