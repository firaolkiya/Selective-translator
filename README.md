# Selective Translator Chrome Extension
![Demo](https://github.com/user-attachments/assets/51c4c094-66c6-4062-b7ce-e2ab47e4f995)

A Chrome extension that allows users to select any rectangular area on a webpage and translate the text within that area.

## Features

- 🎯 **Selective Translation**: Select any area on a webpage to translate
- 🌍 **Multi-language Support**: Translate to 11+ languages
- 🔍 **Auto Language Detection**: Automatically detects the source language
- 🎨 **User-friendly Interface**: Clean and intuitive design
- ⚡ **Fast Translation**: Quick and efficient translation service

## Installation

### Method 1: Load as Unpacked Extension (Development)

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension folder
5. The extension icon should appear in your Chrome toolbar

### Method 2: Install from Chrome Web Store (Coming Soon)

The extension will be available on the Chrome Web Store soon.

## How to Use

1. **Navigate** to any webpage with text you want to translate
2. **Click** the Selective Translator extension icon in your toolbar
3. **Click** "Start Area Selection" in the popup
4. **Draw** a rectangle around the text you want to translate by clicking and dragging
5. **Choose** your target language from the dropdown
6. **Click** "Translate" to see the translation
7. **Close** the modal when done

## Supported Languages

- Spanish (es)
- French (fr)
- German (de)
- Italian (it)
- Portuguese (pt)
- Russian (ru)
- Japanese (ja)
- Korean (ko)
- Chinese (zh)
- Arabic (ar)
- Hindi (hi)

## Technical Details

### Files Structure

- `manifest.json` - Extension configuration
- `popup.html/js` - Extension popup interface
- `content.js/css` - Content script for webpage interaction
- `background.js` - Background service worker
- `icons/` - Extension icons (16x16, 48x48, 128x128)

### Permissions

- `activeTab` - Access to the current active tab
- `storage` - Store user preferences
- `https://translate.googleapis.com/*` - Access to translation services

### Translation API

Currently uses MyMemory Translation API (free tier). You can replace it with:
- Google Translate API
- Microsoft Translator API
- DeepL API
- Any other translation service

## Customization

### Adding More Languages

Edit the language options in `content.js`:

\`\`\`javascript
<select class="translator-select" id="targetLang">
  <option value="your_lang_code">Your Language</option>
  // Add more languages here
</select>
\`\`\`

### Changing Translation Service

Replace the `callTranslationAPI` function in `content.js` with your preferred translation service.

### Styling

Modify `content.css` to customize the appearance of the selection box and translation modal.

## Troubleshooting

### Extension Not Working
- Make sure you've enabled the extension in `chrome://extensions/`
- Refresh the webpage after installing the extension
- Check the browser console for any error messages

### Translation Not Working
- Check your internet connection
- The free translation service has rate limits
- Consider upgrading to a premium translation API

### Selection Not Accurate
- Try selecting a smaller, more specific area
- Ensure the selected area contains visible text
- Some dynamic content might not be captured correctly

## Development

### Prerequisites
- Chrome browser
- Basic knowledge of JavaScript, HTML, CSS
- Understanding of Chrome Extension APIs

### Local Development
1. Make changes to the code
2. Go to `chrome://extensions/`
3. Click the refresh icon on your extension
4. Test the changes on a webpage


## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Privacy Policy

This extension:
- Only accesses content when you explicitly select an area
- Does not store or transmit personal data
- Uses external translation services only for the selected text
- Does not track user behavior

## Support

If you encounter any issues or have suggestions:
1. Check the troubleshooting section
2. Open an issue on GitHub
3. Contact the developer

## Changelog

### Version 1.0
- Initial release
- Basic area selection functionality
- Multi-language translation support
- Auto language detection
