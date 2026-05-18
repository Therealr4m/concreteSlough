const stickyCTA = document.getElementById("stickyCTA");
const stickyClose = document.getElementById("stickyClose");

let hasAppeared = false;

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  if (scrollY > 900 && !hasAppeared) {

    hasAppeared = true;

    stickyCTA.classList.add("show");

    setTimeout(() => {

      stickyCTA.classList.remove("show");

      setTimeout(() => {
        hasAppeared = false;
      }, 12000);

    }, 3500);

  }

});

stickyClose.addEventListener("click", () => {

  stickyCTA.classList.remove("show");

  hasAppeared = true;

  setTimeout(() => {
    hasAppeared = false;
  }, 12000);

});




