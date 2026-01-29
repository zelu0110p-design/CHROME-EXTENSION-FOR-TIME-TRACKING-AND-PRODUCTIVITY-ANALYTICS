
document.getElementById("save").onclick = async () => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  chrome.storage.local.get({bookmarks: []}, (data) => {
    data.bookmarks.push({url: tab.url, time: Date.now()});
    chrome.storage.local.set({bookmarks: data.bookmarks});
    alert("Timestamp saved!");
  });
};
