import Link from "next/link"
import React, { useState } from "react"
import { GrHome } from "react-icons/gr"
import { MdOutlineNotificationsActive } from "react-icons/md"
import { TiMessages } from "react-icons/ti"
import { CiSearch } from "react-icons/ci"
import tw from "twin.macro"
import Users from "../Users/Users"
import styled from "styled-components"

const NotificationContainerHome = tw.div`
w-8 h-8 rounded-full bg-[#ffffff] flex items-center justify-center p-2 hover:bg-gray-300 hover:scale-110 cursor-pointer
`
const NotificationContainer = tw.div`
w-8 h-8 rounded-full bg-[#ffffff] flex items-center justify-center p-2 hover:bg-gray-300 hover:scale-110 cursor-pointer
`

const SearchContainer = styled.div`
  ${tw`flex items-center justify-center bg-gray-200 px-2 rounded-sm`}
`

const SearchInput = styled.input`
  ${tw`text-gray-700 bg-gray-200 px-5 py-2 outline-none w-max`}
`
const SearchButton = tw.button`hover:scale-110
`

const users = [
  {
    id: 1,
    name: "Lily",
    post: "Admin",
    imageUrl: "/images/students/student-1.jpg",
  },
]

const Navbar = () => {
  const [inputFieldOpen, setInputFieldOpen] = useState(false)
  const handleInputFieldOpen = () => {
    setInputFieldOpen(!inputFieldOpen)
  }

  return (
    <nav tw="w-full h-min bg-[#ffffff]">
      <div tw="border-b-2 border-b-gray-300 px-10 py-3">
        <div tw="flex items-center justify-between">
          <div tw="hidden md:block">
            <SearchContainer>
              <SearchInput
                type="search"
                name="search"
                id=""
                placeholder="Search here"
              />

              <SearchButton>
                <CiSearch tw="h-6 w-6 cursor-pointer hover:scale-110" />
              </SearchButton>
            </SearchContainer>
          </div>
          <div tw="block md:hidden" onClick={handleInputFieldOpen}>
            <SearchContainer>
              {inputFieldOpen ? (
                <>
                  <SearchInput
                    type="search"
                    name="search"
                    id=""
                    placeholder="Search here"
                    tw="text-gray-700 bg-gray-200 px-5 py-2 outline-none w-max"
                  />
                  <CiSearch tw="h-6 w-6 cursor-pointer hover:scale-110" />
                </>
              ) : (
                <CiSearch tw="h-6 w-6 cursor-pointer hover:scale-110" />
              )}
            </SearchContainer>
          </div>

          <div tw="flex items-center gap-3">
            <NotificationContainerHome>
              <Link href={"/"}>
                <GrHome />
              </Link>
            </NotificationContainerHome>
            <div tw="hidden lg:block">
              <div tw="flex items-center justify-center gap-3">
                <NotificationContainer tw="relative">
                  <MdOutlineNotificationsActive />
                  <div tw="absolute -top-2 right-0 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-[10px] text-white">
                    0
                  </div>
                </NotificationContainer>
                <NotificationContainer tw="relative">
                  <TiMessages />
                  <div tw="absolute -top-2 right-0 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-[10px] text-white">
                    0
                  </div>
                </NotificationContainer>
              </div>
            </div>
            {users.map((user) => (
              <Users key={user.id} user={user} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
