import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { getInstructors, type Instructor } from "@/lib/data";

export const metadata = { title: "اساتید — هما" };

function LanguageCard({ ins }: { ins: Instructor }) {
  return (
    <div className="card p-6 text-center">
      <div className="w-[88px] h-[88px] rounded-full bg-navy-100 mx-auto mb-4" />
      <div className="text-[15.5px] font-bold">{ins.name}</div>
      <div className="text-[13px] text-muted mt-1">{ins.title}</div>
      <div className="text-[12.5px] text-faint mt-2.5">{ins.experience}</div>
    </div>
  );
}

function PilotCard({ ins }: { ins: Instructor }) {
  return (
    <div className="bg-navy-800 rounded-card p-6 text-center">
      <div className="w-[88px] h-[88px] rounded-full bg-white/10 mx-auto mb-4" />
      <div className="text-[15.5px] font-bold text-white">{ins.name}</div>
      <div className="text-[13px] text-[#AFC3D6] mt-1">{ins.title}</div>
      <div className="text-[12.5px] text-amber-500 mt-2.5">{ins.experience}</div>
    </div>
  );
}

export default function InstructorsPage() {
  const language = getInstructors("language");
  const pilot = getInstructors("pilot");

  return (
    <div className="bg-page min-h-screen">
      <Header active="/instructors" />

      <section className="px-6 md:px-20 pt-16 pb-5 text-center">
        <div className="text-[13px] font-bold text-amber-600 mb-2.5">تیم آموزشی هما</div>
        <h1 className="text-[32px] font-extrabold mb-3">اساتیدی که مسیر واقعی را رفته‌اند</h1>
        <p className="text-[15px] text-muted max-w-[560px] mx-auto leading-[1.85]">
          از مدرسان مجرب زبان تا خلبانان با سابقه پرواز حرفه‌ای.
        </p>
      </section>

      <section className="px-6 md:px-20 pt-10 pb-8 max-w-[1280px] mx-auto">
        <div className="text-[13px] font-bold text-muted mb-5">اساتید زبان</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {language.map((ins) => (
            <LanguageCard key={ins.id} ins={ins} />
          ))}
        </div>
      </section>

      <section className="px-6 md:px-20 pt-2 pb-20 max-w-[1280px] mx-auto">
        <div className="text-[13px] font-bold text-muted mb-5">اساتید خلبانی</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pilot.map((ins) => (
            <PilotCard key={ins.id} ins={ins} />
          ))}
        </div>
      </section>

      <Footer simple />
    </div>
  );
}
