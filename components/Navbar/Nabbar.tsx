import Link from "next/link"
import React from "react"
import { GrHome } from "react-icons/gr"
import { MdOutlineNotificationsActive } from "react-icons/md"
import { TiMessages } from "react-icons/ti"
import { CiSearch } from "react-icons/ci"
import tw from "twin.macro"

const Div = tw.div`
w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center p-2 hover:bg-gray-300 hover:scale-110 cursor-pointer
`

const Navbar = () => {
  return (
    <nav tw="w-full h-min">
      <div tw="border-b-2 border-b-gray-300 px-10 py-3">
        <div tw="flex items-center justify-between">
          <div tw="flex items-center justify-center bg-gray-200 px-2 rounded-sm">
            <input
              type="search"
              name="search"
              id=""
              placeholder="Search here"
              tw="text-gray-700 bg-gray-200 px-5 py-2 outline-none w-max"
            />
            <CiSearch tw="h-6 w-6 cursor-pointer hover:scale-110" />
          </div>
          <div tw="flex items-center gap-3">
            <Div>
              <Link href={"/"}>
                <GrHome />
              </Link>
            </Div>
            <Div tw="relative">
              <MdOutlineNotificationsActive />
              <div tw="absolute -top-2 right-0 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-[10px] text-white">
                0
              </div>
            </Div>
            <Div tw="relative">
              <TiMessages />
              <div tw="absolute -top-2 right-0 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-[10px] text-white">
                0
              </div>
            </Div>
            <div
              tw="flex items-center gap-2 hover:scale-110 cursor-pointer"
              className="group"
            >
              <div tw="p-2">
                <img
                  src="/images/students/student-1.jpg"
                  alt="student-1"
                  tw="w-10 h-10 rounded-full"
                ></img>
              </div>
              <div tw="flex flex-col items-center">
                <h4 tw="text-gray-500 text-sm font-semibold uppercase group-hover:text-gray-800">
                  Shimanto
                </h4>
                <p tw="text-gray-400 text-xs group-hover:text-gray-500">
                  Admin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
