// Show main content after 3 seconds
window.onload = () => {
  setTimeout(() => {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('content').classList.remove('hidden');
  }, 3000);
};
