const i18n = {
    // 1. 中英雙語對照 (Bilingual)
    bilingual: {
        appTitle: "🔒 離線日誌 Daily Offline",
        slogan: "隨心書寫，靜思細想。 Write Freely, Think Quietly.",
        unlockTitle: "解鎖日誌本 Unlock Journal",
        masterKeyPlaceholder: "輸入主密碼 Enter Master Password",
        unlockBtn: "解鎖 Unlock Daily Offline",
        resetToggleText: "❓ 忘記主密碼？ Forgot Master Password?",
        resetWarningText: "⚠️ 聲明與警告：由於採純本地零知識加密，遺失主密碼無法復原數據。重置將會「永久銷毀」此瀏覽器內的所有加密日誌。\nWarning: Zero-knowledge local encryption. Master key loss is permanent. Reset will purge all entries.",
        resetBtnText: "🗑️ 清空數據並重新開始 Clear Vault & Reset",
        resetConfirmText: "⚠️ 最終確認：確定要永久銷毀目前日誌本內的所有資料並重置嗎？\nFinal Confirmation: Permanently purge all journal data?",
        resetSuccessText: "舊數據已成功銷毀！舊資料已清空。\nExisting vault purged successfully!",
        addTitle: "撰寫新日誌 New Journal Entry",
        noteTitlePlaceholder: "日誌標題 Title (例如: 深夜隨想)",
        noteContentPlaceholder: "在此隨心傾訴與紀錄... Write your thoughts freely here...",
        addBtn: "安全加密鎖入日誌本 Encrypt & Save Entry",
        moodQuiet: "🌿 平靜 Quiet",
        moodThoughtful: "💡 思考 Thoughtful",
        moodJoyful: "☀️ 晴朗 Joyful",
        moodReflective: "🌧️ 沉思 Reflective",
        listTitle: "已儲存日誌 Saved Entries",
        searchPlaceholder: "搜尋標題或內文 Search...",
        emptyList: "日誌本目前是空的或無搜尋結果。 Vault is empty or no search results.",
        backupTitle: "數據與安全管理 Data & Security",
        changePassBtn: "🔑 修改主密碼 Change Master Password",
        exportBtn: "匯出加密 JSON 備份檔 Export Encrypted Backup",
        importTitle: "還原舊 JSON 備份檔 Restore JSON Backup",
        chooseFileBtn: "📁 選擇 JSON 備份檔案 Select Backup File",
        importBtn: "匯入並覆蓋本地資料 Import & Overwrite",
        noticeTitle: "🔒 安全與隱私聲明 Security & Governance",
        noticePoint1: "零知識架構：數據採 AES-GCM 原生加密，僅存於本地，零上雲、防 AI 掃描。\nZero-Knowledge: Local AES-GCM encryption only. Zero cloud & Anti-AI.",
        noticePoint2: "責任與復原：無「忘記密碼」功能。主密碼遺失將無法復原，請定期備份。\nAccountability: No password recovery. Loss is permanent.",
        noticePoint3: "自動鎖定：為防範窺探，閒置 5 分鐘後將自動鎖定日誌本。\nAuto-Lock: Locks automatically after 5 mins of inactivity.",
        footerNotice: "純本地 AES-GCM 加密 ‧ 隨心書寫，靜思細想。 Write Freely, Think Quietly.",
        statusUnlocked: "🔓 日誌本已解鎖 Journal Unlocked",
        lockBtn: "手動鎖定 Lock Journal",
        actionCopy: "複製內文 Copy",
        actionDelete: "刪除 Delete",
        toastCopied: "日誌已複製到剪貼簿！ Copied to clipboard!",
        toastAdded: "日誌已安全加密儲存！ Journal entry saved!",
        toastDeleted: "日誌已刪除！ Entry deleted!",
        toastLocked: "因閒置逾時，日誌本已自動鎖定 Auto-locked due to inactivity.",
        toastPassChanged: "主密碼已順利變更！ Password changed!",
        alertEmptyPass: "請輸入主密碼！ Please enter master password!",
        alertWrongPass: "主密碼錯誤或數據已被損毀！ Incorrect password or corrupted data!",
        alertFillRequired: "請填寫日誌標題與內容！ Title and content are required!",
        alertVerifyExport: "請輸入當前主密碼以驗證匯出 / Enter Master Password:",
        alertSelectFile: "請先選擇要匯入的備份檔案！ Please select a backup file!",
        alertImportConfirm: "⚠️ 警告：匯入將會覆蓋當前所有日誌，確定要繼續嗎？\nWARNING: Importing overwrites all current local entries. Continue?",
        alertDeleteConfirm: "確定要永久刪除這篇日誌嗎？ Delete this entry?",
        promptNewPass: "請輸入新的主密碼 Enter new Master Password:",
        promptConfirmPass: "請再次輸入新的主密碼以進行確認 Confirm new Master Password:",
        alertPassMismatch: "兩次輸入的新密碼不一致！ Passwords do not match!",
        alertNoDataExport: "沒有可匯出的數據！ No data to export!"
    },
    // 2. 全繁體中文 (Traditional Chinese)
    zh: {
        appTitle: "🔒 離線日誌",
        slogan: "隨心書寫，靜思細想。",
        unlockTitle: "解鎖日誌本",
        masterKeyPlaceholder: "輸入主密碼（請務必牢記，遺失無法復原）",
        unlockBtn: "解鎖離線日誌",
        resetToggleText: "❓ 忘記主密碼？（展開重置選項）",
        resetWarningText: "⚠️ 聲明與警告：由於採純本地零知識加密，遺失主密碼無法復原數據。重置將會「永久銷毀」此瀏覽器內的所有加密日誌，並允許你重新建立新的日誌本。",
        resetBtnText: "🗑️ 清空舊數據並重新開始",
        resetConfirmText: "⚠️ 最終確認：確定要永久銷毀目前日誌本內的所有資料並重置嗎？此操作不可逆！",
        resetSuccessText: "舊數據已成功銷毀！現在你可以輸入全新的主密碼開始使用。",
        addTitle: "撰寫新日誌",
        noteTitlePlaceholder: "日誌標題 (例如: 深夜隨想)",
        noteContentPlaceholder: "在此隨心傾訴與紀錄...",
        addBtn: "安全加密鎖入日誌本",
        moodQuiet: "🌿 平靜",
        moodThoughtful: "💡 思考",
        moodJoyful: "☀️ 晴朗",
        moodReflective: "🌧️ 沉思",
        listTitle: "已儲存日誌",
        searchPlaceholder: "搜尋標題或內文...",
        emptyList: "你的離線日誌本目前是空的或無搜尋結果。",
        backupTitle: "數據與安全管理",
        changePassBtn: "🔑 修改主密碼",
        exportBtn: "匯出加密 JSON 備份檔",
        importTitle: "還原舊 JSON 備份檔",
        chooseFileBtn: "📁 選擇 JSON 備份檔案",
        importBtn: "匯入並覆蓋本地資料",
        noticeTitle: "🔒 安全與隱私聲明",
        noticePoint1: "零知識架構：數據採 AES-GCM 原生加密，僅存於本地，零上雲、防 AI 掃描。",
        noticePoint2: "責任與復原：無「忘記密碼」功能。主密碼遺失將無法復原，請定期備份。",
        noticePoint3: "自動鎖定：為防範窺探，閒置 5 分鐘後將自動鎖定日誌本。",
        footerNotice: "純本地 AES-GCM 加密 ‧ 隨心書寫，靜思細想。",
        statusUnlocked: "🔓 日誌本已解鎖",
        lockBtn: "手動鎖定",
        actionCopy: "複製內文",
        actionDelete: "刪除",
        toastCopied: "日誌已複製到剪貼簿！",
        toastAdded: "日誌已安全加密儲存！",
        toastDeleted: "日誌已刪除！",
        toastLocked: "因閒置逾時，日誌本已自動鎖定",
        toastPassChanged: "主密碼已順利變更！下次請使用新密碼解鎖。",
        alertEmptyPass: "請輸入主密碼！",
        alertWrongPass: "主密碼錯誤或數據已被損毀！",
        alertFillRequired: "請填寫日誌標題與內容！",
        alertVerifyExport: "請輸入當前主密碼以驗證匯出：",
        alertSelectFile: "請先選擇要匯入的備份檔案！",
        alertImportConfirm: "⚠️ 警告：匯入將會覆蓋當前所有日誌，確定要繼續嗎？",
        alertDeleteConfirm: "確定要永久刪除這篇日誌嗎？",
        promptNewPass: "請輸入新的主密碼：",
        promptConfirmPass: "請再次輸入新的主密碼以進行確認：",
        alertPassMismatch: "兩次輸入的新密碼不一致！",
        alertNoDataExport: "沒有可匯出的數據！"
    },
    // 3. 全英文 (English)
    en: {
        appTitle: "🔒 Daily Offline",
        slogan: "Write Freely, Think Quietly.",
        unlockTitle: "Unlock Journal",
        masterKeyPlaceholder: "Enter Master Password (Cannot be recovered)",
        unlockBtn: "Unlock Daily Offline",
        resetToggleText: "❓ Forgot Master Password? (Expand reset options)",
        resetWarningText: "⚠️ Disclaimer & Warning: Due to pure local zero-knowledge encryption, data cannot be recovered if the key is lost. Resetting will PERMANENTLY DESTROY all encrypted journals in this browser.",
        resetBtnText: "🗑️ Clear Local Vault & Start Fresh",
        resetConfirmText: "⚠️ Final Confirmation: Are you sure you want to permanently purge all existing journals? This operation is IRREVERSIBLE!",
        resetSuccessText: "Existing vault purged successfully! You can now set a new Master Password.",
        addTitle: "New Entry",
        noteTitlePlaceholder: "Journal Title (e.g., Midnight Reflections)",
        noteContentPlaceholder: "Write your thoughts freely here...",
        addBtn: "Encrypt & Save Entry",
        moodQuiet: "🌿 Quiet",
        moodThoughtful: "💡 Thoughtful",
        moodJoyful: "☀️ Joyful",
        moodReflective: "🌧️ Reflective",
        listTitle: "Journal Entries",
        searchPlaceholder: "Search title or content...",
        emptyList: "Your journal is empty or no search results found.",
        backupTitle: "Data & Security Management",
        changePassBtn: "🔑 Change Master Password",
        exportBtn: "Export Encrypted Backup",
        importTitle: "Restore JSON Backup",
        chooseFileBtn: "📁 Select JSON Backup File",
        importBtn: "Import & Overwrite",
        noticeTitle: "🔒 Privacy & Security Governance",
        noticePoint1: "Zero-Knowledge: Local AES-GCM encryption only. Zero cloud transmission & Anti-AI.",
        noticePoint2: "Accountability: No password reset. Master Password loss is permanent. Backup often.",
        noticePoint3: "Auto-Lock: Journal locks automatically after 5 minutes of inactivity.",
        footerNotice: "Pure Local AES-GCM Encryption. Write Freely, Think Quietly.",
        statusUnlocked: "🔓 Journal Unlocked",
        lockBtn: "Lock Journal",
        actionCopy: "Copy",
        actionDelete: "Delete",
        toastCopied: "Content copied to clipboard!",
        toastAdded: "Journal entry securely saved!",
        toastDeleted: "Journal entry deleted!",
        toastLocked: "Journal auto-locked due to inactivity.",
        toastPassChanged: "Master Password successfully changed!",
        alertEmptyPass: "Please enter master password!",
        alertWrongPass: "Incorrect password or corrupted data!",
        alertFillRequired: "Title and content are required!",
        alertVerifyExport: "Enter Master Password to verify export:",
        alertSelectFile: "Please select a backup file!",
        alertImportConfirm: "⚠️ WARNING: Importing overwrites all current local entries. Continue?",
        alertDeleteConfirm: "Are you sure you want to permanently delete this entry?",
        promptNewPass: "Enter your new Master Password:",
        promptConfirmPass: "Confirm your new Master Password:",
        alertPassMismatch: "Passwords do not match!",
        alertNoDataExport: "No data to export!"
    }
};

let currentLang = localStorage.getItem('daily_offline_lang') || 'bilingual';
let currentKey = null;
let inactivityTimer;
window.vaultData = [];
const LOCK_TIMEOUT = 5 * 60 * 1000;

function t(key) { return i18n[currentLang][key]; }

function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('daily_offline_lang', lang);
    
    document.getElementById('btn-bilingual').classList.toggle('active', lang === 'bilingual');
    document.getElementById('btn-zh').classList.toggle('active', lang === 'zh');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    
    document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = t(el.getAttribute('data-i18n')));
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => el.placeholder = t(el.getAttribute('data-i18n-placeholder')));
    
    const fileInput = document.getElementById('import-file');
    if (!fileInput.files[0]) {
        document.getElementById('file-label').textContent = t('chooseFileBtn');
    }
    if (currentKey) renderList();
}

function updateFileName() {
    const fileInput = document.getElementById('import-file');
    const fileLabel = document.getElementById('file-label');
    if (fileInput.files[0]) {
        fileLabel.textContent = `📄 ${fileInput.files[0].name}`;
    } else {
        fileLabel.textContent = t('chooseFileBtn');
    }
}

function resetTimer() {
    clearTimeout(inactivityTimer);
    if (currentKey) {
        inactivityTimer = setTimeout(() => {
            lockVault();
            showToast(t('toastLocked'));
        }, LOCK_TIMEOUT);
    }
}

function lockVault() {
    currentKey = null;
    window.vaultData = [];
    document.getElementById('master-key').value = '';
    document.getElementById('search-input').value = '';
    document.getElementById('auth-card').style.display = 'block';
    document.getElementById('notice-section').style.display = 'block';
    document.getElementById('vault-content').style.display = 'none';
    clearTimeout(inactivityTimer);
}

function resetVault() {
    if (confirm(t('resetConfirmText'))) {
        localStorage.removeItem('daily_offline_data');
        alert(t('resetSuccessText'));
        location.reload();
    }
}

async function deriveKey(password, salt) {
    const enc = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveKey"]);
    return crypto.subtle.deriveKey(
        { name: "PBKDF2", salt, iterations: 600000, hash: "SHA-256" },
        keyMaterial, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]
    );
}

async function encryptData(data, password) {
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const key = await deriveKey(password, salt);
    const ciphertext = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(JSON.stringify(data)));
    return { salt: Array.from(salt), iv: Array.from(iv), cipher: Array.from(new Uint8Array(ciphertext)) };
}

async function decryptData(encryptedObj, password) {
    const salt = new Uint8Array(encryptedObj.salt);
    const iv = new Uint8Array(encryptedObj.iv);
    const cipher = new Uint8Array(encryptedObj.cipher);
    const key = await deriveKey(password, salt);
    const decrypted = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, cipher);
    return JSON.parse(new TextDecoder().decode(decrypted));
}

async function unlockVault() {
    const masterPass = document.getElementById('master-key').value;
    if (!masterPass) return showToast(t('alertEmptyPass'));

    document.getElementById('unlock-btn').textContent = "⌛...";
    try {
        const storedData = localStorage.getItem('daily_offline_data');
        if (storedData) {
            window.vaultData = await decryptData(JSON.parse(storedData), masterPass);
        } else {
            window.vaultData = [];
        }
        currentKey = masterPass;
        document.getElementById('auth-card').style.display = 'none';
        document.getElementById('notice-section').style.display = 'none';
        document.getElementById('vault-content').style.display = 'block';
        renderList();
        resetTimer();
    } catch (e) {
        alert(t('alertWrongPass'));
    }
    document.getElementById('unlock-btn').textContent = t('unlockBtn');
}

async function changeMasterPassword() {
    const newPass = prompt(t('promptNewPass'));
    if (!newPass) return;

    const confirmPass = prompt(t('promptConfirmPass'));
    if (newPass !== confirmPass) {
        return alert(t('alertPassMismatch'));
    }

    currentKey = newPass;
    await saveToStorage();
    showToast(t('toastPassChanged'));
}

async function addEntry() {
    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;
    const mood = document.getElementById('note-mood').value;

    if (!title || !content) return alert(t('alertFillRequired'));

    const timestamp = new Date().toLocaleString(currentLang === 'en' ? 'en-US' : 'zh-HK', {
        year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'
    });

    window.vaultData.unshift({ title, content, mood, timestamp, id: Date.now() });
    await saveToStorage();
    
    document.getElementById('note-title').value = '';
    document.getElementById('note-content').value = '';
    
    renderList();
    showToast(t('toastAdded'));
}

async function deleteEntry(id) {
    if (!confirm(t('alertDeleteConfirm'))) return;
    window.vaultData = window.vaultData.filter(item => item.id !== id);
    await saveToStorage();
    renderList();
    showToast(t('toastDeleted'));
}

async function saveToStorage() {
    const encrypted = await encryptData(window.vaultData, currentKey);
    localStorage.setItem('daily_offline_data', JSON.stringify(encrypted));
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(t('toastCopied'));
    });
}

function el(tag, text, className) {
    const e = document.createElement(tag);
    if (text) e.textContent = text;
    if (className) e.className = className;
    return e;
}

function renderList() {
    if (!currentKey) return;
    const container = document.getElementById('pass-list');
    container.innerHTML = '';
    const searchQ = document.getElementById('search-input').value.toLowerCase();
    
    const filtered = window.vaultData.filter(item => 
        item.title.toLowerCase().includes(searchQ) || 
        item.content.toLowerCase().includes(searchQ)
    );

    if (filtered.length === 0) {
        container.appendChild(el('p', t('emptyList'), 'notice-text'));
        return;
    }

    filtered.forEach(item => {
        const div = el('div', '', 'item');
        
        const header = el('div', '', 'item-header');
        const title = el('strong', item.title);
        title.style.fontSize = "1.1rem";
        const meta = el('span', `${item.mood} ‧ ${item.timestamp}`);
        meta.style.fontSize = "0.8rem";
        meta.style.color = "var(--text-sub)";
        
        header.appendChild(title);
        header.appendChild(meta);
        
        const contentBody = el('p', item.content);
        contentBody.style.whiteSpace = "pre-wrap";
        contentBody.style.margin = "10px 0";
        contentBody.style.lineHeight = "1.6";
        contentBody.style.color = "var(--text-main)";

        const actionRow = el('div', '', 'item-header');
        actionRow.style.marginTop = "5px";
        
        const btnGroup = el('div', '', 'item-actions');
        
        const copyBtn = el('button', t('actionCopy'));
        copyBtn.addEventListener('click', () => copyToClipboard(`${item.title}\n\n${item.content}`));
        
        const delBtn = el('button', t('actionDelete'), 'btn-danger');
        delBtn.addEventListener('click', () => deleteEntry(item.id));

        btnGroup.append(copyBtn, " ", delBtn);
        actionRow.append(el('span', ''), btnGroup);
        
        div.append(header, contentBody, actionRow);
        container.appendChild(div);
    });
}

function exportData() {
    const check = prompt(t('alertVerifyExport'));
    if (check !== currentKey) return alert(t('alertWrongPass'));

    const dataStr = localStorage.getItem('daily_offline_data');
    if (!dataStr) return alert(t('alertNoDataExport'));
    const blob = new Blob([dataStr], { type: "application/json" });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `DailyOffline_Journal_Backup_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
}

function importData() {
    const fileInput = document.getElementById('import-file');
    if (!fileInput.files[0]) return alert(t('alertSelectFile'));
    if (!confirm(t('alertImportConfirm'))) return;

    const reader = new FileReader();
    reader.onload = async function(e) {
        try {
            const parsed = JSON.parse(e.target.result);
            window.vaultData = await decryptData(parsed, currentKey);
            localStorage.setItem('daily_offline_data', e.target.result);
            renderList();
            alert(t('toastAdded'));
            fileInput.value = '';
            updateFileName();
        } catch (err) {
            alert(t('alertWrongPass'));
        }
    };
    reader.readAsText(fileInput.files[0]);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-bilingual').addEventListener('click', () => setLanguage('bilingual'));
    document.getElementById('btn-zh').addEventListener('click', () => setLanguage('zh'));
    document.getElementById('btn-en').addEventListener('click', () => setLanguage('en'));
    
    document.getElementById('unlock-btn').addEventListener('click', unlockVault);
    document.getElementById('btn-reset').addEventListener('click', resetVault);
    document.getElementById('btn-lock').addEventListener('click', lockVault);
    document.getElementById('btn-add-entry').addEventListener('click', addEntry);
    document.getElementById('search-input').addEventListener('input', renderList);
    document.getElementById('btn-change-pass').addEventListener('click', changeMasterPassword);
    document.getElementById('btn-export').addEventListener('click', exportData);
    document.getElementById('import-file').addEventListener('change', updateFileName);
    document.getElementById('btn-import').addEventListener('click', importData);

    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('SW Registered:', reg.scope))
            .catch(err => console.log('SW Registration Failed:', err));
    }

    setLanguage(currentLang);
    lockVault();
});
