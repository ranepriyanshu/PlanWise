"use client";
import {useState} from 'react'
import Image from 'next/image';
import {LockIcon, LucideIcon, Home, X, Briefcase, Search, Users, Settings, User,  ChevronUp, ChevronDown, AlertCircle, ShieldAlert, AlertTriangle, AlertOctagon, Layers3} from "lucide-react";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "./../../Redux";
import { setIsSidebarCollapsed } from "./../../../src/state/index"




const Sidebar = () => {
   const [showProjects , setShowProjects] = useState(true);
   const [showPriority, setShowPriority] = useState(true);

   const dispatch = useAppDispatch();
   const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

   const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 
   dark:bg-black overflow-y-auto bg-white ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}`;
  return (
    <div className={sidebarClassNames}>
        <div className="flex h-[100%] w-full flex-col justify-start">
            {/* TOP LOGO */}
            <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
                <div className="text-xl font-bold text-gray-800 dark:text-white">
                    PlanWise
                </div>

                {isSidebarCollapsed ? null : (
                    <button className='py-3' onClick={()=> dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}>
                    <X className='h-6 w-6 cursor-pointer dark:text-white text-gray-800 hover:text-gray-500'></X></button>
                )}

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
                <SideBarLink icon={Briefcase} Label='Timeline' href='/timeline'/>
                <SideBarLink icon={Search} Label='Search' href='/search'/>
                <SideBarLink icon={Settings} Label='Settings' href='/settings'/>
                <SideBarLink icon={User} Label='Users' href='/users'/>
                <SideBarLink icon={Users} Label='Teams' href='/teams'/>
               
            </nav>

            {/* {Priority Links} */}

            <button onClick={()=> setShowProjects((prev) => !prev)} className="flex cursor-pointer items-center justify-between
            w-full px-8 py-4 text-gray-500" >

                <span className=''>Projects</span>
                {showProjects ?(
                    <ChevronUp className='h-5 w-5 cursor-pointer'/>
                ):(
                    <ChevronDown className='h-5 w-5 cursor-pointer '/>
                )
                 }  </button>

            <button onClick={()=> setShowPriority((prev) => !prev)} className="flex cursor-pointer items-center justify-between
            w-full px-8 py-4 text-gray-500" >

            <span className=''>Praority</span>
            {showPriority ?(
            <ChevronUp className='h-5 w-5 cursor-pointer'/>
             ):(
            <ChevronDown className='h-5 w-5 cursor-pointer '/>
             )
            } </button>

            {showPriority &&(

                <>
                <SideBarLink icon={AlertCircle} Label='Urgent' href='/priority/urgent'/>
                <SideBarLink icon={ShieldAlert} Label='High' href='/priority/high'/>
                <SideBarLink icon={AlertTriangle} Label='Medium' href='/priority/medium'/>
                <SideBarLink icon={AlertOctagon} Label='Low' href='/priority/low'/>
                <SideBarLink icon={Layers3} Label='Backlog' href='/Priority/backlog'/>
               
                </>
            )}


        </div>
    </div> 
  )
};

interface sideBarLinkProps {
    href: string;
    icon: LucideIcon;
    Label: string;
   


}
const SideBarLink = ({

    href, 
    icon: Icon, 
    Label,
   

}: sideBarLinkProps) =>{

    const pathname = usePathname();
    const isActive = pathname === href||(pathname==="/" && href==="/dashboard");
    
 return (

        <Link href={href} className="w-full">
            <div className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700 
                ${isActive ? "bg-gray-100 text-white dark:bg-gray-600" : ""}justify-start px-8 py-3`}>

                {isActive && (
                    <div className="absolute left-0 to0 h-[100%] w-[5px] bg-blue-200"></div>
                )}

                 <Icon className='h-6 w-6 text-gray-800 dark:text-white' ></Icon>
                 <span className={`font-medium text-gray-800 dark:text-white`}>   
                    {Label}
                 </span>
            </div>
        </Link>
    )

}
// const SideBarLink = ({ href, icon: Icon, Label }: sideBarLinkProps) => {
//     const pathname = usePathname();
//     const isActive = pathname === href || (pathname === "/" && href === "/dashboard");
  
//     return (
//       <Link href={href} className="w-full">
//         <div
//           className={`relative flex items-center gap-3 px-4 py-3 transition-all duration-300 
//           ${
//             isActive
//               ? "text-blue-500 font-semibold dark:text-blue-400"
//               : "text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
//           }`}
//         >
//           {isActive && (
//             <div className="absolute left-0 top-0 h-full w-[3px] rounded-r-md bg-blue-500 dark:bg-blue-400"></div>
//           )}
  
//           <Icon className="h-6 w-6" />
//           <span className="font-medium">{Label}</span>
//         </div>
//       </Link>
//     );
//   };
  
export default Sidebar