"use client"

import Navbar from "@/components/Navbar/Nabbar"
import Sidebar from "@/components/Sidebar/Sidebar"
import tw from "twin.macro"

const Dashboard = ({ children }: any) => {
  return (
    <section tw="flex items-start">
      <Sidebar />
      <div tw="w-full flex flex-col items-center justify-center">
        <Navbar />
        <div>{children}</div>
      </div>
    </section>
  )
}

export default Dashboard
