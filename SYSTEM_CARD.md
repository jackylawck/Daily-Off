# 🗂️ System Card: Daily Offline (離線日誌)
> **System Architecture & Governance Declaration / 系統架構與治理聲明**

---

## 🌐 English Version

### 1. Executive Overview
- **System Name**: Daily Offline (離線日誌)
- **Developer / Maintainer**: Jacky Law (羅子淇)
- **System Type**: Pure Client-Side Progressive Web Application (PWA) / Anti-AI Privacy Shield
- **Primary Objective**: To provide a zero-knowledge, encrypted, air-gapped personal journaling sanctuary that prevents personal data from being harvested for LLM / GPAI model training.

### 2. Architectural Boundary & Non-AI Declaration
> **Why a System Card for a Non-AI Application?**
> In the modern AI ecosystem, personal data exposure occurs primarily at the input/ingestion layer. Daily Offline serves as an **Anti-Scraping / Anti-Ingestion Air-Gapped Sandbox**. While Daily Offline does NOT contain embedded machine learning models, it plays a critical role in **AI Risk Governance** by acting as a protective barrier against unauthorized AI data collection.

### 3. Key Specifications
- **Data Persistence**: LocalStorage / IndexedDB (Fully Encrypted with AES-GCM-256).
- **Network Boundaries**: Air-Gapped (`connect-src 'none'`; no external HTTP requests permitted).
- **Access Control**: Master password key derivation via PBKDF2 (600,000 iterations).

### 4. Out-of-Scope Uses & Limitations
- **Not for Multi-User Collaboration**: Purely local; no real-time cloud synchronization.
- **No Cloud Password Recovery**: The system has zero backdoors. Loss of the Master Password results in permanent data unrecoverability.

---

## 🇭🇰 中文版本 (Traditional Chinese)

### 1. 系統概述
- **系統名稱**：離線日誌 Daily Offline
- **開發者 / 維護者**：羅子淇 Jacky Law
- **系統類型**：純前端漸進式 Web 應用 (PWA) / 防 AI 採集隱私屏障
- **核心目標**：提供一個零知識、純本地加密且完全隔絕網絡的個人隨筆空間，防止個人私密文字被大型語言模型 (LLM / GPAI) 抓取進行 AI 模型訓練。

### 2. 系統邊界與非 AI 屬性聲明
> **為什麼無 AI 的項目需要 System Card？**
> 在現代 AI 治理生態中，個人隱私洩漏主要發生於資料收集與輸入端。「離線日誌」被定位為**「反 AI 數據採集沙盒 (Anti-AI Scraping Sandbox)」**。雖然本系統本身不包含任何機器學習模型，但它在 **AI 風險管治 (AI Risk Governance)** 中扮演著關鍵角色——作為抵禦未經授權之 AI 爬蟲與模型訓練採集的防護屏障。

### 3. 技術規格
- **數據持久化**：LocalStorage / IndexedDB (全量 AES-GCM-256 本地加密)。
- **網絡邊界**：網路隔離 (`connect-src 'none'`；禁止任何外部 HTTP 請求)。
- **存取控制**：主密碼經 PBKDF2 (600,000 次疊代) 即時衍生解密金鑰。

### 4. 適用邊界與限制
- **不適用於多用戶協作**：純本地架構，無雲端即時同步功能。
- **無雲端密碼復原**：本系統無任何後門；若遺失主密碼，資料將無法復原。
