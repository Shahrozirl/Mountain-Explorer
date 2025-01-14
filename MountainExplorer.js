// JavaScript to make images clickable
document.querySelectorAll('.container > .image').forEach((div, index) => {
  div.addEventListener('click', () => {
    // Get the link associated with the clicked image
    const link = div.getAttribute('data-link');
    // Navigate to the linked page
    window.location.href = link;
  });
});
