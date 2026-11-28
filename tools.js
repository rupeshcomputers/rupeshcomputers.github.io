// ============================================================================
// tools.js : आपके सभी टूल्स और सेवाओं का पूरा JavaScript कोड
// ============================================================================

function showToast(msg) {
            const toast = document.getElementById('custom-toast');
            const msgEl = document.getElementById('custom-toast-msg');
            if (!toast || !msgEl) return;
            msgEl.textContent = msg;
            toast.classList.remove('hidden');
            toast.classList.add('flex');
            clearTimeout(window._toastTimer);
            window._toastTimer = setTimeout(() => {
                toast.classList.add('hidden');
                toast.classList.remove('flex');
            }, 3500);
        }

const branchData = {
    "chongribahar": {
        "name": "चोंगरीबहार शाखा",
        "address": "मुख्य मार्ग, चोंगरीबहार (जशपुर, छ.ग.)",
        "phone": "6264531630",
        "wa": "https://wa.me/916264531630?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20RUPESH%20COMPUTERS",
        "map": "https://maps.google.com/?q=Chongribahar"
    },
    "dokda": {
        "name": "दोकड़ा शाखा",
        "address": "ग्राम - दोकड़ा, मुख्य मार्ग (जशपुर, छ.ग.)",
        "phone": "9713926390",
        "wa": "https://wa.me/919713926390?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20RUPESH%20COMPUTERS",
        "map": "https://maps.google.com/?q=Dokda"
    }
};
function switchBranch(branchKey) {
            const data = branchData[branchKey] || branchData.chongribahar;
            const btnC = document.getElementById('btn-chongribahar');
            const btnD = document.getElementById('btn-dokda');

            if (branchKey === 'chongribahar') {
                btnC.className = "px-3 sm:px-4 py-2 rounded-full text-xs font-bold transition bg-blue-600 text-white shadow-md";
                btnD.className = "px-3 sm:px-4 py-2 rounded-full text-xs font-bold transition bg-slate-200 text-slate-700 hover:bg-slate-300";
            } else {
                btnD.className = "px-3 sm:px-4 py-2 rounded-full text-xs font-bold transition bg-blue-600 text-white shadow-md";
                btnC.className = "px-3 sm:px-4 py-2 rounded-full text-xs font-bold transition bg-slate-200 text-slate-700 hover:bg-slate-300";
            }

            document.getElementById('active-branch-name').textContent = data.name;
            document.getElementById('active-branch-address').textContent = data.address;
            document.getElementById('active-branch-phone-text').textContent = data.phone;
            document.getElementById('active-branch-call').href = `tel:${data.phone}`;
            document.getElementById('active-branch-wa').href = data.wa;
            document.getElementById('active-branch-map').href = data.map;
            document.getElementById('mobile-call-btn').href = `tel:${data.phone}`;
            document.getElementById('mobile-wa-btn').href = data.wa;
        }

function openPage(pageId) {
    const map = {
        'home': 'index.html',
        'services': 'services.html',
        'lpg-booking': 'lpg-booking.html',
        'pdf-tool': 'pdf-tool.html',
        'passport-tool': 'passport-tool.html',
        'dob-tool': 'dob-tool.html',
        'scanner-tool': 'scanner-tool.html',
        'hindi-tool': 'hindi-tool.html',
        'pwa-app': 'pwa-app.html',
        'branches': 'branches.html'
    };
    if (map[pageId]) window.location.href = map[pageId];
}

const services = [
    {
        "title": "SBI कियोस्क (पासबुक प्रिंट एवं माइक्रो एटीएम)",
        "icon": "fa-building-columns",
        "color": "bg-blue-100 text-blue-700",
        "docs": [
            "बैंक खाता खोलना एवं आधार सीडिंग",
            "पैसे जमा करना एवं निकासी (Micro ATM)",
            "पासबुक प्रिंटिंग की सुविधा"
        ]
    },
    {
        "title": "आधार अपडेट सेंटर",
        "icon": "fa-fingerprint",
        "color": "bg-amber-100 text-amber-700",
        "docs": [
            "नया आधार नामांकन (New Enrollment)",
            "आधार में मोबाइल नंबर एवं नाम सुधार",
            "बायोमेट्रिक अपडेट (फिंगरप्रिंट/आंख)",
            "पता और जन्मतिथि संशोधन"
        ]
    },
    {
        "title": "परिवहन सुविधा (लर्निंग लाइसेंस)",
        "icon": "fa-car",
        "color": "bg-stone-100 text-stone-700",
        "docs": [
            "तुरंत लर्निंग लाइसेंस (Learning Licence) बनवाना",
            "ड्राइविंग लाइसेंस (DL) आवेदन",
            "वाहन ट्रांसफर एवं फिटनेस कार्य",
            "आधार कार्ड और फोटो आवश्यक"
        ]
    },
    {
        "title": "जाति प्रमाण पत्र (Caste Certificate)",
        "icon": "fa-file-shield",
        "color": "bg-indigo-100 text-indigo-700",
        "docs": [
            "<b>1) पटवारी एवं सरपंच का प्रतिवेदन</b>",
            "<b>2) स्व-घोषणा पत्र</b>",
            "<b>3) अधिकार अभिलेख</b>",
            "<b>4) P-6 जमाबंदी / मिसल (1950 के पूर्व का दस्तावेज)</b>",
            "<b>5) कक्षा 5वीं/8वीं एवं 10वीं अंकसूची या दाखिल ख़ारिज पंजी</b>",
            "<b>6) वंशावली सूची की मूल प्रति</b>",
            "<b>7) वर्तमान वर्ष का बी-1 की मूल प्रति</b>",
            "<b>8) पहचान पत्र (आधार कार्ड / राशन कार्ड / वोटर आईडी)</b>"
        ]
    },
    {
        "title": "निवास प्रमाण पत्र (Domicile Certificate)",
        "icon": "fa-house-chimney",
        "color": "bg-violet-100 text-violet-700",
        "docs": [
            "<b>1) पटवारी एवं सरपंच का प्रतिवेदन</b>",
            "<b>2) शैक्षणिक प्रमाण पत्र (कक्षा 5वीं / 8वीं / 10वीं / 12वीं अंकसूची)</b>",
            "<b>3) वर्तमान वर्ष का बी-1</b>",
            "<b>4) स्व-घोषणा पत्र</b>",
            "<b>5) पहचान पत्र (आधार कार्ड / राशन कार्ड / मतदाता परिचय पत्र)</b>"
        ]
    },
    {
        "title": "आय प्रमाण पत्र (Income Certificate)",
        "icon": "fa-file-invoice-dollar",
        "color": "bg-emerald-100 text-emerald-700",
        "docs": [
            "<b>1) पटवारी का प्रतिवेदन</b>",
            "<b>2) शैक्षणिक प्रमाण पत्र (कक्षा 5वीं / 8वीं / 10वीं)</b>",
            "<b>3) स्व-घोषणा पत्र</b>",
            "<b>4) वर्तमान वर्ष का बी-1 (यदि कृषि से आय हो)</b>",
            "<b>5) पहचान पत्र (आधार कार्ड / राशन कार्ड / मतदाता परिचय पत्र)</b>"
        ]
    },
    {
        "title": "नया पैन कार्ड (UTI / NSDL)",
        "icon": "fa-id-card",
        "color": "bg-teal-100 text-teal-700",
        "docs": [
            "नया पैन कार्ड बनवाना",
            "आधार कार्ड एवं 2 पासपोर्ट फोटो",
            "पैन सुधार (Correction) कार्य"
        ]
    },
    {
        "title": "आयुष्मान कार्ड (Ayushman Card)",
        "icon": "fa-notes-medical",
        "color": "bg-rose-100 text-rose-700",
        "docs": [
            "आधार कार्ड",
            "राशन कार्ड (सूची में नाम होना अनिवार्य)",
            "मोबाइल नंबर (OTP के लिए)"
        ]
    },
    {
        "title": "ई-श्रम कार्ड (e-Shram)",
        "icon": "fa-helmet-safety",
        "color": "bg-cyan-100 text-cyan-700",
        "docs": [
            "आधार कार्ड (मोबाइल लिंक होना चाहिए)",
            "बैंक पासबुक विवरण",
            "असंगठित श्रमिकों का पंजीयन"
        ]
    }
];
function renderServices(list = services) {
            const container = document.getElementById('services-container');
            if (!container) return;
            container.innerHTML = list.map(service => `
                <div class="glass-card rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition flex flex-col justify-between border border-slate-200 bg-white">
                    <div>
                        <div class="flex items-center gap-4 mb-4">
                            <div class="w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center text-2xl shrink-0 shadow-sm">
                                <i class="fa-solid ${service.icon}"></i>
                            </div>
                            <h3 class="text-lg sm:text-xl font-black text-slate-900 leading-snug">${service.title}</h3>
                        </div>
                        <div class="mt-4 pt-4 border-t border-slate-100">
                            <h4 class="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">आवश्यक दस्तावेज / सुविधाएं:</h4>
                            <ul class="space-y-1.5">
                                ${service.docs.map(doc => `<li class="text-xs sm:text-sm text-slate-600 flex items-start gap-2"><i class="fa-solid fa-circle-check text-blue-600 text-[10px] mt-1 shrink-0"></i> <span>${doc}</span></li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="mt-6 pt-4 flex flex-col gap-2">
                        <button onclick="shareOnWhatsApp('${service.title.replace(/'/g, "\\'")}', \`${service.docs.join(', ')}\`)" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition flex items-center justify-center gap-1.5 shadow-sm">
                            <i class="fa-brands fa-whatsapp text-sm"></i> WhatsApp पर यह लिस्ट भेजें
                        </button>
                    </div>
                </div>
            `).join('');
        }
function filterServices() {
            const q = (document.getElementById('service-search')?.value || '').toLowerCase().trim();
            if (!q) {
                renderServices(services);
                return;
            }
            const filtered = services.filter(s =>
                s.title.toLowerCase().includes(q) ||
                s.docs.some(d => d.toLowerCase().includes(q))
            );
            renderServices(filtered);
        }
function shareOnWhatsApp(serviceTitle, docsText) {
            const cleanDocs = docsText.replace(/<[^>]*>?/gm, '');
            const message = `*RUPESH COMPUTERS (चोंगरीबहार और दोकड़ा)*\n\n📌 *सेवा:* ${serviceTitle}\n\n*आवश्यक दस्तावेज / जानकारी:*\n- ${cleanDocs.split(', ').join('\n- ')}\n\n⏰ समय: सोम-शनि (सुबह 10 से शाम 6)\nचोंगरीबहार: 6264531630 | दोकड़ा: 9713926390`;
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
        }

let selectedImages = [];
function handleImgSelection(event) {
            const files = event.target.files;
            if (!files.length) return;
            for (let file of files) {
                selectedImages.push(file);
            }
            renderImagePreviews();
        }
function renderImagePreviews() {
            const container = document.getElementById('pdf-image-list');
            const previewContainer = document.getElementById('pdf-preview-container');
            if (selectedImages.length > 0) {
                previewContainer.classList.remove('hidden');
                previewContainer.classList.add('flex');
            } else {
                previewContainer.classList.add('hidden');
                previewContainer.classList.remove('flex');
            }
            container.innerHTML = selectedImages.map((file, index) => `
                <div class="relative w-20 h-20 rounded-xl overflow-hidden border border-slate-300 shadow-sm bg-white">
                    <img src="${URL.createObjectURL(file)}" class="w-full h-full object-cover">
                    <button onclick="removeImage(${index})" class="absolute top-1 right-1 bg-red-600 hover:bg-red-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shadow transition">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            `).join('');
        }
function removeImage(index) {
            selectedImages.splice(index, 1);
            renderImagePreviews();
        }
async function generatePdf() {
            if (selectedImages.length === 0) return;
            const statusDiv = document.getElementById('img2pdf-status');
            statusDiv.classList.remove('hidden');
            statusDiv.innerText = "PDF तैयार हो रहा है, कृपया प्रतीक्षा करें...";

            try {
                const { PDFDocument } = PDFLib;
                const pdfDoc = await PDFDocument.create();

                for (let file of selectedImages) {
                    const imageBytes = await file.arrayBuffer();
                    let image;
                    if (file.type === 'image/png') {
                        image = await pdfDoc.embedPng(imageBytes);
                    } else {
                        image = await pdfDoc.embedJpg(imageBytes);
                    }
                    const page = pdfDoc.addPage([image.width, image.height]);
                    page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
                }

                const pdfBytes = await pdfDoc.save();
                const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'Rupesh_Computers_Document.pdf';
                link.click();

                statusDiv.innerText = "✅ PDF सफलतापूर्वक डाउनलोड हो गया है!";
                selectedImages = [];
                renderImagePreviews();
            } catch (error) {
                statusDiv.innerText = "❌ PDF बनाने में त्रुटि हुई। कृपया केवल JPG या PNG फोटो चुनें।";
            }
        }

let imageToResize = null;
function previewImageToResize(event) {
            const file = event.target.files[0];
            if (!file) return;
            imageToResize = file;
            document.getElementById('resize-controls').classList.remove('hidden');
            document.getElementById('resize-controls').classList.add('flex');
        }
function resizeImage() {
            if (!imageToResize) return;
            const targetKB = parseInt(document.getElementById('target-kb').value) || 40;
            const resultDiv = document.getElementById('resize-result');
            resultDiv.innerHTML = `<p class="text-sm font-bold text-emerald-700 bg-emerald-50 py-2 rounded text-center">फोटो कॉम्प्रेस की जा रही है...</p>`;

            const reader = new FileReader();
            reader.onload = function(e) {
                const img = new Image();
                img.onload = function() {
                    const canvas = document.createElement('canvas');
                    let width = img.width;
                    let height = img.height;
                    let quality = 0.9;
                    const maxDim = 900;
                    if (width > maxDim || height > maxDim) {
                        if (width > height) {
                            height = Math.round((height * maxDim) / width);
                            width = maxDim;
                        } else {
                            width = Math.round((width * maxDim) / height);
                            height = maxDim;
                        }
                    }
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);

                    let dataUrl = canvas.toDataURL('image/jpeg', quality);
                    let base64Length = dataUrl.length - (dataUrl.indexOf(',') + 1);
                    let currentKB = (base64Length * 3) / 4 / 1024;

                    while (currentKB > targetKB && quality > 0.1) {
                        quality -= 0.08;
                        dataUrl = canvas.toDataURL('image/jpeg', quality);
                        base64Length = dataUrl.length - (dataUrl.indexOf(',') + 1);
                        currentKB = (base64Length * 3) / 4 / 1024;
                    }

                    resultDiv.innerHTML = `
                        <div class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-center">
                            <p class="text-sm font-bold text-emerald-800 mb-2">✅ फोटो का साइज लगभग ${Math.round(currentKB)} KB हो गया है!</p>
                            <a href="${dataUrl}" download="compressed_photo.jpg" class="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-lg text-xs transition shadow">
                                फोटो डाउनलोड करें
                            </a>
                        </div>
                    `;
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(imageToResize);
        }

let passportFile = null;
function loadPassportImage(event) {
            const file = event.target.files[0];
            if (!file) return;
            passportFile = file;
            showToast("फोटो लोड हो गई! अब 'पासपोर्ट शीट तैयार करें' दबाएं।");
        }
function generatePassportSheet() {
            if (!passportFile) {
                showToast("कृपया पहले पासपोर्ट फोटो चुनें!");
                return;
            }
            const count = parseInt(document.getElementById('passport-count').value) || 12;
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = new Image();
                img.onload = function() {
                    const canvas = document.createElement('canvas');
                    canvas.width = 1800;
                    canvas.height = 1200;
                    const ctx = canvas.getContext('2d');
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);

                    const cols = count === 6 ? 3 : 4;
                    const rows = count === 6 ? 2 : 3;
                    const cellW = Math.floor((canvas.width - 100) / cols);
                    const cellH = Math.floor((canvas.height - 80) / rows);
                    const photoW = 390;
                    const photoH = 490;
                    const scale = count === 6 ? 1.0 : 0.72;
                    const w = Math.round(photoW * scale);
                    const h = Math.round(photoH * scale);

                    for (let r = 0; r < rows; r++) {
                        for (let c = 0; c < cols; c++) {
                            const x = 50 + c * cellW + Math.floor((cellW - w) / 2);
                            const y = 40 + r * cellH + Math.floor((cellH - h) / 2);
                            ctx.drawImage(img, x, y, w, h);
                            ctx.strokeStyle = '#cbd5e1';
                            ctx.lineWidth = 2;
                            ctx.strokeRect(x, y, w, h);
                        }
                    }

                    const sheetUrl = canvas.toDataURL('image/jpeg', 0.95);
                    document.getElementById('passport-preview-img').src = sheetUrl;
                    document.getElementById('passport-download-btn').href = sheetUrl;
                    document.getElementById('passport-result').classList.remove('hidden');
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(passportFile);
        }

function calculateAge() {
            const dob = document.getElementById('dob-input').value;
            const targetDob = document.getElementById('target-date-input').value;
            const resultDiv = document.getElementById('age-result');

            if (!dob) {
                resultDiv.classList.remove('hidden');
                resultDiv.innerText = "⚠️ कृपया अपनी जन्मतिथि (DOB) चुनें!";
                return;
            }

            const birthDate = new Date(dob);
            const compareDate = targetDob ? new Date(targetDob) : new Date();

            if (birthDate > compareDate) {
                resultDiv.classList.remove('hidden');
                resultDiv.innerText = "❌ जन्मतिथि भविष्य की तारीख नहीं हो सकती!";
                return;
            }

            let years = compareDate.getFullYear() - birthDate.getFullYear();
            let months = compareDate.getMonth() - birthDate.getMonth();
            let days = compareDate.getDate() - birthDate.getDate();

            if (days < 0) {
                months--;
                days += new Date(compareDate.getFullYear(), compareDate.getMonth(), 0).getDate();
            }
            if (months < 0) {
                years--;
                months += 12;
            }

            resultDiv.classList.remove('hidden');
            resultDiv.innerHTML = `🎉 सटीक आयु: <br><span class="text-base font-black">${years} वर्ष, ${months} महीने, ${days} दिन</span>`;
        }
function generateQRCodeOnly() {
            const text = document.getElementById('code-text-input').value.trim();
            if (!text) {
                showToast("कृपया पहले टेक्स्ट या नंबर लिखें!");
                return;
            }
            document.getElementById('generated-img').src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(text)}`;
            document.getElementById('code-result-container').classList.remove('hidden');
        }
function generateBarcodeOnly() {
            const text = document.getElementById('code-text-input').value.trim();
            if (!text) {
                showToast("कृपया पहले टेक्स्ट या नंबर लिखें!");
                return;
            }
            document.getElementById('generated-img').src = `https://bwipjs-api.metafloor.com/?bcid=code128&text=${encodeURIComponent(text)}&scale=2&height=45&includetext`;
            document.getElementById('code-result-container').classList.remove('hidden');
        }
function scanQRImage(event) {
            const file = event.target.files[0];
            const resultDiv = document.getElementById('scanner-result');
            if (!file) return;

            resultDiv.innerHTML = "🔍 QR / बारकोड स्कैन किया जा रहा है...";

            if ('BarcodeDetector' in window) {
                const barcodeDetector = new BarcodeDetector({ formats: ['qr_code', 'code_128', 'ean_13'] });
                const img = new Image();
                img.onload = function() {
                    barcodeDetector.detect(img)
                        .then(decodedItems => {
                            if (decodedItems.length > 0) {
                                const val = decodedItems[0].rawValue;
                                if (val.startsWith('http://') || val.startsWith('https://')) {
                                    resultDiv.innerHTML = `✅ <a href="${val}" target="_blank" class="text-blue-600 font-bold underline">${val}</a>`;
                                } else {
                                    resultDiv.innerHTML = `✅ परिणाम: <span class="font-bold text-slate-900 ml-1">${val}</span>`;
                                }
                            } else {
                                resultDiv.innerHTML = "⚠️ इस फोटो में QR या बारकोड नहीं मिला। कृपया साफ फोटो चुनें।";
                            }
                        })
                        .catch(() => {
                            resultDiv.innerHTML = "❌ स्कैन करने में असमर्थ। कृपया दूसरी फोटो चुनें।";
                        });
                };
                img.src = URL.createObjectURL(file);
            } else {
                resultDiv.innerHTML = "✅ फोटो लोड हो गई है (आपका ब्राउज़र सीधे BarcodeDetector सपोर्ट नहीं करता, कृपया Google Chrome का उपयोग करें)।";
            }
        }
function copyTextField(elementId) {
            const el = document.getElementById(elementId);
            if (!el || !el.value.trim()) {
                showToast("कॉपी करने के लिए पहले कुछ टेक्स्ट लिखें!");
                return;
            }
            el.select();
            el.setSelectionRange(0, 99999);
            try {
                document.execCommand('copy');
                showToast("✅ टेक्स्ट सफलतापूर्वक कॉपी हो गया!");
            } catch (e) {
                showToast("कॉपी करने के लिए Ctrl+C दबाएं।");
            }
        }

let lastTranslitWord = "";
async function handleHindiTransliteration(event) {
            if (event.key !== ' ' && event.key !== 'Enter') return;
            const box = document.getElementById('hindi-typing-box');
            const cursorPos = box.selectionStart;
            const textBefore = box.value.slice(0, cursorPos);
            const textAfter = box.value.slice(cursorPos);

            const match = textBefore.match(/([a-zA-Z]+)([\s\n])$/);
            if (!match) return;

            const engWord = match[1];
            const separator = match[2];
            if (engWord === lastTranslitWord) return;
            lastTranslitWord = engWord;

            try {
                const url = `https://inputtools.google.com/request?text=${encodeURIComponent(engWord)}&itc=hi-t-i0-und&num=4&cp=0&cs=1&ie=utf-8&oe=utf-8`;
                const res = await fetch(url);
                const data = await res.json();
                if (data[0] === 'SUCCESS' && data[1]?.[0]?.[1]?.length > 0) {
                    const suggestions = data[1][0][1];
                    const bestHindi = suggestions[0];
                    const replacedBefore = textBefore.slice(0, textBefore.length - match[0].length) + bestHindi + separator;
                    box.value = replacedBefore + textAfter;
                    box.selectionStart = box.selectionEnd = replacedBefore.length;

                    const sugDiv = document.getElementById('hindi-word-suggestions');
                    if (sugDiv) {
                        sugDiv.innerHTML = `<span class="font-bold text-slate-600">विकल्प चुनें:</span> ` +
                            suggestions.map(w => `<button type="button" onclick="replaceLastHindiWord('${bestHindi}', '${w}')" class="px-2.5 py-0.5 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-800 border border-pink-200 font-bold">${w}</button>`).join('');
                    }
                }
            } catch (e) {
                // Silent fallback if offline
            }
        }
function replaceLastHindiWord(oldWord, newWord) {
            const box = document.getElementById('hindi-typing-box');
            const idx = box.value.lastIndexOf(oldWord);
            if (idx !== -1) {
                box.value = box.value.slice(0, idx) + newWord + box.value.slice(idx + oldWord.length);
            }
        }
function startHindiVoiceTyping() {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (!SpeechRecognition) {
                showToast("आपका ब्राउज़र वॉइस टाइपिंग सपोर्ट नहीं करता। कृपया Google Chrome का उपयोग करें।");
                return;
            }
            const recognition = new SpeechRecognition();
            recognition.lang = 'hi-IN';
            recognition.interimResults = false;
            const btn = document.getElementById('hindi-voice-btn');
            btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> सुन रहा है...`;

            recognition.onresult = (event) => {
                const spoken = event.results[0][0].transcript;
                const box = document.getElementById('hindi-typing-box');
                box.value = (box.value ? box.value + ' ' : '') + spoken;
                showToast("✅ आवाज से हिंदी लिख दी गई!");
            };
            recognition.onerror = () => {
                showToast("माइक अनुमति दें या पुनः प्रयास करें।");
            };
            recognition.onend = () => {
                btn.innerHTML = `<i class="fa-solid fa-microphone"></i> बोलकर लिखें`;
            };
            recognition.start();
        }
function convertKrutiToUnicode() {
            let str = document.getElementById('krutidev-text').value;
            if (!str.trim()) {
                showToast("कृपया पहले Kruti Dev 010 बॉक्स में टेक्स्ट लिखें या पेस्ट करें!");
                return;
            }

            const krutiMap = [
                ["ñ", "॰"], ["Q+Z", "फ़्"], ["sas", "सा"], ["aa", "ा"], ["ZZ", "र्"],
                ["=kk", "ौ"], ["f=k", "कि"], ["[k", "ख"], ["[", "ख्"], ["x", "ग"],
                ["?", "घ"], ["³", "ङ"], ["p", "च"], ["N", "छ"], ["t", "ज"],
                [">", "झ"], ["¥", "ञ"], ["V", "ट"], ["B", "ठ"], ["M", "ड"],
                ["<", "ढ"], [".k", "ण"], ["r", "त"], ["Fk", "थ"], ["F", "थ्"],
                ["n", "द"], ["/", "ध"], ["u", "न"], ["i", "प"], ["Q", "फ"],
                ["c", "ब"], ["Hk", "भ"], ["H", "भ्"], ["e", "म"], [";", "य"],
                ["j", "र"], ["y", "ल"], ["o", "व"], ["'k", "श"], ["'", "श्"],
                ["\"k", "ष"], ["\"", "ष्"], ["l", "स"], ["g", "ह"], ["{k", "क्ष"],
                ["{", "क्ष्"], ["=", "त्र"], ["«", "त्र्"], ["K", "ज्ञ"], ["J", "श्र"],
                [":", "रु"], ["d", "क"], ["D", "क्"], ["X", "ग्"], ["?", "घ"], ["P", "च्"],
                ["T", "ज्"], ["R", "त्"], ["U", "न्"], ["I", "प्"], ["C", "ब्"],
                ["E", "म्"], ["Y", "ल्"], ["O", "व्"], ["L", "स्"], ["G", "ह्"],
                ["kS", "ौ"], ["ks", "ो"], ["k", "ा"], ["h", "ी"], ["q", "ु"],
                ["w", "ू"], ["`", "ृ"], ["s", "े"], ["S", "ै"], ["a", "ं"],
                ["¡", "ँ"], ["%", "ः"], ["~", "्"], ["^", "‘"], ["*", "’"],
                ["A", "।"], ["-", "."], ["&", "-"]
            ];

            str = str.replace(/f(\[k|\.k|Fk|Hk|'k|"k|\{k|[kKdD\[xX\?pPNtT>VBM<rRFn\/uUiIQcCHeE;jyYoO'"lLgG\{J=K])/g, "$1ि");

            for (const [k, u] of krutiMap) {
                str = str.split(k).join(u);
            }

            str = str.replace(/([क-हक़-य़])([ा-ौृ्]*)Z/g, "र्$1$2");
            str = str.replace(/ाे/g, "ो").replace(/ाै/g, "ौ").replace(/अा/g, "आ").replace(/आे/g, "ओ").replace(/आै/g, "औ");
            document.getElementById('unicode-text').value = str;
            showToast("✅ Kruti Dev से Mangal (Unicode) में बदल दिया गया!");
        }
function convertUnicodeToKruti() {
            let str = document.getElementById('unicode-text').value;
            if (!str.trim()) {
                showToast("कृपया पहले Mangal (Unicode) बॉक्स में हिंदी टेक्स्ट लिखें!");
                return;
            }

            str = str.replace(/र्([क-हक़-य़])([ा-ौृ]*)/g, "$1$2Z");
            str = str.replace(/([क-हक़-य़क्षत्रज्ञ])ि/g, "f$1");

            const unicodeToKrutiMap = [
                ["क्ष्", "{"], ["क्ष", "{k"], ["त्र्", "«"], ["त्र", "="], ["ज्ञ", "K"], ["श्र", "J"],
                ["रु", ":"], ["क्", "D"], ["क", "d"], ["ख्", "["], ["ख", "[k"], ["ग्", "X"], ["ग", "x"],
                ["घ", "?"], ["ङ", "³"], ["च्", "P"], ["च", "p"], ["छ", "N"], ["ज्", "T"],
                ["ज", "t"], ["झ", ">"], ["ञ", "¥"], ["ट", "V"], ["ठ", "B"], ["ड", "M"],
                ["ढ", "<"], ["ण", ".k"], ["त्", "R"], ["त", "r"], ["थ्", "F"], ["थ", "Fk"],
                ["द", "n"], ["ध", "/"], ["न्", "U"], ["न", "u"], ["प्", "I"], ["प", "i"],
                ["फ", "Q"], ["ब्", "C"], ["ब", "c"], ["भ्", "H"], ["भ", "Hk"], ["म्", "E"],
                ["म", "e"], ["य", ";"], ["र", "j"], ["ल्", "Y"], ["ल", "y"], ["व्", "O"],
                ["व", "o"], ["श्", "'"], ["श", "'k"], ["ष्", "\""], ["ष", "\"k"], ["स्", "L"],
                ["स", "l"], ["ह्", "G"], ["ह", "g"], ["ो", "ks"], ["ौ", "kS"], ["ा", "k"],
                ["ी", "h"], ["ु", "q"], ["ू", "w"], ["ृ", "`"], ["े", "s"], ["ै", "S"],
                ["ं", "a"], ["ँ", "¡"], ["ः", "%"], ["्", "~"], ["।", "A"]
            ];

            for (const [u, k] of unicodeToKrutiMap) {
                str = str.split(u).join(k);
            }

            document.getElementById('krutidev-text').value = str;
            showToast("✅ Mangal (Unicode) से Kruti Dev में बदल दिया गया!");
        }

let deferredPrompt = null;
function setupPwa() {
            const manifest = {
                name: "RUPESH COMPUTERS - डिजिटल सेवा केंद्र",
                short_name: "Rupesh Computers",
                start_url: "./",
                display: "standalone",
                background_color: "#0f172a",
                theme_color: "#1e3a8a",
                icons: [
                    {
                        src: "data:image/svg+xml;charset=utf-8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect width="192" height="192" rx="40" fill="#1e3a8a"/><text x="96" y="122" font-size="88" font-family="Arial, sans-serif" font-weight="bold" fill="#fbbf24" text-anchor="middle">RC</text></svg>'),
                        sizes: "192x192",
                        type: "image/svg+xml"
                    }
                ]
            };
            const manifestBlob = new Blob([JSON.stringify(manifest)], { type: 'application/json' });
            const manifestLink = document.getElementById('pwa-manifest-link');
            if (manifestLink) {
                manifestLink.href = URL.createObjectURL(manifestBlob);
            }

            window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                deferredPrompt = e;
                const hdrBtn = document.getElementById('header-pwa-btn');
                if (hdrBtn) hdrBtn.classList.remove('hidden');
            });

            if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
                const swCode = `
                    self.addEventListener('install', (e) => self.skipWaiting());
                    self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
                    self.addEventListener('fetch', (e) => {
                        e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
                    });
                `;
                const swBlob = new Blob([swCode], { type: 'application/javascript' });
                navigator.serviceWorker.register(URL.createObjectURL(swBlob)).catch(() => {});
            }
        }
async function triggerPwaInstall() {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                if (outcome === 'accepted') {
                    showToast("✅ RUPESH COMPUTERS ऐप इंस्टॉल हो गया है!");
                }
                deferredPrompt = null;
            } else {
                openPage('pwa-app');
                showToast("ऐप इंस्टॉल करने के लिए ब्राउज़र के 3 डॉट (⋮) मेनू में 'Install app / Add to Home screen' दबाएं।");
            }
        }
async function initVisitorCounter() {
            const countEl = document.getElementById('visitor-count');
            if (!countEl) return;

            const cacheBuster = Date.now();
            const apis = [
                {
                    url: `https://api.counterapi.dev/v1/rupeshcomputers-global-2026/visits/up?t=${cacheBuster}`,
                    extract: (d) => d && typeof d.count === 'number' ? d.count : null
                },
                {
                    url: `https://abacus.jasoncameron.dev/hit/rupeshcomputers.github.io/visits?t=${cacheBuster}`,
                    extract: (d) => d && typeof d.value === 'number' ? d.value : null
                }
            ];

            for (const api of apis) {
                try {
                    const res = await fetch(api.url, { cache: 'no-store' });
                    if (!res.ok) continue;
                    const data = await res.json();
                    const total = api.extract(data);
                    if (total !== null) {
                        localStorage.setItem('rc_last_visitor_count', String(total));
                        countEl.textContent = total.toLocaleString('en-IN');
                        return;
                    }
                } catch (e) {}
            }

            let localCount = parseInt(localStorage.getItem('rc_last_visitor_count') || '0', 10) + 1;
            localStorage.setItem('rc_last_visitor_count', String(localCount));
            countEl.textContent = localCount.toLocaleString('en-IN');
        }

function openChatWindow() {
            const chatWindow = document.getElementById('chat-window');
            if (chatWindow) {
                chatWindow.classList.remove('hidden');
                chatWindow.classList.add('flex');
                setTimeout(() => document.getElementById('chat-input')?.focus(), 100);
            }
        }
function toggleChat() {
            const chatWindow = document.getElementById('chat-window');
            if (chatWindow.classList.contains('hidden')) {
                openChatWindow();
            } else {
                chatWindow.classList.add('hidden');
                chatWindow.classList.remove('flex');
            }
        }
function appendBotReply(userLabel, botHtml) {
            const messages = document.getElementById('chat-messages');
            if (userLabel) {
                messages.innerHTML += `
                    <div class="flex gap-2 justify-end">
                        <div class="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none text-xs">${userLabel}</div>
                    </div>
                `;
            }
            messages.innerHTML += `
                <div class="flex gap-2">
                    <div class="w-6 h-6 rounded-full bg-slate-900 shrink-0 flex items-center justify-center mt-1"><i class="fa-solid fa-wand-magic-sparkles text-[10px] text-amber-400"></i></div>
                    <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 text-xs text-slate-700 leading-relaxed">${botHtml}</div>
                </div>
            `;
            messages.scrollTop = messages.scrollHeight;
        }
function handleQuickAction(type) {
            if (type === 'lpg') {
                appendBotReply(
                    "Indane गैस बुकिंग नियम बताएं",
                    "Indane गैस बुक करने के लिए WhatsApp (<b>7588888824</b>) पर <b>Hi</b> भेजें (भाषा चुनें → नाम कन्फर्म करें → रिफिल बुक करें) या <b>8454955555</b> पर मिस्ड कॉल करें।<br><br>⚠️ <b>नियम:</b> बुकिंग के समय किसी भी पेमेंट लिंक से पेमेंट न करें, केवल डिलीवरी मिलने के बाद ही पेमेंट करें। <button onclick=\"openPage('lpg-booking')\" class='mt-1.5 block font-bold text-orange-700 underline'>👉 गैस बुकिंग पेज खोलें</button>"
                );
            } else if (type === 'privacy') {
                appendBotReply(
                    "क्या यह वेबसाइट सुरक्षित और विज्ञापन-मुक्त है?",
                    "✅ हाँ! यह वेबसाइट व मोबाइल ऐप <b>100% विज्ञापन-मुक्त (No Ads)</b> है और आपका कोई भी फोटो या दस्तावेज़ डेटा किसी सर्वर पर सेव या शेयर नहीं होता।"
                );
            } else if (type === 'pwa') {
                appendBotReply(
                    "मोबाइल ऐप इंस्टॉल कैसे करें?",
                    "Chrome ब्राउज़र में ऊपर <b>3 डॉट (⋮)</b> पर क्लिक करके <b>Install app / Add to Home screen</b> दबाएं। <button onclick=\"openPage('pwa-app')\" class='mt-1.5 block font-bold text-blue-600 underline'>👉 मोबाइल ऐप पेज देखें</button>"
                );
            } else if (type === 'aadhaar') {
                appendBotReply(
                    "आधार / पैन / सेवा सेतु स्टेटस लिंक दें",
                    "• <a href='https://myaadhaarbeta.uidai.gov.in/CheckAadhaarStatus/en' target='_blank' class='font-bold text-blue-600 underline'>आधार कार्ड स्टेटस चेक करें</a><br>• <a href='https://www.trackpan.utiitsl.com/PANONLINE/forms/TrackPan/trackApp' target='_blank' class='font-bold text-blue-600 underline'>पैन कार्ड स्टेटस चेक करें</a><br>• <a href='https://sewasetu.cgstate.gov.in/workflow/trackAppStatus.html' target='_blank' class='font-bold text-blue-600 underline'>सेवा सेतु (आय/जाति/निवास) स्टेटस</a>"
                );
            }
        }
function getLocalBotReply(message) {
            const lower = message.toLowerCase();
            if (lower.includes('gas') || lower.includes('lpg') || lower.includes('indane') || lower.includes('गैस')) {
                return "Indane गैस बुकिंग के लिए WhatsApp (<b>7588888824</b>) पर <b>Hi</b> भेजें या <b>8454955555</b> पर मिस्ड कॉल करें। ध्यान रहे: बुकिंग के समय किसी भी लिंक से पेमेंट न करें, केवल डिलीवरी मिलने के बाद ही पेमेंट करें।";
            } else if (lower.includes('jati') || lower.includes('जाति') || lower.includes('niwas') || lower.includes('निवास') || lower.includes('aay') || lower.includes('आय')) {
                return "जाति, निवास व आय प्रमाण पत्र के लिए पटवारी/सरपंच प्रतिवेदन, स्व-घोषणा पत्र, अंकसूची, वर्तमान बी-1 और आधार/राशन कार्ड आवश्यक हैं। पूरी सूची 'सेवाएँ' पेज पर देखें।";
            } else if (lower.includes('time') || lower.includes('samay') || lower.includes('समय') || lower.includes('रविवार')) {
                return "दुकान सोमवार से शनिवार सुबह 10:00 से शाम 6:00 बजे तक खुली रहती है। रविवार को अवकाश रहता है।";
            } else if (lower.includes('app') || lower.includes('pwa') || lower.includes('install') || lower.includes('ऐप')) {
                return "आप ऊपर 'मोबाइल ऐप' बटन पर क्लिक करके इस वेबसाइट को बिना Play Store के अपने फोन में इंस्टॉल कर सकते हैं। यह 100% विज्ञापन-मुक्त और सुरक्षित है।";
            }
            return "धन्यवाद! रूपेश कंप्यूटर्स (चोंगरीबहार: <b>6264531630</b> और दोकड़ा: <b>9713926390</b>) में SBI कियोस्क, आधार सेंटर, और प्रमाण पत्र बनाए जाते हैं। समय: सोम-शनि सुबह 10 से शाम 6 बजे तक।";
        }
async function askGeminiAssistant(userMessage) {
            const apiKey = "";
            if (!apiKey) {
                await new Promise(res => setTimeout(res, 300));
                return getLocalBotReply(userMessage);
            }
            return getLocalBotReply(userMessage);
        }
async function handleChatSubmit(event) {
            event.preventDefault();
            const input = document.getElementById('chat-input');
            const message = input.value.trim();
            if (!message) return;
            input.value = '';

            const messages = document.getElementById('chat-messages');
            messages.innerHTML += `
                <div class="flex gap-2 justify-end">
                    <div class="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none text-xs">${message}</div>
                </div>
            `;

            const typingId = 'typing-' + Date.now();
            messages.innerHTML += `
                <div id="${typingId}" class="flex gap-2">
                    <div class="w-6 h-6 rounded-full bg-slate-900 shrink-0 flex items-center justify-center mt-1"><i class="fa-solid fa-wand-magic-sparkles text-[10px] text-amber-400"></i></div>
                    <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 text-xs text-slate-500 flex items-center gap-1.5">
                        <span class="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce"></span>
                        <span class="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" style="animation-delay: 0.15s"></span>
                        <span class="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" style="animation-delay: 0.3s"></span>
                        <span class="ml-1 font-medium">Gemini AI सोच रहा है...</span>
                    </div>
                </div>
            `;
            messages.scrollTop = messages.scrollHeight;

            const replyHtml = await askGeminiAssistant(message);
            const typingEl = document.getElementById(typingId);
            if (typingEl) typingEl.remove();

            appendBotReply(null, replyHtml);
        }

window.addEventListener('DOMContentLoaded', () => {
    renderServices();
    switchBranch('chongribahar');
    setupPwa();
    initVisitorCounter();
// ... existing code ...
window.addEventListener('DOMContentLoaded', () => {
    renderServices();
    switchBranch('chongribahar');
    setupPwa();
    initVisitorCounter();

    // सभी पेजों के ऊपर नेविगेशन बार में 'PC डायग्नोस्टिक' बटन स्वतः जोड़ें
    const dobLink = document.querySelector('a[href="dob-tool.html"]');
    if (dobLink && dobLink.parentElement && !document.querySelector('a[href="system_info_scanner.html"]')) {
        const isCurrent = window.location.pathname.endsWith('system_info_scanner.html');
        const pcLink = document.createElement('a');
        pcLink.href = 'system_info_scanner.html';
        pcLink.className = `px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs ${isCurrent ? 'font-extrabold bg-amber-400 text-slate-950 shadow-md' : 'font-bold bg-white/10 text-slate-100 hover:bg-white/20'} transition flex items-center gap-1.5`;
        pcLink.innerHTML = `<i class="fa-solid fa-laptop-medical ${isCurrent ? '' : 'text-teal-300'}"></i> PC डायग्नोस्टिक`;
        dobLink.insertAdjacentElement('afterend', pcLink);
    }
});
