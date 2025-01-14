let currentIndex = 0;

function scrollImages(direction) {
    const imageDisplay = document.querySelector('.image-display');
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;

    currentIndex += direction;
    if (currentIndex < 0) currentIndex = totalImages - 1;
    if (currentIndex >= totalImages) currentIndex = 0;

    const offset = -currentIndex * 100;
    imageDisplay.style.transform = `translateX(${offset}%)`;
}

function goToPage(page) {
    window.location.href = page;
}
