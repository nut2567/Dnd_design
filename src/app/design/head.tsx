"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation"; // ✅ ใช้ useRouter
import Swal from "sweetalert2";

const tabs = [
  { id: "1", label: "testpage", path: "/design/emptrypage" },
  { id: "2", label: "stress-test", path: "/design" },
];

export default function Head() {
  const pathname = usePathname();
  const router = useRouter(); // ✅ ใช้ useRouter

  const handleNavigation = (e: React.MouseEvent, tabPath: string): void => {
    if (pathname === "/design/emptrypage" && tabPath !== "/design/emptrypage") {
      e.preventDefault(); // ยกเลิกการนำทางชั่วคราว

      Swal.fire({
        title: "คุณแน่ใจหรือไม่ที่ต้องการออกจากหน้านี้?",
        showCancelButton: true,
        confirmButtonText: "confirm",
        icon: "question",
      }).then((result) => {
        if (result.isConfirmed) {
          // ถ้าผู้ใช้กด "Save"
          router.push(tabPath); // เปลี่ยนหน้าโดยใช้ router.push
        }
        // ถ้าผู้ใช้กด "Cancel" จะไม่ทำอะไร (ยังคงอยู่ในหน้าเดิม)
      });
    }
  };

  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-black z-60 sticky top-0">
      <div className="w-full pl-4 md:p-3 pt-3 flex font-semibold justify-between items-center gap-2 text-sm">
        <div className="flex gap-5 justify-start items-center w-full">
          {tabs.map((tab) => (
            <Link key={tab.id} href={tab.path}>
              <span
                className={`px-4 py-2 rounded cursor-pointer ${pathname === tab.path ? "bg-blue-500" : "bg-gray-700"}`}
                onClick={(e) => handleNavigation(e, tab.path)}
              >
                {tab.label}
              </span>
            </Link>
          ))}
        </div>
        <div>
          <Link href={`/`}>
            <span
              className={`px-4 py-2 rounded cursor-pointer bg-red-400/100`}
              onClick={(e) => handleNavigation(e, "/")}
            >
              {`back`}
            </span>
          </Link>
        </div>
        <div>
          <div className="flex justify-center items-center w-full h-full">
            <p className="whitespace-nowrap"> powered by</p>
            <div className="ml-2">
              <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                <Image
                  className="dark:invert"
                  src="https://nextjs.org/icons/next.svg"
                  alt="Next.js logo"
                  width={90}
                  height={18}
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}