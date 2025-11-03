const chatContainer = document.getElementById('chat-container');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const settingsIcon = document.getElementById('settings-icon');
const settingsModal = document.getElementById('settings-modal');
const serverIpInput = document.getElementById('server-ip');
const serverTokenInput = document.getElementById('server-token');
const saveSettingsBtn = document.getElementById('save-settings');

// 从本地存储加载配置
let serverUrl = localStorage.getItem('serverUrl') || '';
let serverToken = localStorage.getItem('serverToken') || '';
serverIpInput.value = serverUrl;
serverTokenInput.value = serverToken;

function appendMessage(content, isUser = true) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + (isUser ? 'user-message' : 'ai-message');
    messageDiv.innerText = content;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

sendBtn.addEventListener('click', async () => {
    const text = messageInput.value.trim();
    if (!text) return;

    appendMessage(text, true);
    messageInput.value = '';

    if (!serverUrl || !serverToken) {
        appendMessage("请先在设置中配置服务器地址和 Token", false);
        return;
    }

    try {
        const response = await fetch(`${serverUrl}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${serverToken}`
            },
            body: JSON.stringify({ messages: text })
        });

        const data = await response.json();
        if (data.response) {
            appendMessage(data.response, false);
        } else {
            appendMessage("错误：" + (data.error || '未知错误'), false);
        }
    } catch (error) {
        appendMessage("请求失败：" + error.message, false);
    }
});

settingsIcon.addEventListener('click', () => {
    settingsModal.style.display = 'flex';
});

saveSettingsBtn.addEventListener('click', () => {
    serverUrl = serverIpInput.value.trim();
    serverToken = serverTokenInput.value.trim();
    localStorage.setItem('serverUrl', serverUrl);
    localStorage.setItem('serverToken', serverToken);
    settingsModal.style.display = 'none';
});

// 点击模态框外部关闭
settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
        settingsModal.style.display = 'none';
    }
});
