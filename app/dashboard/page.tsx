"use client";
import { DemoGraphics } from "@/components/demographics";
import { Increase } from "@/components/increase";

export default function DashboardPage() {
  return (
    <div className="flex p-6 gap-10 flex-wrap">
      <DemoGraphics />
      <Increase />
    </div>
  );
}
