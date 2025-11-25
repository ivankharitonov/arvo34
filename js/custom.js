/* ============================================
   Custom JavaScript for Somewhere Website
   Add your custom JavaScript here
   ============================================ */

// Ensure page is visible - remove anti-flicker class if it's still present
(function() {
  // Remove anti-flicker class immediately
  function removeAntiFlicker() {
    document.documentElement.className = document.documentElement.className.replace(/\s?anti-flicker/g, '');
  }
  
  // Try immediately
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeAntiFlicker);
  } else {
    removeAntiFlicker();
  }
  
  // Fallback after 2 seconds
  setTimeout(removeAntiFlicker, 2000);
})();

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('Somewhere website loaded');
  
  // Add your custom JavaScript here
  
  // Example: Initialize Splide carousel if needed
  // if (document.getElementById('splide-savings')) {
  //   new Splide('#splide-savings', {
  //     type: 'loop',
  //     perPage: 3,
  //     gap: '1.5rem',
  //     breakpoints: {
  //       768: { perPage: 2 },
  //       640: { perPage: 1 }
  //     }
  //   }).mount();
  // }
});

// Add your custom functions below this line

