"use client"

import tw from "twin.macro"
import { MdOutlineDashboard } from "react-icons/md"
import { LiaChalkboardTeacherSolid } from "react-icons/lia"
import { PiStudent } from "react-icons/pi"
import { SlCalender } from "react-icons/sl"
import { LiaPencilRulerSolid } from "react-icons/lia"
import { PiExam } from "react-icons/pi"
import { IoDocumentTextOutline } from "react-icons/io5"
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"
import NavLink from "../NavLink/NavLink"
import { MenuItem } from "@/type"

const navLinksItems: MenuItem[] = [
  {
    id: 1,
    navLabel: "Dashboard",
    navLink: "/dashboard",
    icon: <MdOutlineDashboard />,
    down: <></>,
    up: <></>,
    sub: [],
  },
  {
    id: 2,
    navLabel: "Teacher",
    navLink: "/dashboard/teacher",
    icon: <LiaChalkboardTeacherSolid />,
    down: <IoIosArrowDown />,
    up: <IoIosArrowUp />,
    sub: [
      {
        label: "Male",
        link: "/dashboard/teacher/primary",
      },
      {
        label: "Female",
        link: "/dashboard/teacher/secondary",
      },
    ],
  },
  {
    id: 3,
    navLabel: "Student",
    navLink: "/dashboard/student",
    icon: <PiStudent />,
    down: <IoIosArrowDown />,
    up: <IoIosArrowUp />,
    sub: [
      {
        label: "Primary",
        link: "/dashboard/student/primary",
      },
      {
        label: "Secondary",
        link: "/dashboard/student/secondary",
      },
      {
        label: "College",
        link: "/dashboard/student/college",
      },
    ],
  },
  {
    id: 4,
    navLabel: "Routine",
    navLink: "/dashboard/routine",
    icon: <SlCalender />,
    down: <IoIosArrowDown />,
    up: <IoIosArrowUp />,
    sub: [
      {
        label: "Examination",
        link: "/dashboard/routine/exam",
      },
      {
        label: "Class",
        link: "/dashboard/routine/class",
      },
    ],
  },
  {
    id: 5,
    navLabel: "Exam",
    navLink: "/dashboard/exam",
    icon: <LiaPencilRulerSolid />,
    down: <IoIosArrowDown />,
    up: <IoIosArrowUp />,
    sub: [
      {
        label: "Primary",
        link: "/dashboard/exam/primary",
      },
      {
        label: "Secondary",
        link: "/dashboard/exam/secondary",
      },
      {
        label: "College",
        link: "/dashboard/exam/college",
      },
    ],
  },
  {
    id: 6,
    navLabel: "Result",
    navLink: "/dashboard/result",
    icon: <PiExam />,
    down: <IoIosArrowDown />,
    up: <IoIosArrowUp />,
    sub: [
      {
        label: "Primary",
        link: "/dashboard/result/primary",
      },
      {
        label: "Secondary",
        link: "/dashboard/result/secondary",
      },
      {
        label: "College",
        link: "/dashboard/result/college",
      },
    ],
  },
  {
    id: 7,
    navLabel: "Notice",
    navLink: "/dashboard/notice",
    icon: <IoDocumentTextOutline />,
    down: <></>,
    up: <></>,
    sub: [],
  },
]

const Sidebar = () => {
  return (
    <nav tw="w-min h-screen">
      <div tw="border-b-2 border-[#ffffff] flex items-center px-4 py-8">
        <h1 tw="w-max text-xl font-bold text-indigo-500">Luminary School</h1>
      </div>
      <div tw="flex flex-col items-center justify-center gap-20 px-4 pt-8 pb-4">
        <div tw="flex flex-col gap-5 text-gray-500 items-center justify-center text-lg">
          {navLinksItems.map((navLinkItem) => (
            <NavLink key={navLinkItem.id} navLinkItem={navLinkItem} />
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
