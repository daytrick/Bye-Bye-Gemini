const aiDIV = document.querySelector("#Odp5De > div:nth-child(1)");
var yeetStatus = undefined;

chrome.runtime.onConnect.addListener((port) => {
   port.onMessage.addListener((msg) => {
        if (msg.from == "AI Yeeter") {
            port.postMessage({to: "AI Yeeter", status: yeetStatus});
            console.log(`Posted message ${yeetStatus}`);
        }
    }) 
})

if (aiDIV) {
    aiDIV.remove();
    yeetStatus = true;
    console.log("Yeeted");
}
else {
    yeetStatus = false;
    console.log("Nothing to yeet");
}
