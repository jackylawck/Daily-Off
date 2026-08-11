# 🤖 AI Safety, Legal Alignment & Anti-Scraping Compliance
> **AI 安全、法律邊界與防採集合規聲明**
> **Daily Offline | 離線日誌**

---

## 🌐 English Version

### 1. Role in the AI Governance Ecosystem
Under international AI governance frameworks (including the **EU AI Act**, **ISO/IEC 42001 AIMS**, and **IAPP AIGP Body of Knowledge**), organization-wide privacy relies heavily on preventing confidential human thought from inadvertently entering model training pipelines.

Daily Offline acts as an **Air-Gapped Privacy Sanctuary**:
- **Zero AI Model Training Ingestion**: Data typed into Daily Offline never passes through cloud APIs or web crawlers.
- **EU AI Act Exemption**: As a pure offline client-side utility with no automated decision-making or machine learning models, Daily Offline falls outside High-Risk / GPAI obligations while empowering end-users to maintain autonomy over their personal data.

### 2. Anti-AI Scraping Controls
- **Content Security Policy (`connect-src 'none'`)**: Prevents browser extensions or embedded scripts from exfiltrating plaintext notes to external LLM endpoints.
- **Client-Side PBKDF2/AES-GCM**: Ensures that even if an AI crawler scans the device's physical storage, the stored data appears as random ciphertext.

---

## 🇭🇰 中文版本 (Traditional Chinese)

### 1. 在 AI 管治生態中的定位
在國際 AI 治理框架（包括 **歐盟 EU AI Act**、**ISO/IEC 42001 人工智慧管理系統** 及 **IAPP AIGP 知識體系**）中，企業與個人隱私防禦的核心關鍵在於「防止私密思考於無意間流入模型訓練流水線」。

「離線日誌」被定位為 **「隔絕式隱私避風港 (Air-Gapped Privacy Sanctuary)」**：
- **阻絕 AI 模型訓練採集**：輸入本系統的文字絕不經過任何雲端 API 或網絡爬蟲。
- **EU AI Act 監管邊界**：作為不具備自動化決策或機器學習模型之純離線工具，本系統免除高風險 AI 監管義務，同時為用戶提供抵抗未經授權 AI 數據抓取的防禦能力。

### 2. 防範 AI 數據採集機制
- **嚴格 CSP (`connect-src 'none'`)**：防止瀏覽器擴充功能或惡意腳本將明文日記偷偷傳輸至外部 LLM 伺服器。
- **本地 AES-GCM 加密**：確保即便 AI 爬蟲離線掃描裝置實體硬碟，讀取到的數據亦僅為不可解讀的密文。
