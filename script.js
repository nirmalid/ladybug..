const modal = document.getElementById("loginmodal");
const loginIcon = document.getElementById("loginIcon");
const closeBtn = modal.querySelector(".close");

// Show modal when user icon clicked
loginIcon.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "block";
  modal.querySelector("input").focus();  // Focus first input for accessibility
});

// Hide modal when close button clicked
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Hide modal when clicking outside modal content
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Optional: close modal on ESC key press
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
  }
});
