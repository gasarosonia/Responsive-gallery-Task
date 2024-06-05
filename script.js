document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');
        const captionText = document.getElementById('caption');
        const img = item.querySelector('img');

        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;

        document.querySelector('.close').onclick = function() {
            modal.style.display = "none";
        };
    });
});
