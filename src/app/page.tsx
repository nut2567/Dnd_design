"use client";

import OnProject from "@/components/onProject";
const data = [
  {
    name: "{ useDrag, useDrop } from 'react-dnd'",
    Libraries: "design",
    link: "/design",
  },
];
export default function Home() {

  return (
    <div className=" grid items-center justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)] p-10">
      <div className=" bg-gradient-to-r from-[#261139] via-indigo-700 to-[#4e1431] min-h-full w-10/12 text-wite">

        <OnProject data={data} />
      </div>

    </div>
  );
}
