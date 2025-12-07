// Function to remove the target containers
function removeContainers() {
  // Selectors for both container types
  const selectors = [
    '.x1c4vz4f.x2lah0s.xhjk10j',
    '.x78zum5.x1q0g3np.x1gvbg2u.x1qughib.xleuxlb.xxfw5ft.x1mh60rb.x1f91t4q.x1n2onr6',
    '.x6s0dn4.x1bs97v6.x1q0q8m5.x9f619.xat24cr.xh8yej3.x1qhh985.x14z7g9a.xzbw6zd.x78zum5.x1q0g3np.x1qughib.xsag5q8.x13jy36j.x64bnmy.xijc0j3'
  ];
  
  // Combine selectors with comma
  const combinedSelector = selectors.join(', ');
  
///////////////////////////////////////////////////////////////////////////////////////////////////////on99999 the margin code

    const element = document.querySelector('.xvc5jky.xh8yej3.x10o80wk.x14k21rp.x1v4esvl.x8vgawa');    
    if (element) {
      element.style.margin = '1px';//////sidebarrrrr
    }


    const widthElement = document.querySelector('.html-div.xdj266r.x14z9mp.xat24cr.x1lziwak.xexx8yu.xyri2b.x18d9i69.x1c1uobl.x9f619.x78zum5.x15mokao.x1ga7v0g.x16uus16.xbiv7yw.x1iyjqo2.x2lwn1j.xeuugli.x1q0g3np.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1.xcrg951.x6prxxf.x6ikm8r.x10wlt62.x1n2onr6.xh8yej3');
    if (widthElement) {
      widthElement.style.width = '865px';//////////extend convo thing to 865 pixels
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////on99999 the margin code


  // Remove elements
  const containers = document.querySelectorAll(combinedSelector);
  containers.forEach(container => {
    container.remove();
  });
  
  return containers.length;
}




// Initial removal on page load
document.addEventListener('DOMContentLoaded', () => {
  const removed = removeContainers();
  console.log(`Facebook Cleaner: Removed ${removed} containers`);
});

// Observe DOM changes for dynamic content (like infinite scroll)
const observer = new MutationObserver(() => {
  const removed = removeContainers();
  if (removed > 0) {
    console.log(`Facebook Cleaner: Removed ${removed} new containers`);
  }
});

// Start observing when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
} else {
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}