chrome.contextMenus.create({
    "title": "Search for Phish",
    "context": ["selection"],
    "onclick": searchForPhish()
})

function searchForPhish() {
    console.log("Weve got em");
};