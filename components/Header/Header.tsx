"use client"

import React, { useState } from "react"
import tw from "twin.macro"
import Link from "next/link"

const Title = tw.h1`
hover:bg-violet-200 hover:text-violet-700 hover:rounded-md cursor-pointer p-2 px-6 uppercase font-semibold
`
const Header = () => {
  const [activeLink, setActiveLink] = useState("/")

  const handleLinkClick = (link: any) => {
    setActiveLink(link)
  }
  return (
    <header tw="px-20">
      <nav tw="flex items-center justify-between py-4">
        <div>
          <h1 tw="text-xl font-bold text-indigo-500">Luminary School</h1>
        </div>
        <div tw="flex items-center gap-5">
          <Link href={"/"} passHref>
            <div
              css={[
                activeLink === "/" &&
                  tw`text-[#6528F7] bg-[#D9D7F1] rounded-md`,
                activeLink !== "/" && tw`text-[#1d1d1d]`,
              ]}
              onClick={() => handleLinkClick("/")}
            >
              <Title>Home</Title>
            </div>
          </Link>
          <Link href={"/teachers"} passHref>
            <div
              css={[
                activeLink === "/teachers" &&
                  tw`text-[#6528F7] bg-[#D9D7F1] rounded-md`,
                activeLink !== "/" && tw`text-[#1d1d1d]`,
              ]}
              onClick={() => handleLinkClick("/teachers")}
            >
              <Title>Teacher</Title>
            </div>
          </Link>
          <Link href={"/students"} passHref>
            <div
              css={[
                activeLink === "/students" &&
                  tw`text-[#6528F7] bg-[#D9D7F1] rounded-md`,
                activeLink !== "/" && tw`text-[#1d1d1d]`,
              ]}
              onClick={() => handleLinkClick("/students")}
            >
              <Title>Student</Title>
            </div>
          </Link>
          <Link href={"/dashboard"} passHref>
            <div
              css={[
                activeLink === "/dashboard" &&
                  tw`text-[#6528F7] bg-[#D9D7F1] rounded-md`,
                activeLink !== "/" && tw`text-[#1d1d1d]`,
              ]}
              onClick={() => handleLinkClick("/dashboard")}
            >
              <Title>Dashboard</Title>
            </div>
          </Link>
          <Link href={"/admin"} passHref>
            <div
              css={[
                activeLink === "/admin" &&
                  tw`text-[#6528F7] bg-[#D9D7F1] rounded-md`,
                activeLink !== "/" && tw`text-[#1d1d1d]`,
              ]}
              onClick={() => handleLinkClick("/admin")}
            >
              <Title>Admin</Title>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
