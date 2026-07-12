/**
 * Mock/seed data for the Homa platform.
 *
 * This is the single data layer the UI reads from. It is intentionally
 * shaped like what a real API would return so that swapping these arrays
 * for `fetch()` calls later requires no changes in the components — only
 * the bodies of the getter functions below.
 */

export type Track = "language" | "pilot";

export interface Course {
  slug: string;
  track: Track;
  title: string;
  level: string;
  category: string;
  sessions: number;
  price: number; // Toman
  instructorId: string;
  summary: string;
  gradient: [string, string];
  featured?: boolean;
  mode: "online" | "in-person" | "hybrid";
  hasAI?: boolean;
}

export interface Instructor {
  id: string;
  name: string;
  track: Track;
  title: string;
  bio: string;
  credentials: string[];
  experience: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: number; // minutes
  date: string;
  excerpt: string;
}

/* ---------------- Courses ---------------- */

export const courses: Course[] = [
  {
    slug: "everyday-conversation",
    track: "language",
    title: "مکالمه روزمره انگلیسی",
    level: "سطح مقدماتی",
    category: "مکالمه",
    sessions: 20,
    price: 3200000,
    instructorId: "sara-mohammadi",
    summary:
      "دوره‌ای عملی برای روان شدن در مکالمات روزمره؛ با تمرین‌های واقعی، نقش‌آفرینی و بازخورد هوشمند برای رفع اشتباهات رایج.",
    gradient: ["#DCE8F1", "#EAF2F8"],
    featured: true,
    mode: "online",
    hasAI: true,
  },
  {
    slug: "ielts-intensive",
    track: "language",
    title: "فشرده آیلتس آکادمیک",
    level: "آیلتس ۷.۰+",
    category: "آیلتس/تافل",
    sessions: 32,
    price: 6500000,
    instructorId: "sara-mohammadi",
    summary:
      "آماده‌سازی فشرده برای آزمون آیلتس آکادمیک با تمرکز بر چهار مهارت، آزمون‌های شبیه‌سازی و تحلیل رایتینگ با کمک هوش مصنوعی.",
    gradient: ["#FBEBD4", "#F7DFC0"],
    featured: true,
    mode: "hybrid",
    hasAI: true,
  },
  {
    slug: "conversation-intermediate",
    track: "language",
    title: "دوره مکالمه انگلیسی متوسط",
    level: "سطح متوسط",
    category: "مکالمه",
    sessions: 24,
    price: 4800000,
    instructorId: "david-clarke",
    summary:
      "۲۴ جلسه آنلاین با تمرکز بر مکالمه روان، اصطلاحات کاربردی و تلفظ صحیح در موقعیت‌های واقعی.",
    gradient: ["#DCE8F1", "#EAF2F8"],
    mode: "online",
    hasAI: true,
  },
  {
    slug: "kids-english",
    track: "language",
    title: "انگلیسی کودکان",
    level: "۶ تا ۱۲ سال",
    category: "کودکان",
    sessions: 16,
    price: 2600000,
    instructorId: "sara-mohammadi",
    summary:
      "یادگیری زبان به‌صورت بازی‌محور و گیمیفای‌شده برای کودکان؛ با داستان، آواز و تمرین‌های تعاملی.",
    gradient: ["#FBEBD4", "#F7DFC0"],
    mode: "in-person",
  },
  {
    slug: "aviation-navigation",
    track: "pilot",
    title: "اصول ناوبری هوایی",
    level: "تئوری پایه",
    category: "ناوبری",
    sessions: 18,
    price: 8900000,
    instructorId: "reza-tabrizi",
    summary:
      "مبانی ناوبری هوایی، نقشه‌خوانی، سیستم‌های موقعیت‌یابی و اصول پروازی برای داوطلبان خلبانی.",
    gradient: ["#16344F", "#0F2942"],
    featured: true,
    mode: "in-person",
  },
  {
    slug: "atpl-exam-prep",
    track: "pilot",
    title: "شبیه‌سازی آزمون ATPL",
    level: "آماده‌سازی آزمون",
    category: "آمادگی آزمون",
    sessions: 40,
    price: 12400000,
    instructorId: "reza-tabrizi",
    summary:
      "پکیج کامل آماده‌سازی برای آزمون ATPL با بانک سوالات به‌روز، آزمون‌های شبیه‌سازی‌شده و تحلیل عملکرد.",
    gradient: ["#16344F", "#0F2942"],
    featured: true,
    mode: "hybrid",
  },
  {
    slug: "meteorology",
    track: "pilot",
    title: "هواشناسی هوانوردی",
    level: "تئوری پایه",
    category: "هواشناسی",
    sessions: 14,
    price: 6900000,
    instructorId: "mahdi-ahmadi",
    summary:
      "اصول هواشناسی کاربردی برای خلبانان؛ تحلیل شرایط جوی، جبهه‌ها و تصمیم‌گیری پروازی.",
    gradient: ["#16344F", "#0F2942"],
    mode: "in-person",
  },
  {
    slug: "air-law",
    track: "pilot",
    title: "قوانین و مقررات هوانوردی",
    level: "تئوری پایه",
    category: "قوانین هوایی",
    sessions: 12,
    price: 5400000,
    instructorId: "mahdi-ahmadi",
    summary:
      "آشنایی با قوانین بین‌المللی و ملی هوانوردی، مقررات پروازی و استانداردهای ایمنی.",
    gradient: ["#16344F", "#0F2942"],
    mode: "online",
  },
];

/* ---------------- Instructors ---------------- */

export const instructors: Instructor[] = [
  {
    id: "sara-mohammadi",
    name: "دکتر شیرین علوی",
    track: "language",
    title: "مدرس ارشد آیلتس، CELTA",
    bio: "مدرس ارشد آیلتس با مدرک CELTA، ۱۱ سال سابقه تدریس و آماده‌سازی بیش از ۲۰۰۰ داوطلب.",
    credentials: ["CELTA", "آیلتس ۸.۵", "کارشناسی ارشد آموزش زبان"],
    experience: "۱۱ سال سابقه",
  },
  {
    id: "david-clarke",
    name: "سارا محمدی",
    track: "language",
    title: "مدرس مکالمه و کودکان",
    bio: "مدرس مکالمه و زبان کودکان با تمرکز بر روش‌های تعاملی و بازی‌محور، دارای گواهی TESOL.",
    credentials: ["TESOL", "روش تدریس تعاملی", "۸ سال تجربه"],
    experience: "۸ سال سابقه",
  },
  {
    id: "maryam-salehi",
    name: "مریم صالحی",
    track: "language",
    title: "مدرس زبان کودکان",
    bio: "متخصص آموزش زبان به کودکان با رویکرد داستان‌محور و آواز، دارای گواهی آموزش کودکان.",
    credentials: ["Young Learners", "روش داستان‌محور", "۶ سال تجربه"],
    experience: "۶ سال سابقه",
  },
  {
    id: "babak-rostami",
    name: "بابک رستمی",
    track: "language",
    title: "مدرس تافل و مکالمه تجاری",
    bio: "مدرس تافل و انگلیسی تجاری با سابقه آماده‌سازی داوطلبان مهاجرت و مصاحبه‌های شغلی.",
    credentials: ["TOEFL iBT", "Business English", "۹ سال تجربه"],
    experience: "۹ سال سابقه",
  },
  {
    id: "reza-tabrizi",
    name: "کاپیتان فرهاد نوری",
    track: "pilot",
    title: "خلبان بازنشسته، تئوری پرواز",
    bio: "خلبان بازنشسته با بیش از ۲۲ سال سابقه پرواز و مدرس رسمی دوره‌های تئوری هوانوردی.",
    credentials: ["ATPL", "۲۲ سال سابقه پرواز", "مدرس CAA"],
    experience: "۲۲ سال سابقه پرواز",
  },
  {
    id: "mahdi-ahmadi",
    name: "مهندس آرمان تقوی",
    track: "pilot",
    title: "مدرس ناوبری و مقررات",
    bio: "متخصص ناوبری هوایی و قوانین هوانوردی با سابقه همکاری با سازمان هواپیمایی کشوری.",
    credentials: ["کارشناسی ارشد هوافضا", "ناوبری و مقررات", "۱۴ سال تجربه"],
    experience: "۱۴ سال سابقه",
  },
  {
    id: "leila-sadeghi",
    name: "کاپیتان لیلا صادقی",
    track: "pilot",
    title: "مدرس هواشناسی پرواز",
    bio: "خلبان و مدرس هواشناسی هوانوردی با ۱۶ سال سابقه پرواز و تدریس تحلیل شرایط جوی.",
    credentials: ["ATPL", "هواشناسی پرواز", "۱۶ سال سابقه پرواز"],
    experience: "۱۶ سال سابقه پرواز",
  },
  {
    id: "kaveh-yazdani",
    name: "مهندس کاوه یزدانی",
    track: "pilot",
    title: "مدرس آیرودینامیک",
    bio: "متخصص آیرودینامیک و اصول پروازی با سابقه تدریس در مراکز آموزش هوانوردی.",
    credentials: ["کارشناسی ارشد هوافضا", "آیرودینامیک", "۱۰ سال تجربه"],
    experience: "۱۰ سال سابقه",
  },
];

/* ---------------- Blog ---------------- */

export const blogPosts: BlogPost[] = [
  {
    slug: "common-speaking-mistakes",
    title: "۷ اشتباه رایج در مکالمه انگلیسی که باید کنار بگذارید",
    category: "آموزش زبان",
    readTime: 6,
    date: "۱۴۰۳/۰۴/۱۲",
    excerpt:
      "اشتباهاتی که بیشتر زبان‌آموزان تکرار می‌کنند و راهکارهای ساده برای رفع آن‌ها.",
  },
  {
    slug: "pilot-career-guide",
    title: "راهنمای کامل مسیر شغلی خلبانی در ایران",
    category: "خلبانی",
    readTime: 9,
    date: "۱۴۰۳/۰۴/۰۵",
    excerpt:
      "از پیش‌نیازها تا مدارک لازم؛ هر آنچه برای شروع مسیر خلبانی باید بدانید.",
  },
  {
    slug: "daily-practice",
    title: "چگونه با تمرین روزانه ۱۵ دقیقه‌ای زبان یاد بگیریم",
    category: "یادگیری",
    readTime: 4,
    date: "۱۴۰۳/۰۳/۲۸",
    excerpt:
      "قدرت عادت‌های کوچک روزانه و نقش تمرین مستمر در یادگیری پایدار زبان.",
  },
  {
    slug: "ielts-writing-tips",
    title: "نکات طلایی برای بالا بردن نمره رایتینگ آیلتس",
    category: "آیلتس",
    readTime: 7,
    date: "۱۴۰۳/۰۳/۲۰",
    excerpt: "ساختار پاراگراف، لغات کلیدی و اشتباهاتی که نمره شما را پایین می‌آورند.",
  },
  {
    slug: "how-ai-helps",
    title: "هوش مصنوعی چطور یادگیری زبان را سریع‌تر می‌کند؟",
    category: "یادگیری",
    readTime: 5,
    date: "۱۴۰۳/۰۳/۱۰",
    excerpt: "نگاهی به نقش بازخورد هوشمند و تمرین شخصی‌سازی‌شده در یادگیری مدرن.",
  },
  {
    slug: "flight-simulator",
    title: "نقش شبیه‌ساز پرواز در آموزش خلبانان",
    category: "خلبانی",
    readTime: 8,
    date: "۱۴۰۳/۰۳/۰۱",
    excerpt: "چرا تمرین در شبیه‌ساز بخش جدایی‌ناپذیر آموزش مدرن خلبانی است.",
  },
];

/* ---------------- Marketing stats & FAQ ---------------- */

export const trustStats = [
  { value: "۱۲+", label: "سال سابقه آموزشی" },
  { value: "۶,۸۰۰", label: "دانشجوی فارغ‌التحصیل" },
  { value: "۴۰+", label: "مدرس متخصص" },
  { value: "۴.۹/۵", label: "رضایت دانشجویان" },
];

export const testimonials = [
  {
    quote:
      "با دوره فشرده آیلتس هما تونستم نمره ۷.۵ بگیرم؛ کلاس‌های ضبط‌شده کمک زیادی کرد.",
    name: "نگار احمدی",
    course: "دوره آیلتس آکادمیک",
  },
  {
    quote:
      "اساتید بخش خلبانی واقعاً باتجربه بودن و آزمون‌های شبیه‌سازی خیلی به آزمون واقعی نزدیک بود.",
    name: "آرمان رضایی",
    course: "آمادگی آزمون ATPL",
  },
  {
    quote:
      "مسیر گیمیفای‌شده باعث شد هر روز تمرین کنم؛ الان استریک ۶۰ روزه دارم!",
    name: "مهسا کریمی",
    course: "مسیر یادگیری زبان",
  },
];

export const faqGroups = [
  {
    heading: "عمومی",
    items: [
      {
        q: "دوره‌های هما به چه صورت برگزار می‌شوند؟",
        a: "دوره‌ها به‌صورت آنلاین (کلاس زنده و ضبط‌شده)، حضوری و ترکیبی برگزار می‌شوند. نوع برگزاری هر دوره در صفحه جزئیات آن مشخص شده است.",
      },
      {
        q: "آیا گواهی پایان دوره ارائه می‌شود؟",
        a: "بله، پس از اتمام موفقیت‌آمیز هر دوره و قبولی در آزمون پایانی، گواهی معتبر هما با کد رهگیری صادر می‌شود.",
      },
      {
        q: "امکان پرداخت اقساطی وجود دارد؟",
        a: "بله، برای اکثر دوره‌ها امکان پرداخت در دو قسط فراهم است. جزئیات در مرحله ثبت‌نام نمایش داده می‌شود.",
      },
    ],
  },
  {
    heading: "دوره‌های زبان",
    items: [
      {
        q: "چطور سطح زبانم را تشخیص دهم؟",
        a: "آزمون تعیین سطح رایگان در دسترس است و بر اساس نتیجه، دوره مناسب به شما پیشنهاد می‌شود.",
      },
      {
        q: "دستیار هوشمند AI چه کاری انجام می‌دهد؟",
        a: "دستیار هوشمند هما بازخورد فوری روی تمرین‌ها می‌دهد، اشتباهات گرامری را به فارسی توضیح می‌دهد و مسیر تمرین را شخصی‌سازی می‌کند.",
      },
    ],
  },
  {
    heading: "دوره‌های خلبانی",
    items: [
      {
        q: "پیش‌نیاز شرکت در دوره‌های خلبانی چیست؟",
        a: "دوره‌های تئوری برای همه علاقه‌مندان باز است. برای دوره‌های پیشرفته و آماده‌سازی آزمون، آشنایی اولیه با مفاهیم هوانوردی توصیه می‌شود.",
      },
      {
        q: "آیا آزمون‌های شبیه‌سازی به‌روز هستند؟",
        a: "بله، بانک سوالات و آزمون‌های شبیه‌سازی مطابق آخرین استانداردهای آزمون‌های رسمی به‌روزرسانی می‌شوند.",
      },
    ],
  },
];

/* ---------------- Account / LMS user data ---------------- */

export const currentUser = {
  name: "آرمان رضایی",
  phoneMasked: "0912***4567",
  level: "B2 · متوسط رو به بالا",
};

export interface Enrollment {
  title: string;
  instructor: string;
  done: number;
  total: number;
  status: "active" | "completed";
}

export const enrollments: Enrollment[] = [
  { title: "آیلتس آکادمیک فشرده", instructor: "دکتر شیرین علوی", done: 15, total: 24, status: "active" },
  { title: "اصول ناوبری هوایی", instructor: "کاپیتان فرهاد نوری", done: 9, total: 32, status: "active" },
];

export interface Invoice {
  title: string;
  date: string;
  amount: number;
  paid: boolean;
}

export const invoices: Invoice[] = [
  { title: "آیلتس آکادمیک فشرده", date: "۲۸ خرداد ۱۴۰۳", amount: 6500000, paid: true },
  { title: "اصول ناوبری هوایی", date: "۱۰ خرداد ۱۴۰۳", amount: 8900000, paid: true },
  { title: "مکالمه روزمره انگلیسی", date: "۲ اسفند ۱۴۰۲", amount: 3200000, paid: true },
];

/** Percent helper for progress bars. */
export function pct(done: number, total: number): number {
  return Math.round((done / total) * 100);
}

/* ---------------- Getters (swap these for API calls later) ---------------- */

export function getCourses(track?: Track): Course[] {
  return track ? courses.filter((c) => c.track === track) : courses;
}

export function getFeaturedCourses(): Course[] {
  return courses.filter((c) => c.featured).slice(0, 4);
}

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

/* ---------------- Course detail extras ---------------- */

export interface Chapter {
  title: string;
  lessons: string[];
}

export interface Review {
  name: string;
  rating: number;
  text: string;
}

/** Default curriculum + reviews per track (stand-in until per-course content exists). */
export function getCurriculum(course: Course): Chapter[] {
  if (course.track === "pilot") {
    return [
      {
        title: "فصل ۱ — مبانی و مفاهیم پایه",
        lessons: [
          "جلسه ۱: معرفی دوره و اصطلاحات کلیدی",
          "جلسه ۲: مفاهیم فیزیکی پرواز",
          "جلسه ۳: مرور استانداردهای بین‌المللی",
        ],
      },
      { title: "فصل ۲ — سیستم‌ها و تجهیزات", lessons: [] },
      { title: "فصل ۳ — مقررات و ایمنی پروازی", lessons: [] },
      { title: "فصل ۴ — آزمون شبیه‌سازی نهایی", lessons: [] },
    ];
  }
  return [
    {
      title: "فصل ۱ — آشنایی با ساختار و مهارت شنیداری",
      lessons: [
        "جلسه ۱: معرفی چهار مهارت زبانی",
        "جلسه ۲: استراتژی تقویت Listening",
        "جلسه ۳: تمرین با لهجه‌های مختلف",
      ],
    },
    { title: "فصل ۲ — Reading و مدیریت زمان", lessons: [] },
    { title: "فصل ۳ — Writing و اصول نگارش", lessons: [] },
    { title: "فصل ۴ — Speaking و آزمون شبیه‌سازی", lessons: [] },
  ];
}

export function getReviews(course: Course): Review[] {
  return [
    {
      name: course.track === "pilot" ? "آرمان رضایی" : "نگار احمدی",
      rating: 5,
      text:
        course.track === "pilot"
          ? "آزمون‌های شبیه‌سازی خیلی به آزمون واقعی نزدیک بود و اساتید باتجربه بودن."
          : "توضیحات مدرس خیلی کاربردی بود و تونستم مهارت‌هام رو به‌خوبی جمع کنم.",
    },
    {
      name: course.track === "pilot" ? "سینا مرادی" : "مهسا کریمی",
      rating: 5,
      text: "پشتیبانی عالی و محتوای منظم؛ دقیقاً همون چیزی که نیاز داشتم.",
    },
  ];
}

export function courseFeatures(course: Course): string[] {
  const base = [
    `${toFa(course.sessions)} جلسه · ۹۰ دقیقه‌ای`,
    "دسترسی مادام‌العمر به ضبط کلاس‌ها",
    "گواهی پایان دوره",
  ];
  if (course.hasAI) base.push("دستیار هوشمند تصحیح و بازخورد");
  return base;
}

export function getInstructor(id: string): Instructor | undefined {
  return instructors.find((i) => i.id === id);
}

export function getInstructors(track?: Track): Instructor[] {
  return track ? instructors.filter((i) => i.track === track) : instructors;
}

/* ---------------- Formatting helpers ---------------- */

const faDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

/** Convert Latin digits in a string to Farsi digits. */
export function toFa(input: string | number): string {
  return String(input).replace(/[0-9]/g, (d) => faDigits[Number(d)]);
}

/** Format a Toman price with thousands separators + Farsi digits. */
export function formatPrice(toman: number): string {
  return toFa(toman.toLocaleString("en-US"));
}
