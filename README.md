# 🔒 離線日誌 Daily Offline
> **隨心書寫，靜思細想。 | Write Freely, Think Quietly.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Security: Strict CSP](https://img.shields.io/badge/CSP-Strict%20'connect--src%20none'-green.svg)](#-security-architecture)
[![Encryption: AES-GCM-256](https://img.shields.io/badge/Encryption-AES--GCM--256-orange.svg)](#-security-architecture)
[![PWA: Supported](https://img.shields.io/badge/PWA-Supported-purple.svg)](#-features)

**離線日誌 Daily Offline** 是一款基於純前端、零知識架構（Zero-Knowledge Architecture）的極致安全個人日記與隨筆 PWA 應用。

在 AI 掃描與數據監控無所不在的時代，我們為你打造一座完全屬於你自己的數位避風港。數據 100% 存在你的瀏覽器中，無伺服器、零上雲、連聯網能力都沒有。

**Daily Offline** is a ultra-secure, zero-knowledge personal journaling PWA application built purely on client-side technology. Designed as an anti-AI privacy sanctuary, your thoughts stay 100% encrypted in your local device with absolute zero cloud transmission.

---

## ✨ 核心特色 (Key Features)

- 🔒 **軍規級純本地加密 (Enterprise Encryption)**：採用 Web Crypto API 原生 **AES-GCM (256-bit)** 加密，配合 **PBKDF2 (600,000 次疊代)** 密碼衍生，即使設備遺失，內容也無法被暴力破解。
- 🛡️ **金融級 CSP 網絡隔離 (Network Isolation)**：嚴格設定 `Content-Security-Policy: connect-src 'none'`，從架構上完全封鎖網絡傳輸能力，杜絕任何第三方 SDK 或追蹤碼。
- 📱 **開箱即用 PWA (Offline Ready)**：支援安裝至 iOS / Android / Desktop，無須透過 App Store 下載，離線開啟、秒速載入。
- 🔑 **零知識隱私權 (Zero-Knowledge Privacy)**：無「忘記密碼」機制，無後門伺服器。密鑰完全由你的主密碼在本地即時衍生，連開發者都無法存取你的日誌。
- ⌨️ **極致快捷與無障礙設計 (Shortcuts & A11y)**：支援 `Ctrl + Enter` 快速儲存、`Esc` 鍵緊急手動鎖定、錯誤左右震動回饋，並符合 WCAG 無障礙規範。
- 📦 **安全備份與遷移 (Encrypted Backup)**：支援一鍵匯出/匯入加密 JSON 備份檔，資料主權完全掌握在自己手中。

---

## 🛡️ 合規與管治聲明 (Compliance & Governance)

Daily Offline is engineered with a **"Privacy by Design"** philosophy, adhering to the highest standards of data protection and security governance.

### 🔐 資安架構 (Security Architecture)
- **Zero-Knowledge & Zero-Trust**: No credentials, entries, or logs are ever persisted to disk unencrypted.
- **Strict CSP Isolation**: `frame-ancestors 'none'` prevents Clickjacking; `connect-src 'none'` enforces complete network isolation.
- **Idle Session Lockdown**: Automatic lock after 5 minutes of inactivity. Supports `Esc` shortcut panic lock.
- **Robust Key Derivation**: PBKDF2 600,000 iterations (OWASP 2023 Guidelines) with AES-GCM-256 bit encryption.

### ⚖️ 法規與國際標準對照 (Regulatory Alignment)
- **GDPR (EU)**: Fully compliant with **Data Minimization** and **Storage Limitation**. Exempt from SAR (Subject Access Request) obligations and cross-border transfer restrictions due to Zero-Data Persistence.
- **ISO/IEC 27001**: Meets **A.8.24** (Use of Cryptography) and **A.8.12** (Data Leakage Prevention).
- **ISO/IEC 42001 (AIMS)**: Serves as an air-gapped sandbox to prevent personal journal scraping for AI model training.
- **IAPP / AIGP**: Exemplifies **Privacy by Design** and **Default** at the foundational architecture level.
- **OWASP Top 10**: Comprehensive mitigation against XSS, Clickjacking, Brute-force, and Information Disclosure.

---

## 🛠️ 技術架構 (Tech Stack)

- **Frontend**: Vanilla HTML5 / CSS3 / Modern JavaScript (ES6+)
- **Security & Crypto**: Web Crypto API (PBKDF2 SHA-256, AES-GCM-256)
- **Storage**: Browser LocalStorage / IndexedDB
- **Offline & PWA**: Service Workers & Web App Manifest

---

## 📄 開源授權 (License)

本專案採用 [MIT License](LICENSE) 條款完全開源，歡迎自由部署、使用與貢獻代碼。

Licensed under the [MIT License](LICENSE). Feel free to deploy, use, and contribute.
