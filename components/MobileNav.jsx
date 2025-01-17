"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries, } from  "react-icons/ci";
import Link from "next/link";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "projects",
        path: "/projects"
    },
    {
        name: "contact",
        path: "/contact"
    },
];



const MobileNav = () => {

    const pathname = usePathname();
  return (
    <Sheet>
        <SheetTrigger>
            <CiMenuFries className="text-[32px] text-accent"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className="mt-20 mb-10 text-center text-2xl ">
                <Link href="/">
                    KamoDev<span className="text-accent">.</span>
                </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-8">
                {
                    links.map((link, index) => {
                        return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>{link.name}</Link>
                    })
                }
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav