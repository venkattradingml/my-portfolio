// Create the 'Back to Top' button element
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '⬆ Back to Top';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.backgroundColor = '#1abc9c';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none'; // Initially hidden
backToTopButton.style.zIndex = '1000';
backToTopButton.style.fontSize = '14px';

// Append the button to the body
document.body.appendChild(backToTopButton);

// Show the button when the user scrolls down
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { // Adjust scroll threshold as needed
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Smooth scroll to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
