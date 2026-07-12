/**
 * Mock/seed data for Homa — a modern English-learning platform.
 * Shaped like an API response so the demo layer can be swapped for real
 * endpoints later without touching the components.
 */

export interface Course {
  slug: string;
  title: string;
  level: string;
  cefr: string;
  lessons: number;
  weeks: number;
  price: number; // Toman
  summary: string;
  tag: string;
  popular?: boolean;
}

export const courses: Course[] = [
  {
    slug: "everyday-conversation",
    title: "مکالمه روزمره",
    level: "مقدماتی تا متوسط",
    cefr: "A2–B1",
    lessons: 24,
    weeks: 8,
    price: 3200000,
    tag: "مکالمه",
    summary: "روان صحبت کردن در موقعیت‌های واقعی، با تمرین‌های تعاملی و بازخورد فوری.",
    popular: true,
  },
  {
    slug: "ielts-academic",
    title: "آمادگی آیلتس آکادمیک",
    level: "متوسط به بالا",
    cefr: "B2–C1",
    lessons: 32,
    weeks: 10,
    price: 6500000,
    tag: "آیلتس",
    summary: "چهار مهارت آزمون با استراتژی‌های عملی و آزمون‌های شبیه‌سازی برای رسیدن به نمره هدف.",
    popular: true,
  },
  {
    slug: "business-english",
    title: "انگلیسی تجاری",
    level: "متوسط",
    cefr: "B1–B2",
    lessons: 18,
    weeks: 6,
    price: 4100000,
    tag: "شغلی",
    summary: "ارتباط حرفه‌ای، ایمیل، جلسه و مصاحبه شغلی به زبان انگلیسی.",
  },
  {
    slug: "grammar-foundations",
    title: "پایه‌های گرامر",
    level: "پایه",
    cefr: "A1–A2",
    lessons: 20,
    weeks: 7,
    price: 2600000,
    tag: "گرامر",
    summary: "ساختن یک پایه‌ی محکم گرامری، قدم‌به‌قدم و بدون پیچیدگی.",
  },
  {
    slug: "pronunciation",
    title: "تلفظ و لهجه",
    level: "همه سطوح",
    cefr: "A2–C1",
    lessons: 14,
    weeks: 5,
    price: 2900000,
    tag: "تلفظ",
    summary: "تمرین تلفظ دقیق با تحلیل صوتی هوشمند و اصلاح لحظه‌ای.",
  },
  {
    slug: "toefl-ibt",
    title: "آمادگی تافل iBT",
    level: "پیشرفته",
    cefr: "B2–C1",
    lessons: 28,
    weeks: 9,
    price: 7800000,
    tag: "تافل",
    summary: "آماده‌سازی جامع تافل با منابع به‌روز و تحلیل عملکرد.",
  },
];

export const stats = [
  { value: "۱۲", suffix: "+", label: "سال تجربه" },
  { value: "۶٬۸۰۰", suffix: "", label: "زبان‌آموز" },
  { value: "۴٫۹", suffix: "/۵", label: "رضایت" },
  { value: "۹۴", suffix: "٪", label: "نرخ موفقیت" },
];

export const features = [
  {
    icon: "target",
    title: "مسیر هدفمند",
    text: "بر اساس سطح و هدف تو، دقیقاً همان چیزی را تمرین کن که لازم داری — نه بیشتر، نه کمتر.",
  },
  {
    icon: "sparkle",
    title: "دستیار هوشمند",
    text: "بازخورد فوری روی نوشتار و گفتار، با توضیح فارسی برای هر اشتباه.",
  },
  {
    icon: "chart",
    title: "پیشرفت قابل‌اندازه‌گیری",
    text: "هر جلسه، مهارت‌هایت را می‌سنجیم تا همیشه بدانی کجای مسیری.",
  },
];

export const steps = [
  { n: "۰۱", title: "تعیین سطح", text: "در چند دقیقه سطح فعلی‌ات را می‌سنجیم." },
  { n: "۰۲", title: "انتخاب مسیر", text: "دوره‌ی متناسب با هدفت را پیشنهاد می‌دهیم." },
  { n: "۰۳", title: "تمرین روزانه", text: "با تمرین‌های کوتاه و تعاملی پیش برو." },
  { n: "۰۴", title: "سنجش پیشرفت", text: "نتیجه را ببین و به هدفت نزدیک شو." },
];

export const testimonials = [
  {
    quote: "سه ماهه از A2 به B1 رسیدم. تمرین‌های روزانه و بازخورد هوشمند واقعاً فرق داشت.",
    name: "نگار احمدی",
    meta: "دوره مکالمه روزمره",
  },
  {
    quote: "با آمادگی آیلتس هما نمره ۷.۵ گرفتم؛ آزمون‌های شبیه‌سازی دقیقاً مثل آزمون واقعی بود.",
    name: "سینا مرادی",
    meta: "آیلتس آکادمیک",
  },
  {
    quote: "برای مصاحبه‌ی کاری‌ام آماده شدم و قبول شدم. انگلیسی تجاری دقیقاً چیزی بود که نیاز داشتم.",
    name: "مهسا کریمی",
    meta: "انگلیسی تجاری",
  },
];

export const faqs = [
  {
    q: "دوره‌ها چطور برگزار می‌شوند؟",
    a: "ترکیبی از ویدیوهای کوتاه، تمرین‌های تعاملی و بازخورد هوشمند. هر وقت و هر جا که بخواهی می‌توانی پیش بروی.",
  },
  {
    q: "چطور سطحم را تشخیص بدهم؟",
    a: "آزمون تعیین سطح رایگان در چند دقیقه سطح تو را می‌سنجد و دوره‌ی مناسب را پیشنهاد می‌دهد.",
  },
  {
    q: "دستیار هوشمند دقیقاً چه کاری می‌کند؟",
    a: "نوشتار و گفتار تو را تحلیل می‌کند، اشتباه‌ها را به فارسی توضیح می‌دهد و تمرین‌های شخصی‌سازی‌شده پیشنهاد می‌دهد.",
  },
  {
    q: "امکان پرداخت اقساطی هست؟",
    a: "بله، برای بیشتر دوره‌ها امکان پرداخت در دو قسط فراهم است.",
  },
];

export const plans = [
  {
    name: "پایه",
    price: 0,
    period: "رایگان",
    tagline: "برای شروع و آشنایی",
    features: ["آزمون تعیین سطح", "دسترسی به ۳ درس اول هر دوره", "تمرین‌های تعاملی محدود"],
    cta: "شروع رایگان",
    highlighted: false,
  },
  {
    name: "حرفه‌ای",
    price: 490000,
    period: "ماهانه",
    tagline: "محبوب‌ترین انتخاب",
    features: [
      "دسترسی کامل به همه دوره‌ها",
      "دستیار هوشمند نامحدود",
      "بازخورد گفتار و نوشتار",
      "گزارش پیشرفت هفتگی",
      "گواهی پایان دوره",
    ],
    cta: "شروع اشتراک",
    highlighted: true,
  },
  {
    name: "سازمانی",
    price: -1,
    period: "تماس بگیرید",
    tagline: "برای تیم‌ها و شرکت‌ها",
    features: ["همه امکانات حرفه‌ای", "مدیریت تیم و گزارش گروهی", "پشتیبانی اختصاصی", "صورتحساب سازمانی"],
    cta: "تماس با فروش",
    highlighted: false,
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: number;
  date: string;
  excerpt: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "common-mistakes",
    title: "۷ اشتباه رایج در مکالمه که باید کنار بگذاری",
    category: "مکالمه",
    readTime: 6,
    date: "۱۲ تیر ۱۴۰۳",
    excerpt: "اشتباه‌هایی که بیشتر زبان‌آموزان تکرار می‌کنند و راه ساده‌ی رفعشان.",
  },
  {
    slug: "daily-habit",
    title: "چطور با ۱۵ دقیقه در روز زبان یاد بگیریم",
    category: "یادگیری",
    readTime: 4,
    date: "۵ تیر ۱۴۰۳",
    excerpt: "قدرت عادت‌های کوچک روزانه در یادگیری پایدار زبان.",
  },
  {
    slug: "ielts-writing",
    title: "نکات طلایی برای نمره‌ی بهتر رایتینگ آیلتس",
    category: "آیلتس",
    readTime: 7,
    date: "۲۸ خرداد ۱۴۰۳",
    excerpt: "ساختار پاراگراف، لغات کلیدی و اشتباه‌هایی که نمره را پایین می‌آورند.",
  },
  {
    slug: "ai-learning",
    title: "هوش مصنوعی چطور یادگیری زبان را سریع‌تر می‌کند؟",
    category: "یادگیری",
    readTime: 5,
    date: "۲۰ خرداد ۱۴۰۳",
    excerpt: "نگاهی به نقش بازخورد هوشمند و تمرین شخصی‌سازی‌شده.",
  },
  {
    slug: "pronunciation-tips",
    title: "۵ تمرین ساده برای تلفظ بهتر",
    category: "تلفظ",
    readTime: 5,
    date: "۱۰ خرداد ۱۴۰۳",
    excerpt: "با این تمرین‌ها لهجه‌ات طبیعی‌تر و شفاف‌تر می‌شود.",
  },
  {
    slug: "vocabulary-memory",
    title: "چطور لغت‌ها را فراموش نکنیم؟",
    category: "واژگان",
    readTime: 6,
    date: "۲ خرداد ۱۴۰۳",
    excerpt: "روش تکرار فاصله‌دار و ترفندهای تثبیت واژگان در حافظه.",
  },
];

export const blogCategories = ["همه", "مکالمه", "آیلتس", "یادگیری", "تلفظ", "واژگان"];

/** A generic curriculum for the course detail page. */
export function curriculumFor(course: Course) {
  return [
    {
      title: "بخش ۱ — شروع و پایه",
      lessons: ["معرفی دوره و اهداف", "ارزیابی اولیه", "مفاهیم کلیدی این سطح"],
    },
    { title: "بخش ۲ — مهارت‌های اصلی", lessons: [] },
    { title: "بخش ۳ — تمرین و کاربرد", lessons: [] },
    { title: `بخش ۴ — جمع‌بندی و ${course.tag}`, lessons: [] },
  ];
}

/* ---- helpers ---- */

const faDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
export function toFa(input: string | number): string {
  return String(input).replace(/[0-9]/g, (d) => faDigits[Number(d)]);
}
export function formatPrice(toman: number): string {
  return toFa(toman.toLocaleString("en-US"));
}
export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}
