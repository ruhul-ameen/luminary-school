"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar/Navbar"
import Sidebar from "@/components/Sidebar/Sidebar"
import styled from "styled-components"
import tw from "twin.macro"
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2"
import { HiOutlineArrowLeftOnRectangle } from "react-icons/hi2"

const Main = styled.main`
  ${tw`w-full h-screen bg-[#B6FFCE] bg-opacity-40 pl-1 md:pl-2 lg:pl-4 py-5 overflow-y-auto`}
`

const Dashboard = ({ children }: any) => {
  return (
    <section tw="flex h-screen">
      <div tw="h-screen bg-[#998CEB] bg-opacity-70">
        <Sidebar />
      </div>

      <div tw="w-full relative">
        <div tw="absolute w-full z-50">
          <Navbar />
        </div>
        <Main>{children}</Main>
      </div>
    </section>
  )
}

export default Dashboard
