import { PhoneFrame } from "@/components/app/PhoneFrame";
import { LmsTabBar } from "@/components/app/LmsTabBar";
import { ClassPlayer } from "./ClassPlayer";

export const metadata = { title: "پخش کلاس — سامانه آموزش هما" };

export default function ClassPage() {
  return (
    <PhoneFrame bg="#0A1F33">
      <ClassPlayer />
      <LmsTabBar active="courses" />
    </PhoneFrame>
  );
}
