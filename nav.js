const menu = document.getElementById("side-menu");
const overlay = document.getElementById("menu-overlay");
const openBtn = document.getElementById("menu-toggle");
const closeBtn = document.getElementById("menu-close");

if (menu && overlay && openBtn && closeBtn) {
  let previousBodyOverflow = "";

  function openMenu() {
    previousBodyOverflow = document.body.style.overflow;

    menu.classList.add("active");
    overlay.classList.add("active");

    openBtn.setAttribute("aria-expanded", "true");
    openBtn.setAttribute("aria-label", "Close navigation menu");

    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active");

    openBtn.setAttribute("aria-expanded", "false");
    openBtn.setAttribute("aria-label", "Open navigation menu");

    document.body.style.overflow = previousBodyOverflow;
  }

  openBtn.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("active")) {
      closeMenu();
      openBtn.focus();
    }
  });

  // Close the menu after following a link.
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Keep only one dropdown open at a time.
  menu.querySelectorAll("details").forEach((currentDetails) => {
    currentDetails.addEventListener("toggle", () => {
      if (!currentDetails.open) return;

      menu.querySelectorAll("details").forEach((otherDetails) => {
        if (otherDetails !== currentDetails) {
          otherDetails.open = false;
        }
      });
    });
  });
}
