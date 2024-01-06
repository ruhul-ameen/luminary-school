import { StudentGrade } from "@/type"
import React, { useState } from "react"
import GradeStudents from "../Students/GradeStudents"
import tw from "twin.macro"
import styled from "styled-components"
import { FaArrowDown } from "react-icons/fa"
import { FaArrowUp } from "react-icons/fa"

const MoreButton = styled.button`
  ${tw`flex  flex-row md:flex-col items-center justify-center gap-2 font-semibold p-2 bg-[#FFB72B] text-[#ffffff]
  hover:bg-[#01D28E] animate-bounce`}
`
const LessButton = styled.button`
  ${tw`flex flex-row md:flex-col items-center justify-center gap-2 font-semibold p-2 bg-[#FFB72B] text-[#ffffff]
  hover:bg-[#01D28E] animate-bounce`}
`

const gradeStudentsData: StudentGrade[] = [
  {
    id: 1,
    name: "Mahin",
    imgUrl: "/images/dashboard/grade/mahin.png",
    grade: 4,
    assignments: 5,
    activities: 2,
    rewards: 4,
    gradingPoints: 78,
  },
  {
    id: 2,
    name: "Tithi",
    imgUrl: "/images/dashboard/grade/tithi.jpg",
    grade: 2,
    assignments: 5,
    activities: 2,
    rewards: 4,
    gradingPoints: 85,
  },
  {
    id: 3,
    name: "Kaniz",
    imgUrl: "/images/dashboard/grade/kaniz.jpg",
    grade: 1,
    assignments: 5,
    activities: 2,
    rewards: 4,
    gradingPoints: 88,
  },
  {
    id: 4,
    name: "rehan",
    imgUrl: "/images/dashboard/grade/rehan.jpg",
    grade: 5,
    assignments: 5,
    activities: 2,
    rewards: 4,
    gradingPoints: 76,
  },
  {
    id: 5,
    name: "nishita",
    imgUrl: "/images/dashboard/grade/nishita.jpg",
    grade: 6,
    assignments: 5,
    activities: 2,
    rewards: 4,
    gradingPoints: 60,
  },
  {
    id: 6,
    name: "Labonyo",
    imgUrl: "/images/dashboard/grade/Labonyo.jpg",
    grade: 3,
    assignments: 5,
    activities: 2,
    rewards: 4,
    gradingPoints: 80,
  },
]

const DashboardStudentGrade = () => {
  const [showAll, setShowAll] = useState(false)

  const sortedGradeStudentsList = gradeStudentsData.sort(
    (a, b) => b.gradingPoints - a.gradingPoints
  )

  const displayedStudents = showAll
    ? sortedGradeStudentsList
    : sortedGradeStudentsList.slice(0, 4)

  return (
    <div tw="mt-10 relative bg-slate-100 bg-opacity-30 py-5 px-1">
      <div tw="flex flex-col md:flex-row justify-center md:justify-start gap-3 mb-5">
        <h1 tw="text-[#344D67] text-lg md:text-2xl font-medium">
          Student of the
        </h1>
        <div tw="flex items-center gap-2">
          <button tw="bg-[#7071E8] text-[#ffffff] text-sm md:text-base px-2 rounded-sm hover:bg-[#01D28E]">
            Day
          </button>
          <button tw="bg-[#FF7676] text-[#ffffff] text-sm md:text-base px-2 rounded-sm hover:bg-[#01D28E]">
            Week
          </button>
          <button tw="bg-[#0079FF] text-[#ffffff] text-sm md:text-base px-2 rounded-sm hover:bg-[#01D28E]">
            Month
          </button>
        </div>
      </div>

      <div></div>
      <div tw="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center md:justify-items-end lg:justify-items-center gap-y-10 lg:gap-x-5 px-2 lg:pl-10 xl:pl-10 pr-0">
        {displayedStudents.map((gradeStudents) => (
          <GradeStudents key={gradeStudents.id} gradeStudents={gradeStudents} />
        ))}
      </div>
      <div tw="md:absolute md:top-[44%] md:left-1 lg:left-0 ">
        <div tw="flex items-center justify-center my-10">
          {showAll ? (
            <LessButton onClick={() => setShowAll(false)}>
              <p tw="hidden md:block">
                {" "}
                L <br /> e <br /> s <br /> s
              </p>
              <p tw="block md:hidden">Less</p>
              <FaArrowUp />
            </LessButton>
          ) : (
            <MoreButton onClick={() => setShowAll(true)}>
              <p tw="hidden md:block">
                {" "}
                M <br /> o <br /> r <br /> e{" "}
              </p>
              <p tw="block md:hidden">More</p>
              <FaArrowDown />
            </MoreButton>
          )}
        </div>
      </div>
    </div>
  )
}

export default DashboardStudentGrade
