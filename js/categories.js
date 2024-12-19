function move(id, positionPercent, color) {
  var tl = gsap.timeline();

  tl.to("#bgBubble", { duration: 0.15, bottom: "-50px", ease: "ease-out" }, 0)
    .to("#bubble1", { duration: 0.1, y: "190%", boxShadow: 'none', ease: "ease-out" }, 0)
    .to("#bubble2", { duration: 0.1, y: "190%", boxShadow: 'none', ease: "ease-out" }, 0)
    .to("#bubble3", { duration: 0.1, y: "190%", boxShadow: 'none', ease: "ease-out" }, 0)
    .to("#bubble4", { duration: 0.1, y: "190%", boxShadow: 'none', ease: "ease-out" }, 0)
    .to("#bubble5", { duration: 0.1, y: "190%", boxShadow: 'none', ease: "ease-out" }, 0) // Reset the fifth icon
    .to(".icon", { duration: 0.5, opacity: 0, ease: "ease-out" }, 0) // Reset all icons
    .to("#bgBubble", { duration: 0.4, left: positionPercent, ease: "ease-in-out" }, 0.1) // Move background bubble
    .to("#bgBubble", { duration: 0.15, bottom: "-40px", ease: "ease-out" }, '-=0.2')
    .to(`#bubble${id}`, { 
      duration: 0.15, 
      y: "-10%", 
      opacity: 1,
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      ease: "ease-out" 
    }, '-=0.1')
    .to(`#bubble${id} > span`, { duration: 0.15, y: "0%", opacity: 0.7, ease: "ease-out" }, '-=0.1')
    .to("#navbarContainer", { duration: 0.3, ease: "ease-in-out" }, 0)
    .to("#bg", { duration: 0.3, ease: "ease-in-out" }, 0)
    .to("#bgBubble", { duration: 0.3, ease: "ease-in-out" }, 0);

  // Scroll down by 2px after animation
  setTimeout(() => {
    window.scrollBy({ top: 10, behavior: 'smooth' });
    window.scrollBy({ bottom: 500, behavior: 'smooth' });
  }, 270); // Delay to match animation timing
}

// Default bubble setup when the page loads
document.addEventListener("DOMContentLoaded", function () {
  move('1', '90%', '#ffffff'); // Default to bubble 3
});

document.querySelectorAll('.menuElement').forEach(menu => {
  menu.addEventListener('click', function () {
    const id = this.dataset.id; // Get bubble ID dynamically
    const position = this.dataset.position; // Get position dynamically
    move(id, position, '#ffffff'); // Call move with the correct parameters
  });
});

// Add event listener for scrolling down 2px when clicking anywhere on the page
document.body.addEventListener('click', function () {
  //window.scrollBy({ top: 200, behavior: 'smooth' });
 // window.scrollBy({ bottom: 2, behavior: 'smooth' })
});
