document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("startSelection")
  const status = document.getElementById("status")

  startButton.addEventListener("click", async () => {
    try {
      // Get the active tab
      const [tab] = await window.chrome.tabs.query({ active: true, currentWindow: true })

      // Send message to content script to start selection
      await window.chrome.tabs.sendMessage(tab.id, { action: "startSelection" })

      // Update UI
      startButton.disabled = true
      startButton.textContent = "Selection Mode Active"
      status.textContent = "Draw a rectangle around the text you want to translate"

      // Close popup after a short delay
      setTimeout(() => {
        window.close()
      }, 1000)
    } catch (error) {
      console.error("Error starting selection:", error)
      status.textContent = "Error: Please refresh the page and try again"
    }
  })

  // Listen for messages from content script
  window.chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "selectionComplete") {
      startButton.disabled = false
      startButton.textContent = "Start Area Selection"
      status.textContent = "Ready to select another area"
    }
  })
})
