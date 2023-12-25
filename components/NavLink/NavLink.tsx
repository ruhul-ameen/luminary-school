"use client"
import tw, { styled } from "twin.macro"
import Link from "next/link"
import { useEffect, useState } from "react"

const StyledNavLink = styled.a(({ isActive }: any) => [
  tw`text-gray-500 hover:text-gray-700`,
  isActive && tw`text-blue-500`,
])

const NavLink = ({ href, children }: any) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const currentPath = window.location.pathname
    setIsActive(currentPath === href)
  }, [href])

  const handleClick = () => {
    console.log("Link clicked")
  }

  return (
    <Link href={href} passHref>
      <StyledNavLink isActive={isActive} onClick={handleClick}>
        {children}
      </StyledNavLink>
    </Link>
  )
}

export default NavLink
