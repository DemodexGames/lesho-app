let signData = [];
let lastTranslatedWord = "";

const wordInput = document.getElementById("wordInput");
const translateBtn = document.getElementById("translateBtn");
const clearBtn = document.getElementById("clearBtn");
const favoriteBtn = document.getElementById("favoriteBtn");
const clearFavoritesBtn = document.getElementById("clearFavoritesBtn");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");
const downloadBtn = document.getElementById("downloadBtn");

const resultContainer = document.getElementById("resultContainer");
const resultCount = document.getElementById("resultCount");
const keyboardContainer = document.getElementById("keyboardContainer");
const quickWordsContainer = document.getElementById("quickWords");
const favoritesContainer = document.getElementById("favoritesContainer");
const historyContainer = document.getElementById("historyContainer");
const exportArea = document.getElementById("exportArea");

const imageModal = document.getElementById("imageModal");
const modalOverlay = document.getElementById("modalOverlay");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");

const STORAGE_KEYS = {
  favorites: "lesho_favorites",
  history: "lesho_history"
};

const quickWords = [
  "HOLA",
  "ABNER",
  "AMOR",
  "MAMÁ",
  "PAPÁ",
  "GRACIAS",
  "FAMILIA",
  "ESCUELA",
  "HONDURAS",
  "ÑANDU"
];

const keyboardLetters = [
  "A", "B", "C", "CH", "D", "E", "F", "G", "H", "I",
  "J", "K", "L", "LL", "M", "N", "Ñ", "O", "P", "Q",
  "R", "RR", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

async function loadData() {
  try {
    const response = await fetch("data.json");
    signData = await response.json();
    renderQuickWords();
    renderKeyboard();
    renderFavorites();
    renderHistory();
  } catch (error) {
    console.error("Error cargando data.json:", error);
    showError("No se pudo cargar el archivo data.json");
  }
}

function normalizeText(text) {
  return text
    .toUpperCase()
    .trim()
    .replace(/[^A-ZÁÉÍÓÚÜÑ\s]/g, "");
}

function sanitizeFileName(text) {
  return text
    .toLowerCase()
    .replace(/á/g, "a")
    .replace(/é/g, "e")
    .replace(/í/g, "i")
    .replace(/ó/g, "o")
    .replace(/ú/g, "u")
    .replace(/ñ/g, "n")
    .replace(/\s+/g, "_");
}

function tokenizeLESHO(word) {
  const text = normalizeText(word).replace(/\s+/g, "");
  const tokens = [];
  let i = 0;

  while (i < text.length) {
    const twoChars = text.substring(i, i + 2);

    if (["CH", "LL", "RR"].includes(twoChars)) {
      tokens.push(twoChars);
      i += 2;
    } else {
      const char = text[i];
      const normalizedChar = char
        .replace("Á", "A")
        .replace("É", "E")
        .replace("Í", "I")
        .replace("Ó", "O")
        .replace("Ú", "U")
        .replace("Ü", "U");

      tokens.push(normalizedChar);
      i += 1;
    }
  }

  return tokens;
}

function findSign(token) {
  return signData.find(item => item.letter === token);
}

function renderResults(word) {
  const cleanedWord = normalizeText(word);
  const tokens = tokenizeLESHO(cleanedWord);

  if (!tokens.length) {
    showEmpty();
    lastTranslatedWord = "";
    return;
  }

  lastTranslatedWord = cleanedWord;
  saveToHistory(cleanedWord);

  const exportHeader = `
    <div class="export-header">
      <div class="export-badge">🇭🇳 LESHO • Lenguaje de Señas Hondureño</div>
      <h3>Palabra: ${cleanedWord}</h3>
      <p>Resultado del deletreo en el abecedario LESHO</p>
    </div>
  `;

  const cards = tokens.map((token, index) => {
    const sign = findSign(token);

    if (!sign) {
      return `
        <div class="sign-card">
          <div class="card-top">
            <div class="card-letter">${token}</div>
            <div class="card-type">Seña no encontrada</div>
          </div>
          <div class="card-body">
            <p>No existe información cargada para ${token}.</p>
          </div>
        </div>
      `;
    }

    return `
      <div class="sign-card">
        <div class="card-top">
          <div class="card-letter">${sign.letter}</div>
          <div class="card-type">Posición #${index + 1} en la palabra</div>
        </div>
        <div class="card-body">
          <p>${sign.description}</p>
          <img 
            src="${sign.image}" 
            alt="Seña ${sign.letter}" 
            class="zoomable-image"
            data-src="${sign.image}"
            data-caption="Seña ${sign.letter} • Posición #${index + 1}"
          />
        </div>
      </div>
    `;
  });

  const exportFooter = `
    <div class="export-footer">
      <p>✨ Hecho con cariño en Honduras por Abner & ChatGPT</p>
    </div>
  `;

  resultContainer.innerHTML = exportHeader + cards.join("") + exportFooter;
  resultCount.textContent = `${tokens.length} seña${tokens.length !== 1 ? "s" : ""}`;
  renderHistory();
  bindImageZoom();
}

function bindImageZoom() {
  const images = document.querySelectorAll(".zoomable-image");

  images.forEach(img => {
    img.addEventListener("click", () => {
      openModal(img.dataset.src, img.dataset.caption);
    });
  });
}

function openModal(src, caption) {
  modalImage.src = src;
  modalCaption.textContent = caption;
  imageModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  imageModal.classList.add("hidden");
  modalImage.src = "";
  modalCaption.textContent = "";
  document.body.style.overflow = "";
}

function showEmpty() {
  resultContainer.innerHTML = `
    <div class="empty-state">
      <div class="empty-icon">✋</div>
      <p>Escribe una palabra para ver sus señas en LESHO.</p>
    </div>
  `;
  resultCount.textContent = "0 señas";
}

function showError(message) {
  resultContainer.innerHTML = `
    <div class="empty-state">
      <div class="empty-icon">⚠️</div>
      <p>${message}</p>
    </div>
  `;
  resultCount.textContent = "Error";
}

function handleTranslate() {
  const value = wordInput.value;
  if (!value.trim()) {
    showEmpty();
    lastTranslatedWord = "";
    return;
  }
  renderResults(value);
}

function handleClear() {
  wordInput.value = "";
  showEmpty();
  lastTranslatedWord = "";
  wordInput.focus();
}

function getStoredArray(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

function setStoredArray(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function saveToHistory(word) {
  let history = getStoredArray(STORAGE_KEYS.history);
  history = history.filter(item => item !== word);
  history.unshift(word);
  history = history.slice(0, 8);
  setStoredArray(STORAGE_KEYS.history, history);
}

function saveFavorite() {
  const value = normalizeText(wordInput.value);
  if (!value) return;

  let favorites = getStoredArray(STORAGE_KEYS.favorites);

  if (!favorites.includes(value)) {
    favorites.unshift(value);
    favorites = favorites.slice(0, 12);
    setStoredArray(STORAGE_KEYS.favorites, favorites);
    renderFavorites();
  }
}

function clearFavorites() {
  localStorage.removeItem(STORAGE_KEYS.favorites);
  renderFavorites();
}

function clearHistory() {
  localStorage.removeItem(STORAGE_KEYS.history);
  renderHistory();
}

function renderFavorites() {
  const favorites = getStoredArray(STORAGE_KEYS.favorites);

  if (!favorites.length) {
    favoritesContainer.innerHTML = `
      <div class="empty-state">
        <p>No hay favoritas guardadas todavía.</p>
      </div>
    `;
    return;
  }

  favoritesContainer.innerHTML = favorites
    .map(word => `<button class="panel-item" data-word="${word}">⭐ ${word}</button>`)
    .join("");

  favoritesContainer.querySelectorAll(".panel-item").forEach(btn => {
    btn.addEventListener("click", () => {
      wordInput.value = btn.dataset.word;
      handleTranslate();
    });
  });
}

function renderHistory() {
  const history = getStoredArray(STORAGE_KEYS.history);

  if (!history.length) {
    historyContainer.innerHTML = `
      <div class="empty-state">
        <p>No hay historial todavía.</p>
      </div>
    `;
    return;
  }

  historyContainer.innerHTML = history
    .map(word => `<button class="panel-item" data-word="${word}">🕘 ${word}</button>`)
    .join("");

  historyContainer.querySelectorAll(".panel-item").forEach(btn => {
    btn.addEventListener("click", () => {
      wordInput.value = btn.dataset.word;
      handleTranslate();
    });
  });
}

function renderQuickWords() {
  quickWordsContainer.innerHTML = quickWords
    .map(word => `<button class="chip" data-word="${word}">${word}</button>`)
    .join("");

  quickWordsContainer.querySelectorAll(".chip").forEach(btn => {
    btn.addEventListener("click", () => {
      wordInput.value = btn.dataset.word;
      handleTranslate();
    });
  });
}

function renderKeyboard() {
  keyboardContainer.innerHTML = keyboardLetters
    .map(letter => `<button class="key-btn" data-letter="${letter}">${letter}</button>`)
    .join("");

  keyboardContainer.querySelectorAll(".key-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const current = wordInput.value.trim();
      wordInput.value = current + btn.dataset.letter;
      wordInput.focus();
    });
  });
}

async function downloadResultAsImage() {
  if (!lastTranslatedWord) {
    alert("Primero traduce una palabra antes de descargar.");
    return;
  }

  const originalText = downloadBtn.textContent;
  downloadBtn.disabled = true;
  downloadBtn.textContent = "⏳ Generando imagen...";

  try {
    const canvas = await html2canvas(exportArea, {
      backgroundColor: "#0b1220",
      scale: 2,
      useCORS: true,
      logging: false,
      scrollX: 0,
      scrollY: -window.scrollY
    });

    const link = document.createElement("a");
    link.download = `lesho_${sanitizeFileName(lastTranslatedWord)}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  } catch (error) {
    console.error("Error generando imagen:", error);
    alert("No se pudo generar la imagen. Verifica que las imágenes carguen correctamente.");
  } finally {
    downloadBtn.disabled = false;
    downloadBtn.textContent = originalText;
  }
}

translateBtn.addEventListener("click", handleTranslate);
clearBtn.addEventListener("click", handleClear);
favoriteBtn.addEventListener("click", saveFavorite);
clearFavoritesBtn.addEventListener("click", clearFavorites);
clearHistoryBtn.addEventListener("click", clearHistory);
downloadBtn.addEventListener("click", downloadResultAsImage);

wordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleTranslate();
  }

  if (e.key === "Escape") {
    closeModal();
  }
});

closeModalBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

loadData();
// Registrar Service Worker para PWA
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js")
      .then((registration) => {
        console.log("Service Worker registrado:", registration.scope);
      })
      .catch((error) => {
        console.error("Error registrando Service Worker:", error);
      });
  });
}