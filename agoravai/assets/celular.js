// --- Configuração dos apps ---
const APPS = [
    {
        name: "Spotify",
        icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/9e363076a453def9eded187cf666e18d_low_res_Spotify.png",
        type: "static"
    },
    {
        name: "Instagram",
        icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/ad35adc95988a53ec5b46ebe550ed014_low_res_Instagram.png",
        type: "static"
    },
    {
        name: "WhatsApp",
        icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/4710435d49a1b83987ea74c9951973ad_low_res_WhatsApp.png",
        type: "whatsapp"
    },
    {
        name: "YouTube",
        icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/00e6a4a9ca2856d4a941a8bbcaeffaa8_low_res_YouTube_Music.png",
        type: "iframe",
        splash: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/00e6a4a9ca2856d4a941a8bbcaeffaa8_low_res_YouTube_Music.png",
        url: "https://www.youtube-nocookie.com/embed/jfKfPfyJRdk?autoplay=1&controls=0"
    },
    {
        name: "Notas",
        icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/2a846d9fb757a742e6ab7ec9b243027e_low_res_Notes__MacOS_Tahoe_.png",
        type: "static"
    },
    {
        name: "App Store",
        icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/8f0aba462304996c37f9f506b368c53b_low_res_App_Store__MacOS_Tahoe_.png",
        type: "static"
    },
    {
        name: "Ajustes",
        icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/97d2a929575179d968b2e9deee1a7d53_low_res_Settings.png",
        type: "static"
    },
    {
        name: "Safari",
        icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/a0b8d534889b5695781a9a03f388e2d4_low_res_Safari__MacOS_Tahoe_.png",
        type: "iframe",
        splash: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/a0b8d534889b5695781a9a03f388e2d4_low_res_Safari__MacOS_Tahoe_.png",
        url: "https://html.duckduckgo.com/html/"
    },
    {
        name: "Inter",
        icon: "https://ik.imagekit.io/tolkian/Rectangle%2050_2DUW7bIMz.png",
        type: "static"
    },
    {
        name: "Justus Seguros",
        icon: "https://ik.imagekit.io/tolkian/Rectangle%2052_okiz4CNDE.png",
        type: "static"
    }
];

const DOCK_APPS = [
    {
        name: "Telefone",
        icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/40f7ffe1f8d020fd2de2aa43eb5dbb29_4tuDtE5ao5.png",
        type: "static"
    },
    {
        name: "Mensagens",
        icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/d097d304caf4925bcb7177bbdcec4610_tcAXOnfIGW.png",
        type: "static"
    },
    {
        name: "Safari",
        icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/a0b8d534889b5695781a9a03f388e2d4_low_res_Safari__MacOS_Tahoe_.png",
        type: "iframe",
        splash: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/a0b8d534889b5695781a9a03f388e2d4_low_res_Safari__MacOS_Tahoe_.png",
        url: "https://html.duckduckgo.com/html/"
    }
];

// --- Renderização dos apps na tela inicial ---
function renderApps() {
    const grid = document.getElementById('apps-grid');
    grid.innerHTML = '';
    APPS.forEach((app, idx) => {
        const div = document.createElement('div');
        div.className = 'app-icon';
        div.title = app.name;
        div.innerHTML = `<img src="${app.icon}" alt="${app.name}">`;
        if (app.type !== 'static') {
            div.dataset.idx = idx;
            div.addEventListener('click', openApp);
        }
        grid.appendChild(div);
    });
}
function renderDock() {
    const dock = document.getElementById('footer-dock');
    dock.innerHTML = '';
    DOCK_APPS.forEach((app, idx) => {
        const div = document.createElement('div');
        div.className = 'app-icon';
        div.title = app.name;
        div.innerHTML = `<img src="${app.icon}" alt="${app.name}">`;
        if (app.type !== 'static') {
            div.dataset.idx = `dock-${idx}`;
            div.addEventListener('click', openApp);
        }
        dock.appendChild(div);
    });
}

// --- Lógica para arrastar o celular ---
const phoneWrapper = document.getElementById('phone-wrapper');
const dragHandle = document.getElementById('drag-handle');
let isDragging = false;
let offsetX, offsetY;
const startDrag = (e) => {
    isDragging = true;
    e.preventDefault();
    const clientX = e.clientX || e.touches[0].clientX;
    const clientY = e.clientY || e.touches[0].clientY;
    offsetX = clientX - phoneWrapper.offsetLeft;
    offsetY = clientY - phoneWrapper.offsetTop;
    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchmove', dragMove, { passive: false });
    document.addEventListener('touchend', stopDrag);
};
const dragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const clientX = e.clientX || e.touches[0].clientX;
    const clientY = e.clientY || e.touches[0].clientY;
    let newX = clientX - offsetX;
    let newY = clientY - offsetY;
    const maxX = window.innerWidth - phoneWrapper.offsetWidth;
    const maxY = window.innerHeight - phoneWrapper.offsetHeight;
    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));
    phoneWrapper.style.left = `${newX}px`;
    phoneWrapper.style.top = `${newY}px`;
    phoneWrapper.style.bottom = 'auto';
    phoneWrapper.style.right = 'auto';
};
const stopDrag = () => {
    isDragging = false;
    document.removeEventListener('mousemove', dragMove);
    document.removeEventListener('mouseup', stopDrag);
    document.removeEventListener('touchmove', dragMove);
    document.removeEventListener('touchend', stopDrag);
};
dragHandle.addEventListener('mousedown', startDrag);
dragHandle.addEventListener('touchstart', startDrag, { passive: false });

// --- Lógica para abrir apps ---
const phoneContainer = document.getElementById('phone');
const homescreen = document.getElementById('homescreen');
const splashScreen = document.getElementById('app-splash-screen');
const splashIcon = document.getElementById('splash-icon');
const appContainer = document.getElementById('app-container');

function openApp(e) {
    let idx = e.currentTarget.dataset.idx;
    let app;
    if (idx.startsWith('dock-')) {
        app = DOCK_APPS[parseInt(idx.replace('dock-', ''))];
    } else {
        app = APPS[parseInt(idx)];
    }
    // Sempre fecha qualquer app aberto antes de abrir outro
    closeApps();

    phoneContainer.classList.add('app-mode');
    homescreen.classList.add('hidden');
    splashIcon.src = app.icon || app.splash || '';
    splashScreen.classList.remove('hidden');
    setTimeout(() => {
        splashScreen.classList.add('hidden');
        loadApp(app);
    }, 1200);
}

function showSplash(iconUrl, callback) {
    splashIcon.src = iconUrl || '';
    splashScreen.classList.remove('hidden');
    setTimeout(() => {
        splashScreen.classList.add('hidden');
        if (callback) callback();
    }, 1200);
}

function loadApp(app) {
    appContainer.innerHTML = '';
    if (app.type === 'iframe') {
        showSplash(app.splash, () => {
            const iframe = document.createElement('iframe');
            iframe.src = app.url;
            iframe.className = "w-full h-full border-0";
            iframe.allow = "autoplay";
            appContainer.innerHTML = `<div class="app-screen">${iframe.outerHTML}<button class="home-button"></button></div>`;
            appContainer.querySelector('.home-button').onclick = closeApps;
        });
    } else if (app.type === 'whatsapp') {
        showSplash(app.icon, () => {
            fetch('./Apps/Whatsapp/whatsapp.html')
                .then(response => response.text())
                .then(html => {
                    appContainer.innerHTML = html;
                    const script = document.createElement('script');
                    script.src = './Apps/Whatsapp/whatsapp.js';
                    script.onload = () => {
                        initializeWhatsapp(); // Inicializa o WhatsApp
                        appContainer.querySelector('.home-button').onclick = closeApps;
                    };
                    appContainer.appendChild(script);
                })
                .catch(() => {
                    alert('Erro ao carregar o WhatsApp.');
                });
        });
    }
}

function closeApps() {
    phoneContainer.classList.remove('app-mode');
    homescreen.classList.remove('hidden');
    appContainer.innerHTML = ''; // Limpa o container de aplicativos
    splashScreen.classList.add('hidden'); // Garante que a tela de splash seja escondida
}

// Home button global
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('home-button')) {
        closeApps();
    }
});

// --- WhatsApp HTML e lógica (igual ao original, mas modular) ---
function getWhatsappHtml() {
    // Remova position:absolute;inset:0;z-index:31 do chat-screen
    return `
    <div id="whatsapp-main-screen" class="app-screen">
        <header class="px-6 pt-3 pb-2 text-black shrink-0 relative">
            <div class="absolute top-0 left-0 right-0 px-6 py-2 flex justify-between items-center text-xs font-semibold z-10 text-black">
                <span>9:41</span>
                <div class="flex items-center space-x-2">
                    <!-- ...SVGs iguais... -->
                    <svg class="text-black" xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="currentColor"><path d="M7.57079 2.27124C7.57079 1.85311 7.90974 1.51416 8.32787 1.51416H9.08495C9.50307 1.51416 9.84203 1.85311 9.84203 2.27124V8.32787C9.84203 8.74599 9.50307 9.08495 9.08495 9.08495H8.32787C7.90974 9.08495 7.57079 8.74599 7.57079 8.32787V2.27124Z"/><path d="M11.3562 0.757079C11.3562 0.338956 11.6951 0 12.1133 0H12.8703C13.2885 0 13.6274 0.338956 13.6274 0.757079V8.32787C13.6274 8.74599 13.2885 9.08495 12.8703 9.08495H12.1133C11.6951 9.08495 11.3562 8.74599 11.3562 8.32787V0.757079Z"/><path d="M3.78539 4.92101C3.78539 4.50289 4.12435 4.16393 4.54247 4.16393H5.29955C5.71768 4.16393 6.05663 4.50289 6.05663 4.92101V8.32787C6.05663 8.74599 5.71768 9.08495 5.29955 9.08495H4.54247C4.12435 9.08495 3.78539 8.74599 3.78539 8.32787V4.92101Z"/><path d="M0 6.81371C0 6.39559 0.338956 6.05663 0.757079 6.05663H1.51416C1.93228 6.05663 2.27124 6.39559 2.27124 6.81371V8.32787C2.27124 8.74599 1.93228 9.08495 1.51416 9.08495H0.757079C0.338956 9.08495 0 8.74599 0 8.32787V6.81371Z"/></svg>
                    <svg class="text-black" xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none"><path d="M4.62989 6.84333C5.70484 5.90279 7.27956 5.90279 8.3545 6.84333C8.40839 6.89389 8.43991 6.96535 8.44142 7.0406C8.44291 7.11595 8.41428 7.18895 8.36232 7.24177L6.67872 8.99861C6.62945 9.05018 6.56229 9.07958 6.4922 9.07966C6.42201 9.07966 6.35404 9.05025 6.3047 8.99861L4.62208 7.24177C4.57008 7.1889 4.54144 7.11601 4.54298 7.0406C4.54453 6.96519 4.57578 6.89388 4.62989 6.84333ZM2.35353 4.73982C4.66941 2.51129 8.25631 2.51145 10.5723 4.73982C10.6245 4.79199 10.6545 4.86397 10.6553 4.93904C10.656 5.01424 10.6274 5.08686 10.5762 5.14021L9.60353 6.15779C9.50334 6.2615 9.34115 6.26349 9.23829 6.16267C8.47776 5.45024 7.48793 5.05518 6.46193 5.05525C5.43668 5.05574 4.44846 5.45077 3.68849 6.16267C3.58573 6.26367 3.42355 6.26133 3.32325 6.15779L2.3506 5.14021C2.29925 5.08694 2.27081 5.01426 2.2715 4.93904C2.2723 4.86397 2.30132 4.79197 2.35353 4.73982Z" fill="currentColor"/><path d="M6.43552 1.98496C8.3029 1.98505 10.0989 2.72731 11.4522 4.05834C11.5542 4.1611 11.717 4.15981 11.8174 4.05544L12.7916 3.03836C12.8424 2.98542 12.8708 2.91372 12.8703 2.83911C12.8699 2.7645 12.8408 2.69315 12.7894 2.64083C9.23721 -0.880765 3.63328 -0.880765 0.0811308 2.64083C0.0296755 2.69311 0.000480351 2.76444 5.87442e-06 2.83905C-0.000468602 2.91366 0.0278167 2.98539 0.0786026 3.03836L1.05307 4.05544C1.15338 4.15996 1.3164 4.16126 1.41825 4.05834C2.77178 2.72722 4.56796 1.98496 6.43552 1.98496Z" fill="currentColor" fill-opacity="0.44"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="9" viewBox="0 0 18 9" fill="none"><rect x="0.5" y="0.5" width="17" height="8" rx="2.5" stroke="black"/><rect x="2" y="2" width="8" height="5" rx="2" fill="#FFA600"/></svg>
                </div>
            </div>
            <div class="flex justify-between items-center mt-8">
                <div class="w-7 h-7 rounded-full flex items-center justify-center" style="background: rgba(0, 0, 0, 0.20);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 7C3.44771 7 3 7.44773 3 8C3 8.55227 3.44771 9 4 9C4.55229 9 5 8.55227 5 8C5 7.44773 4.55229 7 4 7Z" fill="white"/><path d="M7 8C7 7.44773 7.44773 7 8 7C8.55227 7 9 7.44773 9 8C9 8.55227 8.55227 9 8 9C7.44773 9 7 8.55227 7 8Z" fill="white"/><path d="M11 8C11 7.44773 11.4477 7 12 7C12.5523 7 13 7.44773 13 8C13 8.55227 12.5523 9 12 9C11.4477 9 11 8.55227 11 8Z" fill="white"/></svg>
                </div>
                <div class="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M16.958 19.261H5.04134C3.29967 19.261 1.83301 17.886 1.83301 16.0526V9.36096C1.83301 7.6193 3.20801 6.2443 5.04134 6.2443H6.14134L6.96634 5.1443C7.51634 4.41097 8.43301 3.95264 9.34967 3.95264H12.558C13.5663 3.95264 14.3913 4.41097 15.033 5.1443L15.858 6.2443H16.958C18.7913 6.2443 20.1663 7.6193 20.1663 9.36096V16.1443C20.1663 17.886 18.7913 19.261 16.958 19.261ZM5.04134 8.07764C4.30801 8.07764 3.66634 8.62764 3.66634 9.36096V16.1443C3.66634 16.8776 4.30801 17.5193 5.04134 17.5193H17.0497C17.783 17.5193 18.4247 16.8776 18.4247 16.1443V9.36096C18.4247 8.62764 17.783 7.98597 17.0497 7.98597H15.583C15.308 7.98597 15.033 7.8943 14.8497 7.6193L13.7497 6.2443C13.383 5.9693 13.0163 5.78597 12.6497 5.78597H9.34967C8.98301 5.78597 8.61634 5.9693 8.34134 6.2443L7.24134 7.71097C7.05801 7.8943 6.78301 8.07764 6.50801 8.07764H5.04134Z" fill="#5E5E5E"/><path d="M11.0003 16.3277C8.80026 16.3277 7.05859 14.586 7.05859 12.386C7.05859 10.186 8.80026 8.44434 11.0003 8.44434C13.2003 8.44434 14.9419 10.186 14.9419 12.386C14.9419 14.4943 13.2003 16.3277 11.0003 16.3277ZM11.0003 10.2777C9.80858 10.2777 8.89193 11.1943 8.89193 12.386C8.89193 13.5777 9.80858 14.4943 11.0003 14.4943C12.1919 14.4943 13.1086 13.5777 13.1086 12.386C13.1086 11.1943 12.1919 10.2777 11.0003 10.2777Z" fill="#5E5E5E"/></svg>
                    <div class="w-7 h-7 flex items-center justify-center rounded-full" style="background: #4EAF4B;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 15.5833V6.41663" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M6.41699 11H15.5837" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>
                    </div>
                </div>
            </div>
            <h1 class="text-xl font-bold text-black mt-1">Conversas</h1>
        </header>
        <main class="flex-grow px-4 overflow-hidden text-black flex flex-col">
            <div class="py-2">
                <div class="flex items-center p-2 rounded-lg" style="background: rgba(0, 0, 0, 0.05);">
                    <svg class="mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M6.41667 11.0833C8.994 11.0833 11.0833 8.994 11.0833 6.41667C11.0833 3.83934 8.994 1.75 6.41667 1.75C3.83934 1.75 1.75 3.83934 1.75 6.41667C1.75 8.994 3.83934 11.0833 6.41667 11.0833Z" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.25 12.25L9.71252 9.7125" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <input type="text" id="whatsapp-search" class="w-full bg-transparent outline-none" placeholder="Pesquisar mensagens" style="color: #A8A8A8; font-size: 11px; font-weight: 400; line-height: 18px; letter-spacing: -0.408px;">
                </div>
            </div>
            <div id="whatsapp-message-list" class="flex-grow space-y-2 py-2 overflow-y-auto whatsapp-messages">
                <div class="whatsapp-contact flex items-center py-2 cursor-pointer" data-contact="Inter" data-img="https://ik.imagekit.io/tolkian/Rectangle%2050_2DUW7bIMz.png" data-status="online agora">
                    <img src="https://ik.imagekit.io/tolkian/Rectangle%2050_2DUW7bIMz.png" class="w-8 h-8 rounded-full mr-3 shrink-0">
                    <div class="flex-grow min-w-0 relative h-full flex items-center">
                        <div class="flex-grow">
                            <div class="whatsapp-contact-name">Inter</div>
                            <p class="whatsapp-message-preview truncate">Eu já soube das novidades da semana? ve...</p>
                        </div>
                        <div class="flex flex-col items-end shrink-0 ml-2">
                            <span class="whatsapp-message-counter px-2 py-0.5">12</span>
                            <span class="whatsapp-message-time mt-1">2 minutos</span>
                        </div>
                        <div class="whatsapp-divider"></div>
                    </div>
                </div>
                <div class="whatsapp-contact flex items-center py-2 cursor-pointer" data-contact="31 99710-6807" data-img="" data-status="online agora">
                    <div class="w-8 h-8 rounded-full mr-3 shrink-0 bg-gray-200"></div>
                    <div class="flex-grow min-w-0 relative h-full flex items-center">
                        <div class="flex-grow">
                            <div class="whatsapp-contact-name">31 99710-6807</div>
                            <p class="whatsapp-message-preview truncate">Eu já soube das novidades da semana? ve...</p>
                        </div>
                        <div class="flex flex-col items-end shrink-0 ml-2">
                            <span class="whatsapp-message-counter px-2 py-0.5">12</span>
                            <span class="whatsapp-message-time mt-1">2 minutos</span>
                        </div>
                        <div class="whatsapp-divider"></div>
                    </div>
                </div>
            </div>
        </main>
        <footer class="px-4 py-4 grid grid-cols-4 gap-2 border-t border-gray-100 shrink-0 mb-4">
            <div class="flex flex-col items-center text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 11.6495C11.3096 11.6495 10.75 12.2091 10.75 12.8995C10.75 13.5898 11.3096 14.1495 12 14.1495C12.6904 14.1495 13.25 13.5898 13.25 12.8995C13.25 12.2091 12.6904 11.6495 12 11.6495ZM9.25 12.8995C9.25 11.3807 10.4812 10.1495 12 10.1495C13.5188 10.1495 14.75 11.3807 14.75 12.8995C14.75 14.4183 13.5188 15.6495 12 15.6495C10.4812 15.6495 9.25 14.4183 9.25 12.8995Z" fill="#777777"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.64954C10.9617 7.64954 9.94662 7.95744 9.08326 8.53432C8.2199 9.1112 7.547 9.93114 7.14964 10.8905C6.75228 11.8498 6.64831 12.9054 6.85088 13.9238C7.05345 14.9422 7.55347 15.8777 8.28769 16.6119C8.58059 16.9048 8.58059 17.3797 8.28769 17.6725C7.9948 17.9654 7.51993 17.9654 7.22703 17.6725C6.28303 16.7285 5.64015 15.5258 5.3797 14.2164C5.11925 12.9071 5.25292 11.5499 5.76382 10.3165C6.27471 9.08302 7.13987 8.02882 8.2499 7.28712C9.35994 6.54542 10.665 6.14954 12 6.14954C13.335 6.14954 14.6401 6.54542 15.7501 7.28712C16.8601 8.02881 17.7253 9.08302 18.2362 10.3165C18.7471 11.5499 18.8808 12.9071 18.6203 14.2164C18.3599 15.5258 17.717 16.7285 16.773 17.6725C16.4801 17.9654 16.0052 17.9654 15.7123 17.6725C15.4194 17.3797 15.4194 16.9048 15.7123 16.6119C16.4465 15.8777 16.9466 14.9422 17.1491 13.9238C17.3517 12.9054 17.2477 11.8498 16.8504 10.8905C16.453 9.93114 15.7801 9.1112 14.9167 8.53432C14.0534 7.95744 13.0384 7.64954 12 7.64954Z" fill="#777777"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 3.75C10.1905 3.75 8.42152 4.28661 6.9169 5.29197C5.41227 6.29733 4.23956 7.72628 3.54705 9.39813C2.85455 11.07 2.67336 12.9096 3.0264 14.6845C3.37943 16.4593 4.25083 18.0896 5.53041 19.3692C5.82331 19.662 5.82331 20.1369 5.53041 20.4298C5.23752 20.7227 4.76265 20.7227 4.46975 20.4298C2.9804 18.9405 1.96613 17.0429 1.55522 14.9771C1.14431 12.9113 1.3552 10.77 2.16123 8.82411C2.96727 6.87817 4.33224 5.21494 6.08354 4.04476C7.83484 2.87458 9.89381 2.25 12.0001 2.25C14.1063 2.25 16.1653 2.87458 17.9166 4.04476C19.6679 5.21494 21.0329 6.87817 21.8389 8.82411C22.645 10.77 22.8559 12.9113 22.4449 14.9771C22.034 17.0429 21.0198 18.9405 19.5304 20.4298C19.2375 20.7227 18.7626 20.7227 18.4697 20.4298C18.1768 20.1369 18.1768 19.662 18.4697 19.3692C19.7493 18.0896 20.6207 16.4593 20.9738 14.6845C21.3268 12.9096 21.1456 11.07 20.4531 9.39813C19.7606 7.72628 18.5879 6.29733 17.0833 5.29197C15.5786 4.28661 13.8097 3.75 12.0001 3.75Z" fill="#777777"/></svg>
            </div>
            <button class="home-button"></button>
        </footer>
    </div>
    <div id="whatsapp-chat-screen" class="app-screen hidden" style="background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'); background-size: cover;">
        <div class="absolute top-0 left-0 right-0 px-4 py-2 flex justify-between items-center text-xs font-semibold z-10" style="pointer-events: none;">
            <span class="text-white" style="opacity: 0.7;">9:41</span>
            <div class="flex items-center space-x-2" style="pointer-events: auto;">
                <div class="w-7 h-7 rounded-full flex items-center justify-center" style="background: rgba(255, 255, 255, 0.2);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 7C3.44771 7 3 7.44773 3 8C3 8.55227 3.44771 9 4 9C4.55229 9 5 8.55227 5 8C5 7.44773 4.55229 7 4 7Z" fill="white"/><path d="M7 8C7 7.44773 7.44773 7 8 7C8.55227 7 9 7.44773 9 8C9 8.55227 8.55227 9 8 9C7.44773 9 7 8.55227 7 8Z" fill="white"/><path d="M11 8C11 7.44773 11.4477 7 12 7C12.5523 7 13 7.44773 13 8C13 8.55227 12.5523 9 12 9C11.4477 9 11 8.55227 11 8Z" fill="white"/></svg>
                </div>
                <div class="flex items-center space-x-1">
                    <div class="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    <span class="text-white text-xs" style="opacity: 0.7;">Online</span>
                </div>
            </div>
        </div>
        <div id="chat-messages" class="flex-grow px-4 py-2 overflow-y-auto" style="pointer-events: auto;"></div>
        <div class="px-4 py-2 border-t border-gray-100" style="pointer-events: auto;">
            <div class="flex items-center">
                <div class="w-9 h-9 rounded-full mr-3 flex items-center justify-center" style="background: rgba(0, 0, 0, 0.1);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M14.9998 2.5H5.00016C3.12516 2.5 1.66683 3.95833 1.66683 5.83333V14.1667C1.66683 16.0417 3.12516 17.5 5.00016 17.5H14.9998C16.8748 17.5 18.3332 16.0417 18.3332 14.1667V5.83333C18.3332 3.95833 16.8748 2.5 14.9998 2.5ZM10.0002 15.8333C8.12516 15.8333 6.66683 14.375 6.66683 12.5C6.66683 10.625 8.12516 9.16667 10.0002 9.16667C11.8752 9.16667 13.3335 10.625 13.3335 12.5C13.3335 14.375 11.8752 15.8333 10.0002 15.8333ZM10.0002 10.8333C9.44791 10.8333 9.00016 11.281 9.00016 11.8333C9.00016 12.3856 9.44791 12.8333 10.0002 12.8333C10.5525 12.8333 11.0002 12.3856 11.0002 11.8333C11.0002 11.281 10.5525 10.8333 10.0002 10.8333Z" fill="#777777"/><path d="M11.0003 16.3277C8.80026 16.3277 7.05859 14.586 7.05859 12.386C7.05859 10.186 8.80026 8.44434 11.0003 8.44434C13.2003 8.44434 14.9419 10.186 14.9419 12.386C14.9419 14.4943 13.2003 16.3277 11.0003 16.3277ZM11.0003 10.2777C9.80858 10.2777 8.89193 11.1943 8.89193 12.386C8.89193 13.5777 9.80858 14.4943 11.0003 14.4943C12.1919 14.4943 13.1086 13.5777 13.1086 12.386C13.1086 11.1943 12.1919 10.2777 11.0003 10.2777Z" fill="#777777"/></svg>
                </div>
                <input id="message-input" type="text" class="flex-grow bg-transparent outline-none" placeholder="Mensagem" style="color: #A8A8A8; font-size: 14px; font-weight: 400; line-height: 20px; letter-spacing: -0.408px;">
                <div id="media-buttons" class="flex items-center space-x-2 ml-2" style="display: none;">
                    <button class="p-2 rounded-full hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2.5C4.6875 2.5 0 7.1875 0 12.5C0 17.8125 4.6875 22.5 10 22.5C15.3125 22.5 20 17.8125 20 12.5C20 7.1875 15.3125 2.5 10 2.5ZM10 20C5.305 20 1.25 15.945 1.25 11.25C1.25 6.555 5.305 2.5 10 2.5C14.695 2.5 18.75 6.555 18.75 11.25C18.75 15.945 14.695 20 10 20Z" fill="#777777"/><path d="M14.375 7.5H5.625C5.28125 7.5 5 7.78125 5 8.125C5 8.46875 5.28125 8.75 5.625 8.75H14.375C14.7188 8.75 15 8.46875 15 8.125C15 7.78125 14.7188 7.5 14.375 7.5Z" fill="#777777"/><path d="M14.375 11.875H5.625C5.28125 11.875 5 12.1562 5 12.5C5 12.8438 5.28125 13.125 5.625 13.125H14.375C14.7188 13.125 15 12.8438 15 12.5C15 12.1562 14.7188 11.875 14.375 11.875Z" fill="#777777"/><path d="M14.375 16.25H5.625C5.28125 16.25 5 16.5312 5 16.875C5 17.2188 5.28125 17.5 5.625 17.5H14.375C14.7188 17.5 15 17.2188 15 16.875C15 16.5312 14.7188 16.25 14.375 16.25Z" fill="#777777"/></svg>
                    </button>
                    <button class="p-2 rounded-full hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2.5C4.6875 2.5 0 7.1875 0 12.5C0 17.8125 4.6875 22.5 10 22.5C15.3125 22.5 20 17.8125 20 12.5C20 7.1875 15.3125 2.5 10 2.5ZM10 20C5.305 20 1.25 15.945 1.25 11.25C1.25 6.555 5.305 2.5 10 2.5C14.695 2.5 18.75 6.555 18.75 11.25C18.75 15.945 14.695 20 10 20Z" fill="#777777"/><path d="M14.375 7.5H5.625C5.28125 7.5 5 7.78125 5 8.125C5 8.46875 5.28125 8.75 5.625 8.75H14.375C14.7188 8.75 15 8.46875 15 8.125C15 7.78125 14.7188 7.5 14.375 7.5Z" fill="#777777"/><path d="M14.375 11.875H5.625C5.28125 11.875 5 12.1562 5 12.5C5 12.8438 5.28125 13.125 5.625 13.125H14.375C14.7188 13.125 15 12.8438 15 12.5C15 12.1562 14.7188 11.875 14.375 11.875Z" fill="#777777"/><path d="M14.375 16.25H5.625C5.28125 16.25 5 16.5312 5 16.875C5 17.2188 5.28125 17.5 5.625 17.5H14.375C14.7188 17.5 15 17.2188 15 16.875C15 16.5312 14.7188 16.25 14.375 16.25Z" fill="#777777"/></svg>
                    </button>
                </div>
                <button id="send-button" class="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700" style="display: none;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2.5 10C2.5 9.44772 2.94772 9 3.5 9H16.5C17.0523 9 17.5 9.44772 17.5 10C17.5 10.5523 17.0523 11 16.5 11H3.5C2.94772 11 2.5 10.5523 2.5 10Z" fill="white"/><path d="M10 2.5C10.5523 2.5 11 2.94772 11 3.5V16.5C11 17.0523 10.5523 17.5 10 17.5C9.44772 17.5 9 17.0523 9 16.5V3.5C9 2.94772 9.44772 2.5 10 2.5Z" fill="white"/></svg>
                </button>
            </div>
        </div>
    </div>
    `;
}

function bindWhatsappEvents() {
    // Busca
    const whatsappSearch = document.getElementById('whatsapp-search');
    const messageList = document.getElementById('whatsapp-message-list');
    const contacts = messageList.getElementsByClassName('whatsapp-contact');
    const whatsappMainScreen = document.getElementById('whatsapp-main-screen');
    const whatsappChatScreen = document.getElementById('whatsapp-chat-screen');
    whatsappSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        for (const contact of contacts) {
            const name = contact.querySelector('.whatsapp-contact-name').textContent.toLowerCase();
            if (name.includes(searchTerm)) {
                contact.style.display = 'flex';
            } else {
                contact.style.display = 'none';
            }
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
    // Chat
    const backToWhatsappButton = whatsappChatScreen.querySelector('#back-to-whatsapp');
    const messageInput = whatsappChatScreen.querySelector('#message-input');
    const sendButton = whatsappChatScreen.querySelector('#send-button');
    const mediaButtons = whatsappChatScreen.querySelector('#media-buttons');
    const chatMessages = whatsappChatScreen.querySelector('#chat-messages');
    function openChat(contactName, contactImage, contactStatus) {
        whatsappChatScreen.classList.remove('hidden');
        whatsappMainScreen.classList.add('hidden');
        whatsappChatScreen.querySelector('#chat-contact-name').textContent = contactName;
        whatsappChatScreen.querySelector('#chat-profile-img').src = contactImage || '';
        whatsappChatScreen.querySelector('#chat-contact-status').textContent = contactStatus;
    }
    backToWhatsappButton.addEventListener('click', () => {
        whatsappChatScreen.classList.add('hidden');
        whatsappMainScreen.classList.remove('hidden');
    });
    messageInput.addEventListener('input', (e) => {
        if (e.target.value.trim()) {
            mediaButtons.classList.add('hidden');
            sendButton.classList.remove('hidden');
        } else {
            mediaButtons.classList.remove('hidden');
            sendButton.classList.add('hidden');
        }
    });
    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (!messageText) return;
        playMessageSound('sent');
        const messageElement = document.createElement('div');
        messageElement.className = 'flex justify-end';
        messageElement.innerHTML = `
            <div class="rounded-2xl rounded-br-sm px-3 py-2 max-w-[70%] shadow-sm" style="background-color: #DCF6C5;">
                <p class="text-black text-sm">${messageText}</p>
                <div class="flex items-center justify-end mt-1 space-x-1">
                    <span class="text-xs text-gray-500">${new Date().toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'})}</span>
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
            simulateReceivedMessage("Resposta automática para teste!", chatMessages);
        }, 2000);
    }
    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
    function playMessageSound(type) {
        if (type === 'sent') {
            const audio = new Audio('https://res.cloudinary.com/dnhnxvtgu/video/upload/v1754432875/send_iikrdz.mp3');
            audio.play().catch(() => {});
        } else if (type === 'received') {
            const audio = new Audio('https://res.cloudinary.com/dnhnxvtgu/video/upload/v1754432875/received_nz0wg4.mp3');
            audio.play().catch(() => {});
        }
    }
    function simulateReceivedMessage(text, chatMessages) {
        playMessageSound('received');
        const messageElement = document.createElement('div');
        messageElement.className = 'flex justify-start';
        messageElement.innerHTML = `
            <div class="bg-white rounded-2xl rounded-bl-sm px-3 py-2 max-w-[70%] shadow-sm">
                <p class="text-black text-sm">${text}</p>
                <div class="flex items-center justify-end mt-1" style="gap: 4px;">
                    <span class="text-xs text-gray-500" style="font-size: 11px; line-height: 1;">${new Date().toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'})}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none" style="flex-shrink: 0;">
                        <path d="M11.7071 0.292893C12.0976 0.683417 12.0976 1.31658 11.7071 1.70711L4.70711 8.70711C4.31658 9.09763 3.68342 9.09763 3.29289 8.70711L0.292893 5.70711C-0.0976311 5.31658 -0.0976311 4.68342 0.292893 4.29289C0.683417 3.90237 1.31658 3.90237 1.70711 4.29289L4 6.58579L10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893Z" fill="#999"/>
                    </svg>
                </div>
            </div>
        `;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Inicialização
renderApps();
renderDock();
