const aiDIV = document.querySelectorAll("#Odp5De > div:nth-child(1), #dEwkXc > div");
var yeetStatus = undefined;

chrome.runtime.onConnect.addListener((port) => {
    port.onMessage.addListener((msg) => {
        if (msg.from == "AI Yeeter") {
            port.postMessage({to: "AI Yeeter", status: yeetStatus});
            console.log(`Posted message ${yeetStatus}`);
        }
    }) 
})

if (aiDIV.length > 0) {
    aiDIV.forEach((elem) => {
        elem.remove();
    });
    yeetStatus = true;
}
else {
    yeetStatus = false;
}
