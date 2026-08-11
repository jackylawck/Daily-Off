# 📊 Data Governance & Privacy Standard
> **數據管治與隱私合規標準**
> **Daily Offline | 離線日誌**

---

## 🌐 English Version

### 1. Regulatory Alignment Matrix
Daily Offline is engineered with a **Privacy-by-Design and Privacy-by-Default** methodology:

| Regulation / Standard | Compliance Status | Implementation Mechanism |
| :--- | :--- | :--- |
| **EU GDPR** | **Exempt / Native Compliance** | Zero-Data Persistence on servers. Meets Art. 5 (Data Minimization) & Art. 25 (Data Protection by Design). |
| **HK PDPO (Cap. 486)** | **Fully Aligned** | DPP1 (Data Collection), DPP2 (Accuracy & Retention), DPP4 (Security of Personal Data). |
| **ISO/IEC 27001:2022** | **Compliant Architecture** | A.8.24 (Use of Cryptography), A.8.12 (Data Leakage Prevention). |
| **ISO/IEC 27701:2019** | **PIMS Alignment** | PII processing occurs strictly within the user's local RAM/encrypted storage boundary. |

### 2. Data Subject Rights (SAR Handling)
Because Daily Offline maintains **zero servers, zero analytics, and zero remote databases**, the maintainer possesses zero user data. 
- **Right to Access / Export**: Users can export their encrypted payload via local JSON backup at any time.
- **Right to Erasure (Right to be Forgotten)**: Users can permanently purge all data locally using the "Clear Vault & Reset" function or browser storage clear.

---

## 🇭🇰 中文版本 (Traditional Chinese)

### 1. 法規與國際標準對照表
「離線日誌」採用 **預設隱私與設計即隱私 (Privacy by Design & Default)** 架構開發：

| 法規 / 國際標準 | 合規狀態 | 技術實現機制 |
| :--- | :--- | :--- |
| **歐盟 GDPR** | **原生完全合規 / 免除義務** | 無遠端伺服器儲存。完全符合第 5 條（數據最小化）與第 25 條（設計即隱私）。 |
| **香港 PDPO (第 486 章)** | **高度契合** | 恪守保障資料原則：DPP1（收集）、DPP2（保留期限）、DPP4（資料保安）。 |
| **ISO/IEC 27001:2022** | **控制項對齊** | A.8.24（密碼學使用）與 A.8.12（資料洩漏防護）。 |
| **ISO/IEC 27701:2019** | **隱私資訊管理** | 個人可識別資訊 (PII) 之處理僅限於用戶本地 RAM 與加密儲存邊界內。 |

### 2. 當事人權利處理 (SAR)
由於本系統**不設任何伺服器、無追蹤機制亦無遠端資料庫**，開發者完全無法存取用戶的任何資料：
- **查閱與可攜權**：用戶可隨時透過本地選單匯出加密 JSON 備份檔。
- **被遺忘權 (刪除權)**：用戶點擊「清空數據並重新開始」或清除瀏覽器快取，即可於本地端永久銷毀所有資料。
