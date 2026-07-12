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
    name: "سارا محمدی",
    track: "language",
    title: "مدرس ارشد آیلتس",
    bio: "بیش از ۱۰ سال سابقه تدریس زبان انگلیسی و آمادگی آزمون‌های بین‌المللی با تمرکز بر مهارت رایتینگ و اسپیکینگ.",
    credentials: ["CELTA", "آیلتس ۸.۵", "کارشناسی ارشد آموزش زبان"],
  },
  {
    id: "david-clarke",
    name: "دیوید کلارک",
    track: "language",
    title: "مدرس مکالمه (Native)",
    bio: "مدرس بومی زبان انگلیسی با تخصص در مکالمه و تلفظ، دارای گواهی TESOL و سال‌ها تجربه تدریس آنلاین.",
    credentials: ["TESOL", "Native Speaker", "۸ سال تجربه"],
  },
  {
    id: "reza-tabrizi",
    name: "کاپیتان رضا تبریزی",
    track: "pilot",
    title: "خلبان ارشد و مدرس هوانوردی",
    bio: "خلبان با بیش از ۱۲٬۰۰۰ ساعت پرواز و مدرس رسمی دوره‌های تئوری خلبانی و آماده‌سازی آزمون‌های استاندارد.",
    credentials: ["ATPL", "۱۲٬۰۰۰+ ساعت پرواز", "مدرس CAA"],
  },
  {
    id: "mahdi-ahmadi",
    name: "مهندس مهدی احمدی",
    track: "pilot",
    title: "مدرس تئوری هوانوردی",
    bio: "متخصص هواشناسی و قوانین هوانوردی با سابقه همکاری با سازمان هواپیمایی کشوری.",
    credentials: ["کارشناسی ارشد هوافضا", "مدرس هواشناسی", "۹ سال تجربه"],
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
