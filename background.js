// Background script for the Selective Translator extension

chrome.runtime.onInstalled.addListener(() => {
  console.log("Selective Translator extension installed")
})

// Handle extension icon click
chrome.action.onClicked.addListener((tab) => {
  // This will open the popup, no additional action needed
})

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "selectionComplete") {
    // Handle selection completion if needed
    console.log("Selection completed")
  }
})
