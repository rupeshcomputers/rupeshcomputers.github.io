// ============================================================================
// common-layout.js : सभी पेजों का कॉमन Header, Navigation Bar, Branch Switcher & Footer
// ============================================================================

const currentPageFile = window.location.pathname.split('/').pop() || 'index.html';

const navLinks = [
    { file: 'index.html', icon: 'fa-house', color: '', label: 'होम' },
    { file: 'services.html', icon: 'fa-layer-group', color: 'text-amber-400', label: 'सेवाएँ' },
    { file: 'lpg-booking.html', icon: 'fa-fire-flame-simple', color: 'text-orange-400', label: 'Indane गैस बुकिंग' },
    { file: 'aadhaar-print.html', icon: 'fa-id-card', color: 'text-sky-400', label: 'आधार प्रिंट' },
    { file: 'pdf-tool.html', icon: 'fa-file-pdf', color: 'text-rose-400', label: 'JPEG to PDF' },
    { file: 'passport-tool.html', icon: 'fa-id-badge', color: 'text-cyan-400', label: 'पासपोर्ट फोटो' },
    { file: 'dob-tool.html', icon: 'fa-cake-candles', color: 'text-purple-400', label: 'DOB Calculator' },
    { file: 'system_info_scanner.html', icon: 'fa-laptop-medical', color: 'text-teal-300', label: 'PC डायग्नोस्टिक' },
    { file: 'scanner-tool.html', icon: 'fa-barcode', color: 'text-emerald-400', label: 'Barcode Reader' },
    { file: 'hindi-tool.html', icon: 'fa-language', color: 'text-pink-400', label: 'Hindi Typing & Kruti Dev' },
    { file: 'card-design.html', icon: 'fa-card-design', color: 'text-amber-300', label: 'शोक पत्र' },
    { file: 'branches.html', icon: 'fa-location-dot', color: 'text-lime-400', label: 'शाखाएँ' }
];

const branchesData = {
    chongribahar: {
        name: 'चोंगरीबहार शाखा',
        address: 'मुख्य मार्ग, चोंगरीबहार (जशपुर, छ.ग.)',
        phone: '6264531630',
        wa: '916264531630',
        map: 'https://maps.google.com/?q=Chongribahar'
    },
    dokda: {
        name: 'दोकड़ा शाखा',
        address: 'मेन रोड, दोकड़ा (जशपुर, छ.ग.)',
        phone: '6264531630',
        wa: '916264531630',
        map: 'https://maps.google.com/?q=Dokda+Jashpur'
    }
};

function switchBranch(branchKey) {
    const b = branchesData[branchKey] || branchesData.chongribahar;
    localStorage.setItem('rc_selected_branch', branchKey);

    const btnC = document.getElementById('btn-chongribahar');
    const btnD = document.getElementById('btn-dokda');
    if (btnC && btnD) {
        if (branchKey === 'dokda') {
            btnD.className = 'px-3 sm:px-4 py-2 rounded-full text-xs font-bold transition bg-blue-600 text-white shadow-md';
            btnC.className = 'px-3 sm:px-4 py-2 rounded-full text-xs font-bold transition bg-slate-200 text-slate-700 hover:bg-slate-300';
        } else {
            btnC.className = 'px-3 sm:px-4 py-2 rounded-full text-xs font-bold transition bg-blue-600 text-white shadow-md';
            btnD.className = 'px-3 sm:px-4 py-2 rounded-full text-xs font-bold transition bg-slate-200 text-slate-700 hover:bg-slate-300';
        }
    }

    const nameEl = document.getElementById('active-branch-name');
    const addrEl = document.getElementById('active-branch-address');
    const callEl = document.getElementById('active-branch-call');
    const phoneTextEl = document.getElementById('active-branch-phone-text');
    const waEl = document.getElementById('active-branch-wa');
    const mapEl = document.getElementById('active-branch-map');

    if (nameEl) nameEl.textContent = b.name;
    if (addrEl) addrEl.textContent = b.address;
    if (callEl) callEl.href = `tel:${b.phone}`;
    if (phoneTextEl) phoneTextEl.textContent = b.phone;
    if (waEl) waEl.href = `https://wa.me/${b.wa}?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20RUPESH%20COMPUTERS`;
    if (mapEl) mapEl.href = b.map;
}

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
                <button id="header-pwa-btn" onclick="if(typeof triggerPwaInstall==='function') triggerPwaInstall()" class="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-extrabold bg-amber-400 hover:bg-amber-500 text-slate-950 shadow-sm transition">
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

    const footerHtml = `
    <footer class="bg-slate-950 text-slate-300 border-t border-slate-800 mt-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs sm:text-sm">
            <div>
                <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center text-lg shadow">
                        <i class="fa-solid fa-laptop-code"></i>
                    </div>
                    <div>
                        <h3 class="text-base font-black text-white tracking-tight">RUPESH COMPUTERS</h3>
                        <p class="text-[11px] text-amber-400 font-bold">चोंगरीबहार & दोकड़ा शाखा (जशपुर, छ.ग.)</p>
                    </div>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed">
                    आधार कार्ड, SBI कियोस्क बैंकिंग, आय-जाति-निवास प्रमाण पत्र, धान पंजीयन, ऑनलाइन फॉर्म व सभी डिजिटल एवं कंप्यूटर सेवाएं एक ही छत के नीचे।
                </p>
            </div>
            <div>
                <h4 class="text-white font-bold text-sm mb-3 uppercase tracking-wider">त्वरित डिजिटल टूल्स</h4>
                <div class="grid grid-cols-2 gap-2 text-xs">
                    <a href="aadhaar-print.html" class="hover:text-amber-400 transition">• आधार प्रिंट</a>
                    <a href="pdf-tool.html" class="hover:text-amber-400 transition">• JPEG to PDF</a>
                    <a href="passport-tool.html" class="hover:text-amber-400 transition">• पासपोर्ट फोटो</a>
                    <a href="dob-tool.html" class="hover:text-amber-400 transition">• DOB Calculator</a>
                    <a href="system_info_scanner.html" class="hover:text-amber-400 transition font-bold text-teal-300">• PC डायग्नोस्टिक</a>
                    <a href="hindi-tool.html" class="hover:text-amber-400 transition">• Hindi Typing</a>
                </div>
            </div>
            <div>
                <h4 class="text-white font-bold text-sm mb-3 uppercase tracking-wider">संपर्क व कार्य समय</h4>
                <ul class="space-y-2 text-xs text-slate-400">
                    <li><i class="fa-solid fa-location-dot text-amber-400 mr-1.5"></i> शाखा 1: मुख्य मार्ग, चोंगरीबहार</li>
                    <li><i class="fa-solid fa-location-dot text-amber-400 mr-1.5"></i> शाखा 2: मेन रोड, दोकड़ा</li>
                    <li><i class="fa-solid fa-clock text-emerald-400 mr-1.5"></i> सोम - शनि: सुबह 10:00 से शाम 6:00 बजे तक (रविवार अवकाश)</li>
                    <li class="pt-1 flex items-center gap-2">
                        <a href="tel:6264531630" class="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold"><i class="fa-solid fa-phone mr-1"></i>6264531630</a>
                        <a href="https://wa.me/916264531630" target="_blank" class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold"><i class="fa-brands fa-whatsapp mr-1"></i>WhatsApp</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bg-black/40 border-t border-slate-900 py-4 px-4 text-center text-xs text-slate-400">
            © ${new Date().getFullYear()} <strong class="text-white">RUPESH COMPUTERS</strong> • चोंगरीबहार एवं दोकड़ा शाखा | सर्वाधिकार सुरक्षित
        </div>
    </footer>`;

    const headerEl = document.getElementById('site-header');
    const footerEl = document.getElementById('site-footer');
    if (headerEl) headerEl.innerHTML = headerHtml;
    if (footerEl) footerEl.innerHTML = footerHtml;

    const savedBranch = localStorage.getItem('rc_selected_branch') || 'chongribahar';
    switchBranch(savedBranch);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectCommonLayout);
} else {
    injectCommonLayout();
}
