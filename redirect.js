// instagram-redirect.js
// Redirect Instagram homepage to direct inbox

console.log('VTEC Instagram Redirect: Script loaded');

function redirectToInbox() {
  // Only redirect if we're on the exact Instagram homepage
  const currentUrl = window.location.href;
  const isInstagramHome = window.location.hostname === 'www.instagram.com' && 
                         (window.location.pathname === '/' || window.location.pathname === '');
  
  if (isInstagramHome) {
    // Check if we're already on inbox to prevent loops
    const isAlreadyOnInbox = currentUrl.includes('/direct/inbox') || 
                            currentUrl.includes('/direct/t/');
    
    if (!isAlreadyOnInbox) {
      console.log('VTEC Instagram Redirect: Redirecting to inbox...');
      // Use replace to prevent back button issues
      window.location.replace('https://www.instagram.com/direct/inbox/');
      return true;
    }
  }
  return false;
}

// Run immediately based on document state
if (document.readyState === 'loading') {
  // Page is still loading, wait for DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    console.log('VTEC Instagram Redirect: DOM loaded, checking for redirect...');
    redirectToInbox();
  });
} else {
  // DOM is already ready, run immediately
  console.log('VTEC Instagram Redirect: DOM already ready, checking for redirect...');
  redirectToInbox();
}

// Handle Single Page Application (SPA) navigation
// Instagram uses client-side routing, so we need to watch for URL changes
let lastUrl = window.location.href;

const spaObserver = new MutationObserver(() => {
  const currentUrl = window.location.href;
  
  // If URL changed (client-side navigation)
  if (currentUrl !== lastUrl) {
    console.log('VTEC Instagram Redirect: URL changed to', currentUrl);
    lastUrl = currentUrl;
    
    // Small delay to ensure URL is fully updated
    setTimeout(() => {
      redirectToInbox();
    }, 50);
  }
});

// Start observing for URL changes
// Watch for changes in the entire document
spaObserver.observe(document, {
  subtree: true,
  childList: true,
  attributes: true,
  characterData: true
});

// Also listen for popstate events (back/forward navigation)
window.addEventListener('popstate', () => {
  console.log('VTEC Instagram Redirect: History navigation detected');
  setTimeout(() => {
    redirectToInbox();
  }, 100);
});

// Optional: Handle hash changes if Instagram uses them
window.addEventListener('hashchange', () => {
  console.log('VTEC Instagram Redirect: Hash change detected');
  setTimeout(() => {
    redirectToInbox();
  }, 50);
});

console.log('VTEC Instagram Redirect: Setup complete');