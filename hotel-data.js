// hotel-data.js - بيانات فندق أبراج المدينة والأسعار والغرف
const hotelData = {
    name: "فندق أبراج المدينة",
    tagline: "إقامة فاخرة تجمع بين الراحة والضيافة العراقية الأصيلة",
    city: "العراق",
    address: "قريب من المراكز الحيوية والأماكن السياحية",
    whatsappNumber: "07723224455", // ضع رقم الاستقبال هنا مع مفتاح الدولة
    phone: "+964 07723224455",
    checkInTime: "2:00 ظهراً",
    checkOutTime: "12:00 ظهراً",
    
    // مرافق الفندق
    amenities: [
        { icon: "fa-wifi", name: "واي فاي مجاني فائق السرعة" },
        { icon: "fa-concierge-bell", name: "استقبال وخدمة غرف 24 ساعة" },
        { icon: "fa-snowflake", name: "تكييف مركزي وتدفئة" },
        { icon: "fa-car", name: "موقف سيارات آمن للنزلاء" },
        { icon: "fa-utensils", name: "مطعم وكافيه داخلي" },
        { icon: "fa-elevator", name: "مصعد كهربائي سريع" }
    ],

    // الغرف والأجنحة المتاحة
    rooms: [
        {
            id: "std-single",
            name: "غرفة مفردة قياسية",
            nameEn: "Standard Single Room",
            priceUSD: 40,
            priceIQD: 52000,
            capacity: "شخص واحد بالغ",
            image: "https://flow-content.google/image/8b482811-0ee0-4b8a-875f-99a7a85c0b2b?Expires=1794353791&KeyName=labs-flow-prod-cdn-key&Signature=CfjOg0xXJBrPFOiuIfZNkxa3QOo",
            features: ["سرير مفرد فاخر", "حمام خاص مع مستلزمات", "شاشة مسطحة Smart TV", "مكتب عمل صغير"]
        },
        {
            id: "deluxe-double",
            name: "غرفة مزدوجة ديلوكس",
            nameEn: "Deluxe Double / Twin Room",
            priceUSD: 60,
            priceIQD: 78000,
            capacity: "شخصين بالغين",
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
            features: ["سرير مزدوج كبير أو سريرين منفصلين", "إطلالة مميزة على المدينة", "ميني بار وصانعة قهوة", "حمام رخامي متكامل"]
        },
        {
            id: "triple-family",
            name: "غرفة ثلاثية عائلية",
            nameEn: "Triple Family Room",
            priceUSD: 85,
            priceIQD: 110000,
            capacity: "3 أشخاص بالغين",
            image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
            features: ["ثلاثة أسرة مريحة", "مساحة واسعة تناسب العائلات", "خزانة ملابس كبيرة", "جلسة صالون مصغرة"]
        },
        {
            id: "royal-suite",
            name: "جناح ملكي فاخر",
            nameEn: "Royal Suite",
            priceUSD: 130,
            priceIQD: 169000,
            capacity: "2-4 أشخاص",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
            features: ["غرفة نوم رئيسية + صالة استقبال مستقلة", "إطلالة بانورامية رائعة", "شاشتان عرض متطورتان", "حمام فخم مع حوض استرخاء (جاكوزي)"]
        }
    ]
};
