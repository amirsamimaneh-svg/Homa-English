import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { BlogClient } from "./BlogClient";
import { blogPosts } from "@/lib/data";

export const metadata = { title: "بلاگ — هما" };

export default function BlogPage() {
  return (
    <div className="bg-page min-h-screen">
      <Header active="/blog" />
      <section className="px-6 md:px-20 pt-16 pb-5 text-center">
        <div className="text-[13px] font-bold text-amber-600 mb-2.5">بلاگ هما</div>
        <h1 className="text-[32px] font-extrabold">مقالاتی برای یادگیری بهتر</h1>
      </section>
      <BlogClient posts={blogPosts} />
      <Footer simple />
    </div>
  );
}
