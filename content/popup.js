function setYeetStatus(status) {
    let span = document.getElementById('aiHasBeenYeeted');
    if (span) {
        if (status) {
            span.innerText = "🦀 YES 🦀";
        }
        else {
            span.innerText = "NO";
        }
    }
    else {
        console.log("No span");
    }
}

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        console.log(request);
        if (request.from == "content" && request.subject == "yeetedAI") {
            setYeetStatus(true);
        }
        sendResponse({from: "popup", subject: "ok"});
    }
)