// Get the popup text span
let span = document.getElementById('aiHasBeenYeeted');
span.innerText = "tbc";

/**
 * Set the popup text depending on whether the AI overview was removed.
 * @param {Boolean} status removal status
 */
function setYeetStatus(status) {
    if (span) {
        if (status) {
            span.innerText = "🦀 YES 🦀";
        }
        else {
            span.innerText = "nothing to yeet";
        }
    }
    else {
        console.log("No span");
    }
}

// When opened, query active tab for yeet status
chrome.tabs.query(
    {active: true, currentWindow: true},
    (tabs) => {
        console.log("Tab ID: " + tabs[0].id);
        var port = chrome.tabs.connect(tabs[0].id, {name: "AI Yeeter"});
        port.postMessage({from: "AI Yeeter", message: "yeet query"});
        port.onMessage.addListener((msg) => {
            if (msg.to == "AI Yeeter") {
                setYeetStatus(msg.status);
            }
        });
    }
);
