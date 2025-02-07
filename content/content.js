const aiDIV = document.querySelector("#Odp5De > div:nth-child(1)");

if (aiDIV) {
    aiDIV.remove();
    chrome.runtime.sendMessage({
        from: "content",
        subject: "yeetedAI"
    })
    console.log("Yeeted");
}
else {
    console.log("Nothing to yeet");
}
