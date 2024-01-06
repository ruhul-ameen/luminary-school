import Image from "next/image"
import React from "react"
import Mahin from "@/public/images/dashboard/grade/mahin.png"
import tw from "twin.macro"
import styled from "styled-components"

const ImageContainer = styled(Image)`
  ${tw`w-8 h-8 lg:w-12 lg:h-12 rounded-full`}
`
const ActivityContainer = styled.div`
  ${tw`flex items-center gap-8 lg:gap-10 text-[#344D67] font-medium lg:font-semibold mb-1`}
`

const GradeStudents = ({ gradeStudents }: any) => {
  const { name, imgUrl, grade, assignments, activities, rewards } =
    gradeStudents
  return (
    <div className="group">
      <div tw="bg-white w-min px-3 xl:px-10 pt-10 pb-5 rounded shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-all">
        <div tw="flex justify-between items-center mb-5">
          <div tw="relative">
            <ImageContainer
              src={imgUrl}
              sizes="100vw"
              height={0}
              width={0}
              priority
              alt="name"
            />
            <p tw="w-max bg-[#01D28E] px-2 py-[2px] text-white rounded-full text-sm absolute -top-5 left-5 animate-pulse">
              {grade} Grade
            </p>
          </div>
          <h1 tw="text-[#344D67] text-lg lg:text-2xl font-semibold capitalize">
            {name}
          </h1>
        </div>
        <div tw="flex items-center justify-between gap-2 mb-5">
          <button tw="bg-[#605CB8] hover:bg-[#BC7AF9] rounded text-sm lg:text-base text-white font-thin w-max px-2 py-1">
            Today
          </button>
          <button tw="text-[#344D67] hover:bg-[#FF7E67] text-sm lg:text-base hover:text-[#ffffff] font-thin rounded py-1 px-2">
            Week
          </button>
          <button tw="text-[#344D67] hover:bg-[#3559E0] text-sm lg:text-base hover:text-[#ffffff] font-thin rounded py-1 px-2">
            Month
          </button>
        </div>
        <div tw="flex items-center justify-center mb-5">
          <div tw="w-min px-3 py-2 bg-[#A3F7BF] bg-opacity-40">
            <ActivityContainer>
              <p tw="w-20 lg:w-28 text-xs lg:text-base">Assignments :</p>
              <p>{assignments}</p>
            </ActivityContainer>
            <ActivityContainer>
              <p tw="w-20 lg:w-28 text-xs lg:text-base">Activities :</p>
              <p>{activities}</p>
            </ActivityContainer>
            <ActivityContainer>
              <p tw="w-20 lg:w-28 text-xs lg:text-base">Rewards :</p>
              <p>{rewards}</p>
            </ActivityContainer>
          </div>
        </div>
        <div tw="flex items-center justify-center">
          <button tw="px-4 py-1 border-2 rounded border-[#FF7E67] text-[#FF7E67] hover:bg-[#FF7E67] hover:text-[#ffffff] uppercase font-semibold">
            View
          </button>
        </div>
      </div>
    </div>
  )
}

export default GradeStudents
