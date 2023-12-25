import React from "react"
import tw from "twin.macro"

const Footer = () => {
  return (
    <footer tw="bg-[#D2E0FB] px-20 py-4">
      <h1 tw="text-xl font-bold text-indigo-500 text-center">
        Luminary School
      </h1>
      <p tw="text-xs text-center text-gray-500">
        All rights reserved by{" "}
        <span tw="text-indigo-500 text-sm">Luminary School</span>
      </p>
    </footer>
  )
}

export default Footer
