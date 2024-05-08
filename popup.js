// popup.js
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        function: getProfileName,
      },
      (response) => {
        document.getElementById('name').innerText = response[0].result;
      }
    );
  });
  
  function getProfileName() {
    const nameElement = document.querySelector('.top-card-layout__title');
    return nameElement ? nameElement.innerText.trim() : 'Name not found';
  }
  