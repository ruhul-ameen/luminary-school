"use client"

import Link from "next/link"
import { useState } from "react"
import tw from "twin.macro"
import { MdOutlineDashboard } from "react-icons/md"
import { LiaChalkboardTeacherSolid } from "react-icons/lia"
import { PiStudent } from "react-icons/pi"
import { SlCalender } from "react-icons/sl"
import { LiaPencilRulerSolid } from "react-icons/lia"
import { PiExam } from "react-icons/pi"
import { IoDocumentTextOutline } from "react-icons/io5"

const NavLink = tw.div`
text-lg font-medium text-[#1d1d1d] hover:bg-[#D9D7F1] hover:text-[#6528F7] hover:font-medium hover:rounded-md cursor-pointer p-2
flex items-center justify-center gap-4

`

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("/dashboard")

  const handleLinkClick = (link) => {
    setActiveLink(link)
  }
  return (
    <nav tw="bg-[#F8F6F4] w-min h-screen px-20 py-10">
      <div tw="flex flex-col items-center justify-center gap-20">
        <div>
          <h1 tw="w-max text-xl font-bold text-indigo-500">Luminary School</h1>
        </div>
        <div tw="flex flex-col gap-5 text-gray-500 items-center justify-center text-lg">
          <Link href={"/dashboard"} passHref>
            <NavLink
              css={[
                activeLink === "/dashboard" &&
                  tw`text-[#6528F7] bg-[#D9D7F1] rounded-md`,
                activeLink !== "/dashboard" && tw`text-[#1d1d1d]`,
              ]}
              onClick={() => handleLinkClick("/dashboard")}
            >
              <div tw="w-32 flex items-center justify-center gap-2">
                <MdOutlineDashboard />
                <p>Dashboard</p>
              </div>
            </NavLink>
          </Link>
          <Link href="/dashboard/teacher" passHref>
            <NavLink
              css={[
                activeLink === "/dashboard/teacher" &&
                  tw`text-[#6528F7] bg-[#D9D7F1] rounded-md`,
                activeLink !== "/dashboard/teacher" && tw`text-[#1d1d1d]`,
              ]}
              onClick={() => handleLinkClick("/dashboard/teacher")}
            >
              <div tw="w-32 flex items-center justify-center gap-2">
                <LiaChalkboardTeacherSolid />
                <p>Teacher</p>
              </div>
            </NavLink>
          </Link>
          <Link href={"/dashboard/student"} passHref>
            <NavLink
              css={[
                activeLink === "/dashboard/student" &&
                  tw`text-[#6528F7] bg-[#D9D7F1] rounded-md`,
                activeLink !== "/dashboard/student" && tw`text-[#1d1d1d]`,
              ]}
              onClick={() => handleLinkClick("/dashboard/student")}
            >
              <div tw="w-32 flex items-center justify-center gap-2">
                <PiStudent />
                <p>Student</p>
              </div>
            </NavLink>
          </Link>
          <Link href={"/dashboard/routine"} passHref>
            <NavLink
              css={[
                activeLink === "/dashboard/routine" &&
                  tw`text-[#6528F7] bg-[#D9D7F1] rounded-md`,
                activeLink !== "/dashboard/routine" && tw`text-[#1d1d1d]`,
              ]}
              onClick={() => handleLinkClick("/dashboard/routine")}
            >
              <div tw="w-32 flex items-center justify-center gap-2">
                <SlCalender tw="h-4 w-4" />
                <p>Routine</p>
              </div>
            </NavLink>
          </Link>
          <Link href={"/dashboard/exam"} passHref>
            <NavLink
              css={[
                activeLink === "/dashboard/exam" &&
                  tw`text-[#6528F7] bg-[#D9D7F1] rounded-md`,
                activeLink !== "/dashboard/exam" && tw`text-[#1d1d1d]`,
              ]}
              onClick={() => handleLinkClick("/dashboard/exam")}
            >
              <div tw="w-32 flex items-center justify-center gap-2">
                <LiaPencilRulerSolid />
                <p>Exam</p>
              </div>
            </NavLink>
          </Link>
          <Link href={"/dashboard/result"} passHref>
            <NavLink
              css={[
                activeLink === "/dashboard/result" &&
                  tw`text-[#6528F7] bg-[#D9D7F1] rounded-md`,
                activeLink !== "/dashboard/result" && tw`text-[#1d1d1d]`,
              ]}
              onClick={() => handleLinkClick("/dashboard/result")}
            >
              <div tw="w-32 flex items-center justify-center gap-2">
                <PiExam />
                <p>Result</p>
              </div>
            </NavLink>
          </Link>
          <Link href={"/dashboard/notice"} passHref>
            <NavLink
              css={[
                activeLink === "/dashboard/notice" &&
                  tw`text-[#6528F7] bg-[#D9D7F1] rounded-md`,
                activeLink !== "/dashboard/notice" && tw`text-[#1d1d1d]`,
              ]}
              onClick={() => handleLinkClick("/dashboard/notice")}
            >
              <div tw="w-32 flex items-center justify-center gap-2">
                <IoDocumentTextOutline />
                <p>Notice</p>
              </div>
            </NavLink>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
