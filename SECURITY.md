# 🛡️ Security Policy & Vulnerability Disclosure
> **資安政策與漏洞通報規範**
> **Daily Offline | 離線日誌**

---

## 🌐 English Version

### 1. Security Architecture & Commitments
Daily Offline is designed as a **Zero-Knowledge, Zero-Trust, Pure Local Application**. We adhere to the highest web cryptographic standards:
- **Client-Side Encryption**: AES-GCM (256-bit) powered by Web Crypto API.
- **Key Derivation**: PBKDF2 with 600,000 iterations (SHA-256) aligned with OWASP 2023/2024 recommendations.
- **Strict Network Isolation**: Enforced via Content Security Policy (`connect-src 'none'`).
- **No Remote Infrastructure**: Zero analytics, zero third-party telemetry, zero cloud databases.

### 2. Supported Versions
| Version | Supported | Maintenance Status |
| :--- | :--- | :--- |
| **v2.x (Current)** | ✅ Yes | Actively Maintained |
| < v2.0 | ❌ No | Deprecated |

### 3. Reporting a Vulnerability
We welcome security researchers and privacy auditors to review our codebase. If you discover a security vulnerability (e.g., CSP bypass, cryptographic weakness, memory exposure):

1. **DO NOT** open a public GitHub issue.
2. Please submit your advisory via **GitHub Private Vulnerability Reporting** or contact the maintainer directly at `jackylawck@gmail.com`.
3. Include detailed steps to reproduce, browser version, and proof-of-concept (PoC).
4. We acknowledge submissions within **48 hours** and aim to release a patch within **7 business days**.

---

## 🇭🇰 中文版本 (Traditional Chinese)

### 1. 資安架構與承諾
「離線日誌 Daily Offline」採用**零知識（Zero-Knowledge）、零信任（Zero-Trust）純本地架構**，恪守國際頂級網頁密碼學規範：
- **用戶端原生加密**：採用 Web Crypto API 之 AES-GCM (256-bit) 高強度加密。
- **密鑰衍生標準**：符合 OWASP 建議之 PBKDF2 (SHA-256) 600,000 次疊代計算。
- **嚴格網絡隔離**：透過 Content Security Policy 強制設定 `connect-src 'none'`，完全切斷聯網能力。
- **無遠端基礎設施**：零追蹤碼、零第三方 SDK、零雲端資料庫。

### 2. 版本支援狀態
| 版本 | 支援狀態 | 維護說明 |
| :--- | :--- | :--- |
| **v2.x (目前版本)** | ✅ 支援中 | 積極維護與更新 |
| < v2.0 | ❌ 已停止 | 建議升級至最新版本 |

### 3. 漏洞通報流程 (Responsible Disclosure)
我們歡迎資安研究員與隱私審計師對原始碼進行獨立審查。若發現任何安全性漏洞（如 CSP 繞過風險、密碼學瑕疵或記憶體洩漏）：

1. **請勿** 直接建立公開的 GitHub Issue。
2. 請透過 **GitHub 私人漏洞通報功能 (Private Vulnerability Reporting)** 發送報告，或電郵至 `jackylawck@gmail.com`。
3. 報告請附上完整重現步驟、瀏覽器版本及 PoC 驗證代碼。
4. 我們將於 **48 小時內** 確認收到通報，並預計於 **7 個工作天內** 完成修復與發布。
