document.querySelectorAll('.container > div').forEach((div, index) => {
    div.addEventListener('click', () => {
      if (index === 0) {
        window.location.href = 'mclaren.html'; // Redirect for first image
      } else if (index === 1) {
        window.location.href = 'ferrari.html'; // Redirect for second image
      } else if (index === 2) {
        window.location.href = 'porsche.html'; // Redirect for third image
      }
    });
  });
  