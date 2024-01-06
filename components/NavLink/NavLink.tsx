"use client"

import tw from "twin.macro"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styled from "styled-components"
import { useState } from "react"

const ActiveLink = styled(Link)`
  ${tw`text-lg font-medium text-[#1d1d1d] hover:bg-[#D9D7F1] hover:text-[#6528F7] hover:font-medium hover:rounded-md cursor-pointer p-2 relative h-auto
  flex items-center justify-center gap-4`};
  ${({ isActive }: any) =>
    isActive && tw`text-[#6528F7] bg-[#D9D7F1] rounded-md`}
`
const ActiveLinkItems = styled.div`
  ${tw`w-32 flex items-center justify-start gap-2 cursor-pointer`}
`

const SubMenu = styled.div`
  ${tw`hidden absolute right-0 mt-2 bg-[#D9D7F1] text-[#6528F7] p-2`}
  ${tw`transition-opacity ease-in-out duration-300`}
  ${({ isOpen }: any) => isOpen && tw`opacity-100 pointer-events-auto`}
`
const SubLink = styled(Link)`
  ${({ isActive }: any) =>
    isActive && tw`text-[#6528F7] bg-[#D9D7F1] rounded-md`}
  ${tw`cursor-pointer hover:bg-green-300`}
`

const NavLink = ({ navLinkItem }: any) => {
  const { navLabel, navLink, icon, down, up, sub } = navLinkItem

  const pathname = usePathname()
  const currentPath = pathname

  const [isDownArrow, setIsDownArrow] = useState(true)
  const [openMenu, setOpenMenu] = useState(null)

  const handleToggleMenu = ({ menu }: any) => {
    setIsDownArrow(!isDownArrow)
    setOpenMenu(openMenu === menu ? null : menu)
  }

  return (
    <>
      <ActiveLink
        href={navLink}
        onClick={() => handleToggleMenu(navLabel)}
        isActive={currentPath === navLink}
      >
        <ActiveLinkItems>
          {icon}
          <p>{navLabel}</p>
          {isDownArrow ? <div>{down}</div> : <div>{up}</div>}
        </ActiveLinkItems>
      </ActiveLink>
      <SubMenu isOpen={openMenu === navLabel}>
        <div tw="flex flex-col gap-2">
          {sub.map(({ link, label }: any) => (
            <SubLink key={link} href={link} isActive={currentPath === link}>
              {label}
            </SubLink>
          ))}
        </div>
      </SubMenu>
    </>
  )
}

export default NavLink
