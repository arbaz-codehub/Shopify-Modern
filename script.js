// Handle cart functionality
let cartCount = 0;
const cartCountElement = document.querySelector(".cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCountElement.textContent = cartCount;
    cartCountElement.classList.add("pulse");

    button.classList.add("added");
    setTimeout(() => {
      button.classList.remove("added");
      cartCountElement.classList.remove("pulse");
    }, 1000);
  });
});

// Newsletter form submission
const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    console.log(`Newsletter subscription for: ${email}`);
    newsletterForm.reset();
    alert("Thank you for subscribing!");
  });
}

// Mobile navigation toggle
const navLinks = document.querySelector(".nav-links");
const menuToggle = document.createElement("button");
menuToggle.classList.add("menu-toggle");
menuToggle.innerHTML = "☰";
document.querySelector(".nav-container").prepend(menuToggle);

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// Header scroll animation
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Magnetic buttons
const magneticButtons = document.querySelectorAll(".magnetic");
magneticButtons.forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    const buttonAccent = button.querySelector(".button-accent");
    const navGlow = button.querySelector(".nav-glow");
    const iconGlow = button.querySelector(".icon-glow");

    [buttonAccent, navGlow, iconGlow].forEach((element) => {
      if (element) {
        element.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      }
    });
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translate(0, 0)";
    const elements = [
      button.querySelector(".button-accent"),
      button.querySelector(".nav-glow"),
      button.querySelector(".icon-glow"),
    ];

    elements.forEach((element) => {
      if (element) {
        element.style.transform = "translate(0, 0)";
      }
    });
  });
});

// Product card hover animations
const productCards = document.querySelectorAll(".product-card");
productCards.forEach((card) => {
  const image = card.querySelector(".image-wrapper img");
  const overlay = card.querySelector(".image-overlay");

  if (image) {
    card.addEventListener("mouseenter", () => {
      image.style.transform = "scale(1.1)";
      if (overlay) overlay.style.opacity = "1";
    });

    card.addEventListener("mouseleave", () => {
      image.style.transform = "scale(1)";
      if (overlay) overlay.style.opacity = "0";
    });
  }
});
