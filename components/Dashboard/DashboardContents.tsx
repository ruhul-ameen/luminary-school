import React from "react"
import tw from "twin.macro"
import LuminaryGlance from "./DashboardGlanceCard"
import DashboardStudentGrade from "./DashboardStudentGrade"
import DashboardQuote from "./DashboardQuote"

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
    <section tw="h-screen mt-14">
      <div tw="mb-5">
        <TitleSecondary>Welcome!</TitleSecondary>
        <Paragraph>
          Build your carrier with <span tw="">Luminary School</span>
        </Paragraph>
      </div>
      <div tw="flex flex-row items-start justify-between gap-2">
        <div tw="md:w-[80%] lg:w-[85%]">
          <LuminaryGlance />
          <DashboardStudentGrade />
        </div>
        <div tw="md:w-[20%] lg:w-[15%] h-screen py-4 px-1 lg:px-5">
          <DashboardQuote />
        </div>
      </div>
    </section>
  )
}

export default DashboardContent
