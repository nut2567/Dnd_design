"use client";
import Container from '@/components/Container'

import SideNavigation from "@/layouts/SideNavigation";

export default function DragAndDropExample() {

  return (
    <div className=" grid items-center justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)] p-10">
      <div className=" bg-gray-200 min-h-full w-10/12 text-black">
        <p>And Drop Here</p>

        <SideNavigation />
        <Container />
      </div>

    </div>
  );
}
