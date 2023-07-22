
    // JavaScript for horizontal scroll effect
    const reviewSection = document.querySelector('.review-section');
    let isMouseDown = false;
    let startX, scrollLeft;

    reviewSection.addEventListener('mousedown', (e) => {
      isMouseDown = true;
      startX = e.pageX - reviewSection.offsetLeft;
      scrollLeft = reviewSection.scrollLeft;
    });

    reviewSection.addEventListener('mouseleave', () => {
      isMouseDown = false;
    });

    reviewSection.addEventListener('mouseup', () => {
      isMouseDown = false;
    });

    reviewSection.addEventListener('mousemove', (e) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - reviewSection.offsetLeft;
      const walk = (x - startX) * 1.5; // You can adjust the scrolling speed here
      reviewSection.scrollLeft = scrollLeft - walk;
    });

    // Navbar Sticky
    const navbar = document.getElementsByTagName('nav')[0];
    window.addEventListener('scroll', function() {
        console.log(window.scrollY);
        if (this.window.scrollY > 1) {
            navbar.classList.replace('bg-transparent', 'nav-color')
        } else if (this.window.scrollY <= 0) {
            navbar.classList.replace('nav-color', 'bg-transparent')
        }
});


