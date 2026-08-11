# 🤖 AI Safety, Legal Alignment & Anti-Scraping Compliance
> **AI 安全、法律邊界與防採集合規聲明**
> **Daily Offline | 離線日誌**

---

## 🌐 English Version

### 1. Executive Summary & Regulatory Boundary
Under international AI governance frameworks—including the **EU AI Act**, **ISO/IEC 42001 (Artificial Intelligence Management System - AIMS)**, and the **IAPP AIGP Body of Knowledge**—organization-wide and personal privacy relies heavily on preventing confidential human thoughts and trade secrets from inadvertently entering general-purpose AI (GPAI) model training pipelines.

Daily Offline is engineered specifically as an **Air-Gapped Anti-AI Privacy Sanctuary**:
- **Zero AI Model Training Ingestion**: Data typed into Daily Offline never passes through external cloud APIs, telemetry services, or web crawlers.
- **EU AI Act Exemption Boundary**: As a purely client-side offline utility containing no automated decision-making systems or embedded machine learning models, Daily Offline falls outside High-Risk or GPAI regulatory obligations while empowering end-users to maintain absolute sovereignty over their personal data.

### 2. Anti-AI Scraping Controls & Controls Alignment
- **Strict Content Security Policy (`connect-src 'none'`)**: Enforces browser-level network isolation, preventing malicious browser extensions, injected scripts, or web scrapers from exfiltrating plaintext notes to external LLM endpoints.
- **Client-Side PBKDF2 / AES-GCM-256 Encryption**: Ensures that even if an AI crawler or automated disk scanner accesses the local storage layer, the data remains unintelligible ciphertext.
- **Zero Third-Party Dependencies**: Eliminates supply chain risks where third-party SDKs silently collect telemetry for AI model optimization.

---

## 🇭🇰 中文版本 (Traditional Chinese)

### 1. 執行摘要與監管邊界聲明
在國際 AI 治理與法律框架（包括 **歐盟 EU AI Act**、**ISO/IEC 42001 人工智慧管理系統** 及 **IAPP AIGP 知識體系**）中，企業與個人隱私防禦的核心關鍵在於「防止敏感數據於無意間流入泛用型 AI 模型 (GPAI) 的訓練流水線」。

「離線日誌 Daily Offline」被定位為 **「隔絕式反 AI 採集隱私避風港 (Air-Gapped Anti-AI Privacy Sanctuary)」**：
- **阻絕 AI 模型訓練採集**：輸入本系統的任何文字絕不經過外部雲端 API、遠端監測或網路爬蟲。
- **EU AI Act 監管邊界**：作為不具備自動化決策、演算法推薦或機器學習模型之純用戶端離線工具，本系統免除高風險 AI 或 GPAI 之監管負擔，同時為使用者提供抵禦未經授權 AI 數據抓取的實體防護屏障。

### 2. 防範 AI 數據採集控制項 (Anti-AI Scraping Controls)
- **嚴格 Content Security Policy (`connect-src 'none'`)**：於瀏覽器層級強制執行網路隔離，徹底防止惡意瀏覽器擴充功能或注入腳本將明文日記傳輸至外部 LLM 端點。
- **用戶端 PBKDF2 / AES-GCM-256 加密**：確保即便 AI 爬蟲或自動化硬碟掃描器存取本地儲存空間，讀取到的數據亦僅為無法解讀的高強度密文。
- **零第三方依賴庫 (Zero Dependency)**：杜絕第三方 SDK 偷偷擷取使用者行為數據用於 AI 模型優化之供應鏈風險。

```
