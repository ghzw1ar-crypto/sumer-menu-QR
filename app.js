// app.js - تشغيل التفاعلات وحساب الليالي وتوليد رسالة واتساب

// تعبئة البيانات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    // تعبئة النصوص الأساسية
    document.getElementById('hotel-title').textContent = hotelData.name;
    document.getElementById('hero-tagline').textContent = hotelData.tagline;
    document.getElementById('footer-hotel-name').textContent = hotelData.name;
    document.getElementById('footer-tagline').textContent = hotelData.tagline;
    document.getElementById('footer-phone').textContent = hotelData.phone;
    document.getElementById('policy-checkin').textContent = hotelData.checkInTime;
    document.getElementById('policy-checkout').textContent = hotelDateText(hotelData.checkOutTime);

    // تواريخ الافتراضية للبحث (اليوم وغداً)
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    document.getElementById('search-checkin').valueAsDate = today;
    document.getElementById('search-checkout').valueAsDate = tomorrow;

    renderAmenities();
    renderRooms();
});

function hotelDateText(val) { return val; }

// عرض مرافق الفندق
function renderAmenities() {
    const container = document.getElementById('amenities-container');
    container.innerHTML = hotelData.amenities.map(item => `
        <div class="bg-slate-900 border border-slate-800 p-5 rounded-2xl text-center hover:border-amber-500/50 transition group">
            <div class="w-12 h-12 mx-auto mb-3 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-xl group-hover:bg-amber-500 group-hover:text-slate-950 transition">
                <i class="fa-solid ${item.icon}"></i>
            </div>
            <h4 class="text-xs font-semibold text-slate-300">${item.name}</h4>
        </div>
    `).join('');
}

// عرض الغرف والأجنحة
function renderRooms() {
    const container = document.getElementById('rooms-container');
    container.innerHTML = hotelData.rooms.map(room => `
        <div class="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between group hover:border-amber-500/40 transition">
            <div class="relative h-64 overflow-hidden">
                <img src="${room.image}" alt="${room.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                <div class="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-amber-400 px-3 py-1.5 rounded-xl text-xs font-bold border border-amber-500/20">
                    ${room.capacity}
                </div>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-xl font-bold text-white">${room.name}</h3>
                        <span class="text-xs text-slate-400">${room.nameEn}</span>
                    </div>
                    <p class="text-amber-400 font-bold text-lg mb-4">
                        ${room.priceIQD.toLocaleString()} د.ع <span class="text-xs text-slate-400 font-normal">/ (${room.priceUSD}$ للييلة)</span>
                    </p>
                    <ul class="space-y-2 mb-6 text-sm text-slate-300">
                        ${room.features.map(f => `<li class="flex items-center gap-2"><i class="fa-solid fa-check text-amber-400 text-xs"></i><span>${f}</span></li>`).join('')}
                    </ul>
                </div>
                <div>
                    <button onclick="openBookingModal('${room.id}')" class="w-full bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-white font-bold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2 text-sm border border-slate-700 hover:border-amber-500">
                        <i class="fa-regular fa-calendar-check"></i>
                        <span>احجز هذه الغرفة الآن</span>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// التمرير لقسم الغرف عند الضغط على البحث
function scrollToRooms() {
    document.getElementById('rooms').scrollIntoView({ behavior: 'smooth' });
}

// فتح نافذة الحجز
let selectedRoomObject = null;

function openBookingModal(roomId) {
    selectedRoomObject = hotelData.rooms.find(r => r.id === roomId);
    if (!selectedRoomObject) return;

    document.getElementById('modal-room-id').value = roomId;
    document.getElementById('modal-room-name').textContent = `${selectedRoomObject.name} - ${selectedRoomObject.priceIQD.toLocaleString()} د.ع للييلة`;

    // نقل التواريخ من شريط البحث العلوي إلى النافذة المنبثقة
    document.getElementById('modal-checkin').value = document.getElementById('search-checkin').value;
    document.getElementById('modal-checkout').value = document.getElementById('search-checkout').value;
    document.getElementById('modal-adults-count').value = document.getElementById('search-guests').value;

    calculateTotal();
    document.getElementById('booking-modal').classList.remove('hidden');
}

function closeBookingModal() {
    document.getElementById('booking-modal').classList.add('hidden');
}

// حساب عدد الليالي والسعر الإجمالي تلقائياً
function calculateTotal() {
    if (!selectedRoomObject) return;

    const checkinDate = new Date(document.getElementById('modal-checkin').value);
    const checkoutDate = new Date(document.getElementById('modal-checkout').value);
    const roomsCount = parseInt(document.getElementById('modal-rooms-count').value) || 1;

    let nights = 1;
    if (checkoutDate > checkinDate) {
        const diffTime = Math.abs(checkoutDate - checkinDate);
        nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    const totalIQD = selectedRoomObject.priceIQD * nights * roomsCount;
    const totalUSD = selectedRoomObject.priceUSD * nights * roomsCount;

    document.getElementById('modal-nights-count').textContent = `${nights} ليلة`;
    document.getElementById('modal-total-price').textContent = `${totalIQD.toLocaleString()} د.ع (${totalUSD}$)`;
}

// إرسال الحجز عبر واتساب والاستقبال
function submitWhatsAppBooking(event) {
    event.preventDefault();

    const roomId = document.getElementById('modal-room-id').value;
    const room = hotelData.rooms.find(r => r.id === roomId);
    const checkin = document.getElementById('modal-checkin').value;
    const checkout = document.getElementById('modal-checkout').value;
    const roomsCount = document.getElementById('modal-rooms-count').value;
    const adults = document.getElementById('modal-adults-count').value;
    const name = document.getElementById('modal-name').value;
    const phone = document.getElementById('modal-phone').value;
    const notes = document.getElementById('modal-notes').value || "لا توجد ملاحظات";

    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    let nights = 1;
    if (checkoutDate > checkinDate) {
        nights = Math.ceil(Math.abs(checkoutDate - checkinDate) / (1000 * 60 * 60 * 24));
    }

    const totalIQD = (room.priceIQD * nights * roomsCount).toLocaleString();
    const totalUSD = room.priceUSD * nights * roomsCount;

    // صياغة رسالة الواتساب الرسمية
    const message = `*طلب حجز جديد - ${hotelData.name}* 🏨
------------------------
*نوع الغرفة:* ${room.name}
*عدد الغرف:* ${roomsCount} غرفة
*تاريخ الوصول:* ${checkin}
*تاريخ المغادرة:* ${checkout}
*عدد الليالي:* ${nights} ليلة
------------------------
*بيانات النزيل:*
*الاسم:* ${name}
*الهاتف:* ${phone}
*عدد البالغين:* ${adults} أشخاص
*ملاحظات:* ${notes}
------------------------
*التكلفة الإجمالية التقديرية:* ${totalIQD} د.ع (${totalUSD}$)
*(الدفع نقداً عند الوصول للاستقبال)*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${hotelData.whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    closeBookingModal();
}
