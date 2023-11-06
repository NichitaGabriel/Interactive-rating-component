document.addEventListener('DOMContentLoaded', function () {
  const ratingOptions = document.querySelectorAll('.rating-option');
  const ratingSubmit = document.querySelector('.rating-submit');
  const displayRating = document.getElementById('selection-number');

  const ratingCard = document.querySelector('.rating-card-body');
  const ratingDisplay = document.querySelector('.thanks-card-body');

  let selectedRating = 0;

  ratingOptions.forEach((point) => {
    point.addEventListener('click', function() {
      selectedRating = parseInt(point.getAttribute('data-rating'));
      ratingOptions.forEach((s) => s.classList.remove('selected'));
      point.classList.add('selected');
    });
  });

  ratingSubmit.addEventListener('click', function () {
    ratingCard.style.display = 'none';
    displayRating.textContent = selectedRating;
    ratingDisplay.style.display = 'block';
  });
});
