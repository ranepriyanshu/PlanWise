"use client";
import React, { useEffect } from 'react'
import Navbar from "./(components)/Navbar/index"
// import { Sidebar } from 'lucide-react'
import Sidebar from "./(components)/Sidebar/index"
import StoreProvider, { useAppSelector } from './Redux';

const DashboardLayout = ({ children }: {children: React.ReactNode}) => {
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if(isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-950'>
        <Sidebar/> 
      
       <main className={`dark:bg-dark-bg flex w-full flex-col bg-gray-50 ${
        isSidebarCollapsed ? "" : "md:pl-64"}`}>
        <Navbar></Navbar>
        {children}
       </main>
    </div>
  )
};

const DashboardWrapper =  ({ children }: {children: React.ReactNode}) => {
  return (
  
    <StoreProvider><DashboardLayout>{children}</DashboardLayout></StoreProvider>
);
}; 
 
export default DashboardWrapper