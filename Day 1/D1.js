function toggleContent() {
    const content = document.getElementById('content');

    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  }
  const showButton = document.getElementById('showButton');
  showButton.addEventListener('click', toggleContent);