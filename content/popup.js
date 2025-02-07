chrome.runtime.onMessage.addListener(
    (req, sender, res) => {
        const span = document.getElementById("aiHasBeenYeeted");
        if (req.subject = "yeetedAI") {
            span.innerText = "🦀 YES 🦀";
        }
        else {
            span.innerText = "NO";
        }
    }
)

