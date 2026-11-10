// ===== عدّل هذا الملف فقط لكل مطعم جديد =====
const img = id => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=70`;

const RESTAURANT = {
  name: "مطعم لمّة",
  logo: img("1555396273-367ea4eb4db5"),
  cover: img("1550547660-d9450f859349"),
  whatsapp: "9647700000000",          // رقم الواتساب بصيغة دولية بدون +
  open: 11, close: 24,                // ساعات الدوام (24 ساعة، بتوقيت بغداد)
  hoursText: "11:00 ص - 12:00 ليلاً",
  social: [
    { icon: "fa-brands fa-instagram", url: "https://instagram.com/" },
    { icon: "fa-brands fa-facebook", url: "https://facebook.com/" },
    { icon: "fa-brands fa-tiktok", url: "https://tiktok.com/" },
    { icon: "fa-solid fa-phone", url: "tel:+9647700000000" }
  ]
};

const CATEGORIES = [
  { id: "burger", name: "برجر" },
  { id: "kentucky", name: "كنتاكي" },
  { id: "pizza", name: "بيتزا" },
  { id: "starters", name: "مقبلات" },
  { id: "drinks", name: "مشروبات" }
];

const MENU_ITEMS = [
  { id: 1, cat: "burger", name: "برجر كلاسيك", price: 5000, img: img("1568901346375-23c9450c58cd"), desc: "لحم بقري مشوي على الفحم مع جبن شيدر وخس وصوص المطعم الخاص." },
  { id: 2, cat: "burger", name: "برجر دبل تشيز", price: 7500, img: img("1550547660-d9450f859349"), desc: "قطعتان من اللحم الطري مع طبقتين من الجبن الذائب ومخلل مقرمش." },
  { id: 3, cat: "burger", name: "برجر دجاج مقرمش", price: 5500, img: img("1571091718767-18b5b1457add"), desc: "صدر دجاج متبّل ومقلي حتى الذهبي مع مايونيز وخس طازج." },
  { id: 4, cat: "kentucky", name: "وجبة كرسبي عائلي", price: 7500, img: img("1626645738196-c2a7c87a8f58"), desc: "قطع دجاج كرسبي مقرمشة من الخارج وعصيرية من الداخل مع بطاطا وكولسلو." },
  { id: 5, cat: "kentucky", name: "بروستد ٨ قطع", price: 12000, img: img("1562967914-608f82629710"), desc: "ثماني قطع دجاج بروستد بتتبيلة سرّية مع صوص الثوم وخبز." },
  { id: 6, cat: "kentucky", name: "وجبة ناگتس", price: 6500, img: img("1562967916-eb82221dfb92"), desc: "عشر قطع ناگتس ذهبية مع بطاطا مقلية وصوصين من اختيارك." },
  { id: 7, cat: "pizza", name: "بيتزا مارغريتا", price: 9000, img: img("1513104890138-7c749659a591"), desc: "عجينة طازجة بصلصة الطماطم الإيطالية وجبن موزاريلا غني." },
  { id: 8, cat: "pizza", name: "بيتزا بيبروني", price: 11000, img: img("1565299624946-b28f40a0ae38"), desc: "شرائح بيبروني حارّة فوق طبقة سخية من الموزاريلا المذابة." },
  { id: 9, cat: "starters", name: "بطاطا مقلية", price: 3000, img: img("1573080496219-bb080dd4f877"), desc: "بطاطا ذهبية مقرمشة مع رشّة ملح وصوص جبن ساخن." },
  { id: 10, cat: "starters", name: "أصابع موزاريلا", price: 4500, img: img("1531749668029-2db88e4276c7"), desc: "جبن موزاريلا مغطّى بالبقسماط ومقلي، يذوب بفمك مع صوص الطماطم." },
  { id: 11, cat: "drinks", name: "عصير برتقال طبيعي", price: 3000, img: img("1600271886742-f049cd451bba"), desc: "برتقال طازج معصور عند الطلب، بارد ومنعش." },
  { id: 12, cat: "drinks", name: "ميلك شيك شوكولاتة", price: 4500, img: img("1572490122747-3968b75cc699"), desc: "آيس كريم وحليب وشوكولاتة غنية مع كريمة مخفوقة." }
];
