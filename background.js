
chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes('linkedin.com/in/')) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getProfileName,
      });
    } else {
      chrome.action.setPopup({tabId: tab.id, popup: 'error.html'});
      chrome.action.openPopup();
    }
  });
  
  function getProfileName() {
    const nameElement = document.querySelector('.top-card-layout__title');
    return nameElement ? nameElement.innerText.trim() : 'Name not found';
  }