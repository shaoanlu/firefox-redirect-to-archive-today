// Listen for clicks on the browser action button
browser.browserAction.onClicked.addListener((tab) => {
  // Get the current URL
  const currentUrl = tab.url;
  
  // Check if it's a valid URL to archive (not already an archive.today page)
  if (currentUrl && !currentUrl.includes('archive.today') && !currentUrl.includes('archive.is') && !currentUrl.includes('archive.ph')) {
    // Encode the URL for archive.today
    const archiveUrl = `https://archive.today/${encodeURIComponent(currentUrl)}`;
    
    // Redirect to archive.today
    browser.tabs.update(tab.id, {
      url: archiveUrl
    });
  } else if (currentUrl.includes('archive.today') || currentUrl.includes('archive.is') || currentUrl.includes('archive.ph')) {
    // If already on archive.today, show a notification
    console.log('Already on an archive page');
  }
});