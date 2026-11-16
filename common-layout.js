// ============================================================================
// common-layout.js : सभी 10 पेजों का कॉमन Header, Navigation Bar, Footer & Chatbot
// ============================================================================

const currentPageFile = window.location.pathname.split('/').pop() || 'index.html';

const navLinks = [
    { file: 'index.html', icon: 'fa-house', color: '', label: 'होम' },
    { file: 'services.html', icon: 'fa-layer-group', color: 'text-amber-400', label: 'सेवाएँ' },
    { file: 'lpg-booking.html', icon: 'fa-fire-flame-simple', color: 'text-orange-400', label: 'Indane गैस बुकिंग' },
    { file: 'pdf-tool.html', icon: 'fa-file-pdf', color: 'text-rose-400', label: 'JPEG to PDF' },
    { file: 'passport-tool.html', icon: 'fa-id-badge', color: 'text-cyan-400', label: 'पासपोर्ट फोटो' },
    { file: 'dob-tool.html', icon: 'fa-cake-candles', color: 'text-purple-400', label: 'DOB Calculator' },
    { file: 'scanner-tool.html', icon: 'fa-barcode', color: 'text-emerald-400', label: 'Barcode Reader' },
    { file: 'hindi-tool.html', icon: 'fa-language', color: 'text-pink-400', label: 'Hindi Typing & Kruti Dev' },
    { file: 'pwa-app.html', icon: 'fa-mobile-screen-button', color: 'text-amber-300', label: 'मोबाइल ऐप' },
    { file: 'branches.html', icon: 'fa-location-dot', color: 'text-lime-400', label: 'शाखाएँ' }
];

function injectCommonLayout() {
    const headerHtml = `
    <div class="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white text-xs sm:text-sm py-2 px-4 shadow-inner">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <div class="flex items-center gap-2 overflow-hidden whitespace-nowrap w-full">
                <span class="bg-amber-500 text-slate-950 font-black px-2 py-0.5 rounded text-[10px] uppercase tracking-wider shrink-0">सुचना</span>
                <marquee behavior="scroll" direction="left" class="font-medium text-slate-200">
                    🙏 रूपेश कंप्यूटर्स (चोंगरीबहार और दोकड़ा) में आपका स्वागत है! | आधार कार्ड, SBI कियोस्क, आय-जाति-निवास प्रमाण पत्र एवं सभी ऑनलाइन कार्य तुरंत कराए जाते हैं। 📢 सरकारी वैकेंसी और ताजा जानकारी के लिए हमारे व्हाट्सएप चैनल से जरूर जुड़ें! | समय: सोम-शनि (सुबह 10:00 से शाम 6:00 बजे तक) | रविवार अवकाश।
                </marquee>
            </div>
        </div>
    </div>
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
            <a href="index.html" class="flex items-center gap-3 text-left focus:outline-none">
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-blue-700 to-indigo-800 text-white flex items-center justify-center text-lg sm:text-xl shadow-lg">
                    <i class="fa-solid fa-laptop-code"></i>
                </div>
                <div>
                    <h1 class="text-base sm:text-xl font-black tracking-tight text-slate-900">RUPESH COMPUTERS</h1>
                    <p class="text-[10px] sm:text-[11px] font-bold text-blue-700 tracking-wider uppercase">चोंगरीबहार & दोकड़ा शाखा</p>
                </div>
            </a>
            <div class="flex items-center gap-1.5 sm:gap-2">
                <button id="header-pwa-btn" onclick="triggerPwaInstall()" class="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-extrabold bg-amber-400 hover:bg-amber-500 text-slate-950 shadow-sm transition">
                    <i class="fa-solid fa-download"></i> ऐप इंस्टॉल करें
                </button>
                <button id="btn-chongribahar" onclick="switchBranch('chongribahar')" class="px-3 sm:px-4 py-2 rounded-full text-xs font-bold transition bg-blue-600 text-white shadow-md">चोंगरीबहार</button>
                <button id="btn-dokda" onclick="switchBranch('dokda')" class="px-3 sm:px-4 py-2 rounded-full text-xs font-bold transition bg-slate-200 text-slate-700 hover:bg-slate-300">दोकड़ा</button>
            </div>
        </div>
        <div class="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border-t border-slate-800 px-2.5 sm:px-6 py-2.5 shadow-inner">
            <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
                ${navLinks.map(n => {
                    const active = (currentPageFile === n.file) || (currentPageFile === '' && n.file === 'index.html');
                    return `<a href="${n.file}" class="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs ${active ? 'font-extrabold bg-amber-400 text-slate-950 shadow-md' : 'font-bold bg-white/10 text-slate-100 hover:bg-white/20'} transition flex items-center gap-1.5"><i class="fa-solid ${n.icon} ${active ? '' : n.color}"></i> ${n.label}</a>`;
                }).join('')}
            </div>
        </div>
    </header>
    <div class="bg-blue-950 text-white py-2.5 px-4 border-b border-blue-900">
        <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs">
            <div class="flex items-center gap-2">
                <span class="bg-amber-400 text-slate-950 font-black px-2 py-0.5 rounded text-[10px]">चयनित शाखा</span>
                <span id="active-branch-name" class="font-bold text-amber-300">चोंगरीबहार शाखा</span>
                <span class="hidden sm:inline text-slate-400">|</span>
                <span id="active-branch-address" class="hidden sm:inline text-slate-200">मुख्य मार्ग, चोंगरीबहार (जशपुर, छ.ग.)</span>
            </div>
            <div class="flex items-center gap-2">
                <a id="active-branch-call" href="tel:6264531630" class="inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-500 text-white font-bold px-2.5 py-1 rounded-lg transition"><i class="fa-solid fa-phone"></i> <span id="active-branch-phone-text">6264531630</span></a>
                <a id="active-branch-wa" href="https://wa.me/916264531630?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20RUPESH%20COMPUTERS" target="_blank" class="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-2.5 py-1 rounded-lg transition"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
                <a id="active-branch-map" href="https://maps.google.com/?q=Chongribahar" target="_blank" class="inline-flex items-center gap-1 bg-white/10 hover:bg-white/20 text-amber-300 font-bold px-2.5 py-1 rounded-lg transition"><i class="fa-solid fa-location-dot"></i> लोकेशन</a>
            </div>
        </div>
    </div>`;

    document.getElementById('site-header').innerHTML = headerHtml;
}

window.addEventListener('DOMContentLoaded', injectCommonLayout);
