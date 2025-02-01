"use client";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Head from './head';
import SideNavigation from "@/layouts/SideNavigation";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DndProvider backend={HTML5Backend} >
      <SideNavigation />
      <div className=' pl-20 min-h-screen flex flex-col '>
        <Head />
        {children}
      </div>

    </DndProvider>
  );
}
