"use client";
import {useState} from 'react'
import Image from 'next/image';
import {LockIcon, LucideIcon, Home} from "lucide-react";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "./../../Redux";




const Sidebar = () => {
   const [showProjects , setShowProjects] = useState(true);
   const [showPriority, setShowPraority] = useState(true);

   const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 
   dark:bg-black overflow-y-auto bg-white w-64`;
  return (
    <div className={sidebarClassNames}>
        <div className="flex h-[100%] w-full flex-col justify-start">
            {/* TOP LOGO */}
            <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
                <div className="text-xl font-bold text-gray-800 dark:text-white">
                    EDLIST
                </div>
            </div>
            {/* Team */}
            <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
                <Image src="/logo.png" alt="logo" width={40} height={40} />
                <div>
                    <h3 className="text-md font-bold tracking-wide dark:text-white">
                        YOUR TEAM
                    </h3>
                    <div className="mt-1 flex items-start gap-2">
                        <LockIcon className='mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400'></LockIcon>
                        <p className="text-xs text-gray-500">Private</p>
                    </div>
                </div>
            </div>
            {/* {NavbarLinks} */}
            <nav className="z-10 w-full">
                <SideBarLink icon={Home} Label='Home' href='/'/>
            </nav>
        </div>
    </div> 
  )
};

interface sideBarLinkProps {
    href: string;
    icon: LucideIcon;
    Label: string;
    // isCollapsed: boolean;


}
// const SideBarLink = ({

//     href, 
//     icon: Icon, 
//     Label,
//     // isCollapsed

// }: sideBarLinkProps) =>{

//     const pathname = usePathname();
//     const isActive = pathname === href||(pathname==="/" && href==="/dashboard");
//     const screenWidth = window.innerWidth;


//     const dispatch = useAppDispatch();
//     const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

//     return (

//         <Link href={href} className="w-full">
//             <div className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700 ${isActive ? "bg-gray-100 text-white dark:bg-gray-600" : ""}`}>

//                 {isActive && (
//                     <div className="absolute left-0 to0 h-[100%] w-[5px] bg-blue-200"></div>
//                 )}

//                  <Icon className='h-6 w-6 text-gray-800 dark:text-white' ></Icon>
//                  <span className={`font-medium text-gray-800 dark:text-white`}>
//                     {Label}
//                  </span>
//             </div>
//         </Link>
//     )

// }
const SideBarLink = ({ href, icon: Icon, Label }: sideBarLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href || (pathname === "/" && href === "/dashboard");
  
    return (
      <Link href={href} className="w-full">
        <div
          className={`relative flex items-center gap-3 px-4 py-3 transition-all duration-300 
          ${
            isActive
              ? "text-blue-500 font-semibold dark:text-blue-400"
              : "text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          }`}
        >
          {isActive && (
            <div className="absolute left-0 top-0 h-full w-[3px] rounded-r-md bg-blue-500 dark:bg-blue-400"></div>
          )}
  
          <Icon className="h-6 w-6" />
          <span className="font-medium">{Label}</span>
        </div>
      </Link>
    );
  };
  
export default Sidebar