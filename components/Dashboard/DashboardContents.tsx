import React from "react"
import tw from "twin.macro"
import LuminaryGlance from "./LuminaryGlance"

const TitleSecondary = tw.h2`
  text-[#1d1d1d]
  text-xl
  font-bold
  mb-1
`
const Paragraph = tw.p`
  text-gray-400
  text-sm
`
const Span = tw.span`
  text-[#6528F7]
  font-bold
`

const DashboardContent = () => {
  return (
    <>
      <div tw="w-full h-screen px-10 py-5">
        <div tw="mb-5">
          <TitleSecondary>Welcome!</TitleSecondary>
          <Paragraph>
            Build your carrier with <span tw="">Luminary School</span>
          </Paragraph>
        </div>
        <LuminaryGlance />
      </div>
    </>
  )
}

export default DashboardContent
