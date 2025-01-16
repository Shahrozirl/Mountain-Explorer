// JavaScript to make images clickable in the homepage
document.querySelectorAll('.container > .image').forEach((div, index) => {
  div.addEventListener('click', () => {
    // Here I am getting the link thats linked to the clicked image
    const link = div.getAttribute('data-link');
    // Redirects you to said page
    window.location.href = link;
  });
});


