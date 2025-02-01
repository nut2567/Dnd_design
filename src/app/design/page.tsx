"use client";
import Container from '@/components/Container'


export default function DragAndDropExample() {

  return (
    <main className="flex-1 grid items-center justify-items-center h-full p-10">
      <div className=" bg-gray-200 min-h-full w-10/12 text-black">
        <p>And Drop Here</p>
        <Container />
      </div>

    </main>
  );
}
