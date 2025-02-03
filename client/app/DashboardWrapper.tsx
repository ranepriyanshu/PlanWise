import React from 'react'
import Navbar from "./(components)/Navbar/index"
// import { Sidebar } from 'lucide-react'
import Sidebar from "./(components)/Sidebar/index"

const DashboardWrapper = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-950'>
        <Sidebar/> 
      
       <main className={`dark:bg-dark-bg flex w-full flex-col bg-gray-50 md:pl-64`}>
        <Navbar></Navbar>
        {children}
       </main>
    </div>
  )
}
 
export default DashboardWrapper