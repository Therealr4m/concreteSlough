
(() => {
  "use strict";

  const init = () => {
    const root = document.getElementById("concrete-project-planner");

    if (!root || root.dataset.initialized === "true") return;

    root.dataset.initialized = "true";

    const form = root.querySelector("#cbp-form");
    const results = root.querySelector("#cbp-results");
    const error = root.querySelector("#cbp-error");

    const $ = (selector) => root.querySelector(selector);

    const fmt = (number, digits = 1) =>
      new Intl.NumberFormat("en-GB", {
        maximumFractionDigits: digits,
        minimumFractionDigits: digits
      }).format(number);

    const structureLabels = {
      shed: "garden shed",
      "garden-room": "garden room or office",
      garage: "garage",
      other: "outdoor structure"
    };

    const structureAdvice = {
      shed:
        "The shed size, weight and manufacturer's base requirements should be checked before deciding the construction.",

      "garden-room":
        "Garden rooms can have substantial loads and specific manufacturer requirements. Confirm the foundation design with the supplier or a competent professional.",

      garage:
        "Garages may need engineered foundations or building-control approval depending on their design and use. Have the requirements assessed.",

      other:
        "Confirm the proposed structure's weight, intended use and supplier requirements before specifying the base."
    };

    const groundAdvice = {
      level:
        "Firm-looking, level ground still needs checking for bearing capacity, drainage and suitable preparation.",

      uneven:
        "Uneven or sloping ground may need additional excavation, levelling and edge support.",

      soft:
        "Soft or unstable ground may require a ground assessment and a different foundation or sub-base design."
    };

    const accessAdvice = {
      clear:
        "Check the width and turning space needed for excavation equipment and concrete delivery.",

      narrow:
        "A narrow side passage can affect removal of spoil, material deliveries and the installation method.",

      "through-house":
        "Access through the property requires careful planning for protection, materials and spoil removal.",

      open:
        "Direct access may make deliveries easier, but the exact vehicle and equipment access should still be checked."
    };

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      error.hidden = true;

      if (!form.checkValidity()) {
        error.hidden = false;

        const invalid = form.querySelector(":invalid");

        if (invalid) invalid.focus();

        return;
      }

      const data = new FormData(form);

      const length = Number(data.get("length"));
      const width = Number(data.get("width"));

      const structure = data.get("structure");
      const ground = data.get("ground");
      const access = data.get("access");

      if (
        !Number.isFinite(length) ||
        !Number.isFinite(width) ||
        length <= 0 ||
        width <= 0 ||
        !structureAdvice[structure] ||
        !groundAdvice[ground] ||
        !accessAdvice[access]
      ) {
        error.hidden = false;
        return;
      }

      // Calculate base area
      const area = length * width;

      $("#cbp-area").textContent = `${fmt(area)} m²`;

      // Illustrative volume at 100–150mm thickness
      $("#cbp-volume").textContent =
        `${fmt(area * 0.1, 2)}–${fmt(area * 0.15, 2)} m³`;

      // Personalised project summary
      $("#cbp-summary").textContent =
        `You're planning a ${fmt(length)}m × ${fmt(width)}m ` +
        `concrete base for a ${structureLabels[structure]}. ` +
        `Here are the main points to discuss with an installer.`;

      // Generate relevant recommendations
      const items = [
        structureAdvice[structure],
        groundAdvice[ground],
        accessAdvice[access],
        "Allow for drainage, finished levels, nearby structures and any relevant permissions before installation."
      ];

      const list = $("#cbp-considerations");

      list.replaceChildren();

      items.forEach((message) => {
        const li = document.createElement("li");
        li.textContent = message;
        list.appendChild(li);
      });

      // Display results
      results.hidden = false;

      results.scrollIntoView({
        behavior: window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches ? "auto" : "smooth",
        block: "start"
      });
    });

    // Reset planner
    $("#cbp-reset").addEventListener("click", () => {
      form.reset();

      results.hidden = true;
      error.hidden = true;

      root.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      $("#cbp-length").focus({
        preventScroll: true
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

