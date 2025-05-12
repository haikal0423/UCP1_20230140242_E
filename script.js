window.onload = function () {
  const popup = document.getElementById('popup');
  if (popup) {
    setTimeout(() => {
      popup.style.display = 'block';
    }, 3000);
  }
};

function closePopup() {
  const popup = document.getElementById('popup');
  if (popup) popup.style.display = 'none';
}

function submitForm(event) {
  event.preventDefault();
  alert("📬 Pesan anda terkirim! Kami akan segera menghubungi Anda.");
  return false;
}
