chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "sampleID",
    title: "Search for Phish",
    contexts: ["all"],
    type: "normal"
  });
});

chrome.contextMenus.onClicked.addListener(searchForPhish);

function searchForPhish() {
  console.log("Weve got em");
}