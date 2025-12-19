function openModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

// Close modal when clicking outside the box
window.addEventListener("click", (e) => {
  const modal = document.getElementById("modal");
  if (e.target === modal) closeModal();
});

// ESC closes modal
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Accordion: only one open at a time per section/grid
function wireAccordions() {
  const grids = document.querySelectorAll("[data-accordion]");

  grids.forEach((grid) => {
    const tiles = grid.querySelectorAll("[data-tile]");

    const closeAll = () => {
      tiles.forEach((t) => {
        t.classList.remove("open");
        const icon = t.querySelector(".tile-icon");
        if (icon) icon.textContent = "+";
      });
    };

    tiles.forEach((tile) => {
      const head = tile.querySelector(".tile-head");
      const icon = tile.querySelector(".tile-icon");

      const toggle = () => {
        const isOpen = tile.classList.contains("open");
        closeAll();
        if (!isOpen) {
          tile.classList.add("open");
          if (icon) icon.textContent = "–";
        }
      };

      head.addEventListener("click", toggle);
    });
  });
}

// Mobile nav toggle
function wireNav() {
  const btn = document.querySelector(".nav-toggle");
  const menu = document.getElementById("navMenu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("show");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu on link click
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      menu.classList.remove("show");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  wireAccordions();
  wireNav();
  setYear();
});