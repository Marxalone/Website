// Modal functions to display lash style details
function openModal(style) {
  const modal = document.getElementById('lash-modal');
  const title = document.getElementById('modal-title');
  modal.style.display = "block";

  if (style === 'classic') {
    title.innerHTML = "Classic Lashes";
  } else if (style === 'volume') {
    title.innerHTML = "Volume Lashes";
  } else if (style === 'wispy') {
    title.innerHTML = "Wispy Lashes";
  }
}

// Close the modal
function closeModal() {
  document.getElementById('lash-modal').style.display = "none";
}
