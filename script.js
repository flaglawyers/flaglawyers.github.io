function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Close modal if user taps outside modal content
window.addEventListener("click", function (e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) closeModal();
});

// Tile accordion behavior
function toggleBlurb(key) {
  const tile = document.querySelector(`[onclick="toggleBlurb('${key}')"]`);
  if (!tile) return;

  // toggle open/close
  tile.classList.toggle("open");
}