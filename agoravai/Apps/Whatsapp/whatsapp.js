function initializeWhatsapp() {
    const whatsappSearch = document.getElementById('whatsapp-search');
    const messageList = document.getElementById('whatsapp-message-list');
    const contacts = messageList.getElementsByClassName('whatsapp-contact');
    const whatsappMainScreen = document.getElementById('whatsapp-main-screen');
    const whatsappChatScreen = document.getElementById('whatsapp-chat-screen');
    const backToWhatsappButton = document.getElementById('back-to-whatsapp');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const mediaButtons = document.getElementById('media-buttons');
    const chatMessages = document.getElementById('chat-messages');

    // Busca de contatos
    whatsappSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        for (const contact of contacts) {
            const name = contact.querySelector('.whatsapp-contact-name').textContent.toLowerCase();
            contact.style.display = name.includes(searchTerm) ? 'flex' : 'none';
        }
    });

    // Abrir chat
    Array.from(contacts).forEach(contact => {
        contact.addEventListener('click', () => {
            openChat(
                contact.dataset.contact,
                contact.dataset.img,
                contact.dataset.status
            );
        });
    });

    // Voltar para lista de contatos
    backToWhatsappButton.addEventListener('click', () => {
        whatsappChatScreen.classList.add('hidden');
        whatsappMainScreen.classList.remove('hidden');
    });

    // Alternar botões baseado no input
    messageInput.addEventListener('input', (e) => {
        if (e.target.value.trim()) {
            mediaButtons.classList.add('hidden');
            sendButton.classList.remove('hidden');
        } else {
            mediaButtons.classList.remove('hidden');
            sendButton.classList.add('hidden');
        }
    });

    // Enviar mensagem
    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function openChat(contactName, contactImage, contactStatus) {
        whatsappChatScreen.classList.remove('hidden');
        whatsappMainScreen.classList.add('hidden');
        whatsappChatScreen.querySelector('#chat-contact-name').textContent = contactName;
        whatsappChatScreen.querySelector('#chat-profile-img').src = contactImage || '';
        whatsappChatScreen.querySelector('#chat-contact-status').textContent = contactStatus;
    }

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (!messageText) return;

        const messageElement = document.createElement('div');
        messageElement.className = 'flex justify-end';
        messageElement.innerHTML = `
            <div class="rounded-2xl rounded-br-sm px-3 py-2 max-w-[70%] shadow-sm" style="background-color: #DCF6C5;">
                <p class="text-black text-sm">${messageText}</p>
                <div class="flex items-center justify-end mt-1 space-x-1">
                    <span class="text-xs text-gray-500">${new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                        <path d="M15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893Z" fill="#4CAF50"/>
                        <path d="M11.7071 0.292893C12.0976 0.683417 12.0976 1.31658 11.7071 1.70711L4.70711 8.70711C4.31658 9.09763 3.68342 9.09763 3.29289 8.70711L1.29289 6.70711C0.902369 6.31658 0.902369 5.68342 1.29289 5.29289C1.68342 4.90237 2.31658 4.90237 2.70711 5.29289L4 6.58579L10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893Z" fill="#4CAF50"/>
                    </svg>
                </div>
            </div>
        `;
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
        mediaButtons.classList.remove('hidden');
        sendButton.classList.add('hidden');
        chatMessages.scrollTop = chatMessages.scrollHeight;

        setTimeout(() => {
            simulateReceivedMessage("Resposta automática para teste!");
        }, 2000);
    }

    function simulateReceivedMessage(text) {
        const messageElement = document.createElement('div');
        messageElement.className = 'flex justify-start';
        messageElement.innerHTML = `
            <div class="bg-white rounded-2xl rounded-bl-sm px-3 py-2 max-w-[70%] shadow-sm">
                <p class="text-black text-sm">${text}</p>
                <div class="flex items-center justify-end mt-1 space-x-1">
                    <span class="text-xs text-gray-500">${new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
            </div>
        `;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
[            <div class="bg-white rounded-2xl rounded-bl-sm px-3 py-2 max-w-[70%] shadow-sm">
                <p class="text-black text-sm">${text}</p>
                <div class="flex items-center justify-end mt-1 space-x-1">
                    <span class="text-xs text-gray-500">${new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
            </div>
        `;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
        messageElement.className = 'flex justify-start';
        messageElement.innerHTML = `
            <div class="bg-white rounded-2xl rounded-bl-sm px-3 py-2 max-w-[70%] shadow-sm">
                <p class="text-black text-sm">${text}</p>
                <div class="flex items-center justify-end mt-1 space-x-1">
                    <span class="text-xs text-gray-500">${new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M11.7071 0.292893C12.0976 0.683417 12.0976 1.31658 11.7071 1.70711L4.70711 8.70711C4.31658 9.09763 3.68342 9.09763 3.29289 8.70711L0.292893 5.70711C-0.0976311 5.31658 -0.0976311 4.68342 0.292893 4.29289C0.683417 3.90237 1.31658 3.90237 1.70711 4.29289L4 6.58579L10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893Z" fill="#999"/>
                    </svg>
                </div>
            </div>]
        `;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
});
