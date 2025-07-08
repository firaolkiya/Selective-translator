// Remove: const chrome = window.chrome
window.languages = [
  "Detect language",
  "Abkhaz",
  "Acehnese",
  "Acholi",
  "Afar",
  "Afrikaans",
  "Albanian",
  "Alur",
  "Amharic",
  "Arabic",
  "Armenian",
  "Assamese",
  "Avar",
  "Awadhi",
  "Aymara",
  "Azerbaijani",
  "Balinese",
  "Baluchi",
  "Bambara",
  "Baoulé",
  "Bashkir",
  "Basque",
  "Batak Karo",
  "Batak Simalungun",
  "Batak Toba",
  "Belarusian",
  "Bemba",
  "Bengali",
  "Betawi",
  "Bhojpuri",
  "Bikol",
  "Bosnian",
  "Breton",
  "Bulgarian",
  "Buryat",
  "Cantonese",
  "Catalan",
  "Cebuano",
  "Chamorro",
  "Chechen",
  "Chichewa",
  "Chinese (Simplified)",
  "Chinese (Traditional)",
  "Chuukese",
  "Chuvash",
  "Corsican",
  "Crimean Tatar (Cyrillic)",
  "Crimean Tatar (Latin)",
  "Croatian",
  "Czech",
  "Danish",
  "Dari",
  "Dhivehi",
  "Dinka",
  "Dogri",
  "Dombe",
  "Dutch",
  "Dyula",
  "Dzongkha",
  "English",
  "Esperanto",
  "Estonian",
  "Ewe",
  "Faroese",
  "Fijian",
  "Filipino",
  "Finnish",
  "Fon",
  "French",
  "French (Canada)",
  "Frisian",
  "Friulian",
  "Fulani",
  "Ga",
  "Galician",
  "Georgian",
  "German",
  "Greek",
  "Guarani",
  "Gujarati",
  "Haitian Creole",
  "Hakha Chin",
  "Hausa",
  "Hawaiian",
  "Hebrew",
  "Hiligaynon",
  "Hindi",
  "Hmong",
  "Hungarian",
  "Hunsrik",
  "Iban",
  "Icelandic",
  "Igbo",
  "Ilocano",
  "Indonesian",
  "Inuktut (Latin)",
  "Inuktut (Syllabics)",
  "Irish",
  "Italian",
  "Jamaican Patois",
  "Japanese",
  "Javanese",
  "Jingpo",
  "Kalaallisut",
  "Kannada",
  "Kanuri",
  "Kapampangan",
  "Kazakh",
  "Khasi",
  "Khmer",
  "Kiga",
  "Kikongo",
  "Kinyarwanda",
  "Kituba",
  "Kokborok",
  "Komi",
  "Konkani",
  "Korean",
  "Krio",
  "Kurdish (Kurmanji)",
  "Kurdish (Sorani)",
  "Kyrgyz",
  "Lao",
  "Latgalian",
  "Latin",
  "Latvian",
  "Ligurian",
  "Limburgish",
  "Lingala",
  "Lithuanian",
  "Lombard",
  "Luganda",
  "Luo",
  "Luxembourgish",
  "Macedonian",
  "Madurese",
  "Maithili",
  "Makassar",
  "Malagasy",
  "Malay",
  "Malay (Jawi)",
  "Malayalam",
  "Maltese",
  "Mam",
  "Manx",
  "Maori",
  "Marathi",
  "Marshallese",
  "Marwadi",
  "Mauritian Creole",
  "Meadow Mari",
  "Meiteilon (Manipuri)",
  "Minang",
  "Mizo",
  "Mongolian",
  "Myanmar (Burmese)",
  "Nahuatl (Eastern Huasteca)",
  "Ndau",
  "Ndebele (South)",
  "Nepalbhasa (Newari)",
  "Nepali",
  "NKo",
  "Norwegian",
  "Nuer",
  "Occitan",
  "Odia (Oriya)",
  "Oromo",
  "Ossetian",
  "Pangasinan",
  "Papiamento",
  "Pashto",
  "Persian",
  "Polish",
  "Portuguese (Brazil)",
  "Portuguese (Portugal)",
  "Punjabi (Gurmukhi)",
  "Punjabi (Shahmukhi)",
  "Quechua",
  "Qʼeqchiʼ",
  "Romani",
  "Romanian",
  "Rundi",
  "Russian",
  "Sami (North)",
  "Samoan",
  "Sango",
  "Sanskrit",
  "Santali (Latin)",
  "Santali (Ol Chiki)",
  "Scots Gaelic",
  "Sepedi",
  "Serbian",
  "Sesotho",
  "Seychellois Creole",
  "Shan",
  "Shona",
  "Sicilian",
  "Silesian",
  "Sindhi",
  "Sinhala",
  "Slovak",
  "Slovenian",
  "Somali",
  "Spanish",
  "Sundanese",
  "Susu",
  "Swahili",
  "Swati",
  "Swedish",
  "Tahitian",
  "Tajik",
  "Tamazight",
  "Tamazight (Tifinagh)",
  "Tamil",
  "Tatar",
  "Telugu",
  "Tetum",
  "Thai",
  "Tibetan",
  "Tigrinya",
  "Tiv",
  "Tok Pisin",
  "Tongan",
  "Tshiluba",
  "Tsonga",
  "Tswana",
  "Tulu",
  "Tumbuka",
  "Turkish",
  "Turkmen",
  "Tuvan",
  "Twi",
  "Udmurt",
  "Ukrainian",
  "Urdu",
  "Uyghur",
  "Uzbek",
  "Venda",
  "Venetian",
  "Vietnamese",
  "Waray",
  "Welsh",
  "Wolof",
  "Xhosa",
  "Yakut",
  "Yiddish",
  "Yoruba",
  "Yucatec Maya",
  "Zapotec",
  "Zulu"
];

// Block extension on restricted pages

const restrictedHosts = [
  'chrome.google.com',
  'support.google.com',
  'mail.google.com',
  'accounts.google.com',
  'docs.google.com',
  'drive.google.com',
  'calendar.google.com',
  'meet.google.com',
  'photos.google.com',
  'keep.google.com',
  'classroom.google.com',
  'admin.google.com',
  'chrome://',
  'chrome-extension://'
]

if (restrictedHosts.some(h => window.location.href.includes(h))) {
  alert('Selective Translator extension cannot run on this page due to browser restrictions.')
  // Prevent further execution
} else {
class SelectiveTranslator {
  constructor() {
    this.isSelecting = false
    this.startX = 0
    this.startY = 0
    this.selectionBox = null
    this.overlay = null
    this.translationModal = null
  }

  init() {
    // Listen for messages from popup
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.action === "startSelection") {
        this.startSelection()
        sendResponse({ success: true })
      }
    })
  }

  startSelection() {
    if (this.isSelecting) return

    this.isSelecting = true
    this.createOverlay()
    this.addEventListeners()
    document.body.style.cursor = "crosshair"
  }

  createOverlay() {
    this.overlay = document.createElement("div")
    this.overlay.className = "translator-overlay"
    document.body.appendChild(this.overlay)

    this.selectionBox = document.createElement("div")
    this.selectionBox.className = "translator-selection-box"
    document.body.appendChild(this.selectionBox)
  }

  addEventListeners() {
    document.addEventListener("mousedown", this.handleMouseDown.bind(this))
    document.addEventListener("mousemove", this.handleMouseMove.bind(this))
    document.addEventListener("mouseup", this.handleMouseUp.bind(this))
    document.addEventListener("keydown", this.handleKeyDown.bind(this))
  }

  removeEventListeners() {
    document.removeEventListener("mousedown", this.handleMouseDown.bind(this))
    document.removeEventListener("mousemove", this.handleMouseMove.bind(this))
    document.removeEventListener("mouseup", this.handleMouseUp.bind(this))
    document.removeEventListener("keydown", this.handleKeyDown.bind(this))
  }

  handleMouseDown(e) {
    if (!this.isSelecting) return

    e.preventDefault()
    this.startX = e.clientX + window.scrollX
    this.startY = e.clientY + window.scrollY

    this.selectionBox.style.left = this.startX + "px"
    this.selectionBox.style.top = this.startY + "px"
    this.selectionBox.style.width = "0px"
    this.selectionBox.style.height = "0px"
    this.selectionBox.style.display = "block"
  }

  handleMouseMove(e) {
    if (!this.isSelecting || !this.selectionBox.style.display) return

    const currentX = e.clientX + window.scrollX
    const currentY = e.clientY + window.scrollY

    const width = Math.abs(currentX - this.startX)
    const height = Math.abs(currentY - this.startY)
    const left = Math.min(currentX, this.startX)
    const top = Math.min(currentY, this.startY)

    this.selectionBox.style.left = left + "px"
    this.selectionBox.style.top = top + "px"
    this.selectionBox.style.width = width + "px"
    this.selectionBox.style.height = height + "px"
  }

  handleMouseUp(e) {
    if (!this.isSelecting) return

    const rect = this.selectionBox.getBoundingClientRect()

    if (rect.width > 10 && rect.height > 10) {
      this.captureSelectedArea(rect)
    } else {
      this.cancelSelection()
    }
  }

  handleKeyDown(e) {
    if (e.key === "Escape") {
      this.cancelSelection()
    }
  }

  captureSelectedArea(rect) {
    // Get all text elements within the selected area
    const selectedText = this.extractTextFromArea(rect)

    if (selectedText.trim()) {
      this.showTranslationModal(selectedText, rect)
    } else {
      alert("No text found in the selected area. Please try again.")
      this.cancelSelection()
    }
  }

  extractTextFromArea(rect) {
    const elements = document.elementsFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2)

    let text = ""
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => {
        const range = document.createRange()
        range.selectNodeContents(node)
        const nodeRect = range.getBoundingClientRect()

        // Check if text node overlaps with selection
        if (
          nodeRect.left < rect.right &&
          nodeRect.right > rect.left &&
          nodeRect.top < rect.bottom &&
          nodeRect.bottom > rect.top
        ) {
          return NodeFilter.FILTER_ACCEPT
        }
        return NodeFilter.FILTER_REJECT
      },
    })

    let node
    while ((node = walker.nextNode())) {
      text += node.textContent + " "
    }

    return text.trim()
  }

  showTranslationModal(text, rect) {
    this.cleanupSelection()

    this.translationModal = document.createElement("div")
    this.translationModal.className = "translator-modal"
    this.translationModal.innerHTML = `
      <div class="translator-modal-content">
        <div class="translator-modal-header">
          <h3>Selective Translator</h3>
          <button class="translator-close-btn">&times;</button>
        </div>
        <div class="translator-modal-body">
          <div class="translator-section">
            <label>Original Text:</label>
            <div class="translator-text-box original-text">${text}</div>
          </div>
            
            <div class="translator-section">
              <label>Source Language:</label>
              <select class="translator-select" id="sourceLang"></select>
            </div>
          
          <div class="translator-section">
            <label>Detected Language:</label>
            <div class="translator-detected-lang" id="detectedLang">Detecting...</div>
          </div>
          
          <div class="translator-section">
            <label>Translate to:</label>
              <select class="translator-select" id="targetLang"></select>
          </div>
          
          <button class="translator-btn" id="translateBtn">Translate</button>
          
          <div class="translator-section" id="translationResult" style="display: none;">
            <label>Translation:</label>
            <div class="translator-text-box translated-text" id="translatedText"></div>
          </div>
        </div>
      </div>
    `

    document.body.appendChild(this.translationModal)

    // Add event listeners
    this.translationModal.querySelector(".translator-close-btn").addEventListener("click", () => {
      this.closeModal()
    })

    this.translationModal.querySelector("#translateBtn").addEventListener("click", () => {
      this.translateText(text)
    })

      // Populate language dropdowns dynamically
      const sourceLangSelect = this.translationModal.querySelector('#sourceLang')
      const targetLangSelect = this.translationModal.querySelector('#targetLang')
      if (window.languages && Array.isArray(window.languages)) {
        window.languages.forEach((lang, idx) => {
          // Source: first entry is 'Detect language' (set value to 'auto')
          if (idx === 0) {
            const opt = document.createElement('option')
            opt.value = 'auto'
            opt.textContent = lang
            sourceLangSelect.appendChild(opt)
          } else {
            const opt = document.createElement('option')
            opt.value = lang
            opt.textContent = lang
            sourceLangSelect.appendChild(opt)

            // Target: skip 'Detect language'
            const opt2 = document.createElement('option')
            opt2.value = lang
            opt2.textContent = lang
            targetLangSelect.appendChild(opt2)
          }
        })
      }

    // Auto-detect language
      sourceLangSelect.addEventListener('change', () => {
        this.detectLanguage(text)
      })
    this.detectLanguage(text)
  }

  async detectLanguage(text) {
    try {
        const sourceLang = document.getElementById('sourceLang').value
        // Only auto-detect if set to auto
        let detectedLang = ''
        if (sourceLang === 'auto') {
          detectedLang = await this.callTranslationAPI(text, 'auto', 'en', true)
        } else {
          detectedLang = sourceLang
        }
        document.getElementById('detectedLang').textContent = detectedLang || 'Unknown'
    } catch (error) {
        document.getElementById('detectedLang').textContent = 'Detection failed'
    }
  }

  async translateText(text) {
      const sourceLang = document.getElementById('sourceLang').value
      const targetLang = document.getElementById('targetLang').value
      const translateBtn = document.getElementById('translateBtn')
      const resultDiv = document.getElementById('translationResult')
      const translatedTextDiv = document.getElementById('translatedText')

    translateBtn.disabled = true
    translateBtn.textContent = "Translating..."

    try {
        const translation = await this.callTranslationAPI(text, sourceLang, targetLang)

      translatedTextDiv.textContent = translation
      resultDiv.style.display = "block"
    } catch (error) {
      translatedTextDiv.textContent = "Translation failed. Please try again."
      resultDiv.style.display = "block"
    } finally {
      translateBtn.disabled = false
      translateBtn.textContent = "Translate"
    }
  }

  async callTranslationAPI(text, sourceLang, targetLang, detectOnly = false) {
    // Using a free translation service (you can replace with Google Translate API or others)
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`

    try {
      const response = await fetch(url)
      const data = await response.json()

      if (detectOnly) {
        return data.matches?.[0]?.source || "Unknown"
      }

      return data.responseData?.translatedText || "Translation not available"
    } catch (error) {
      throw new Error("Translation service unavailable")
    }
  }

  closeModal() {
    if (this.translationModal) {
      this.translationModal.remove()
      this.translationModal = null
    }

    // Send message to popup that selection is complete
    chrome.runtime.sendMessage({ action: "selectionComplete" })
  }

  cancelSelection() {
    this.cleanupSelection()
    chrome.runtime.sendMessage({ action: "selectionComplete" })
  }

  cleanupSelection() {
    this.isSelecting = false
    document.body.style.cursor = "default"

    if (this.overlay) {
      this.overlay.remove()
      this.overlay = null
    }

    if (this.selectionBox) {
      this.selectionBox.remove()
      this.selectionBox = null
    }

    this.removeEventListeners()
  }
}

// Initialize the translator
const translator = new SelectiveTranslator()
translator.init()
}
