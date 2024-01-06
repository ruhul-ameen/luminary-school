import Image from "next/image"
import React from "react"
import tw from "twin.macro"
import { FaUserTie } from "react-icons/fa6"
import { FaUserGraduate } from "react-icons/fa6"
import Award from "../../public/images/dashboard-icons/award-icon.png"
import Staff from "../../public/images/dashboard-icons/staff-icon.png"
import styled from "styled-components"

const GlanceContainer = styled.div`
  ${tw`min-w-max bg-white  px-4 py-2 rounded group-hover:bg-blue-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]`}
`
const GlanceCard = styled.div`
  ${tw`flex items-center justify-between gap-x-4 lg:gap-x-6 xl:gap-x-10 group-hover:scale-110 transition`}
`
const CardLabel = styled.p`
  ${tw`text-gray-400 text-sm mb-4`}
`
const CardTotal = styled.p`
  ${tw`text-[#344D67] text-xl md:text-2xl lg:text-3xl font-bold`}
`

const GlanceHoverContainer = styled.div`
  ${tw`flex justify-center items-center gap-4 hover:rotate-0 hover:mx-3 relative`}
`
const HoverCard = styled.div`
  ${tw`min-w-max h-auto flex justify-center items-center absolute duration-[0.5s] backdrop:blur-[10px] rotate-[(calc(var(--r)*1deg))] bg-red-500`}
`

const LuminaryGlance = () => {
  return (
    <div>
      <div tw="hidden xl:block">
        <div tw="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-4">
          <GlanceContainer className="group">
            <GlanceCard>
              <div>
                <CardLabel>Teachers</CardLabel>
                <CardTotal>100+</CardTotal>
              </div>
              <div>
                <FaUserTie tw="fill-green-400 w-12 h-12 md:w-16 md:h-16" />
              </div>
            </GlanceCard>
          </GlanceContainer>

          <GlanceContainer className="group">
            <GlanceCard>
              <div>
                <CardLabel>Student</CardLabel>
                <CardTotal>2.7K+</CardTotal>
              </div>
              <div>
                <FaUserGraduate tw="fill-purple-400 w-12 h-12 md:w-16 md:h-16" />
              </div>
            </GlanceCard>
          </GlanceContainer>
          <GlanceContainer className="group">
            <GlanceCard>
              <div>
                <CardLabel>Award</CardLabel>
                <CardTotal>30+</CardTotal>
              </div>
              <div>
                <Image
                  src={Award}
                  alt="Award"
                  width={0}
                  height={0}
                  sizes="100vh"
                  tw="w-14 h-14 md:w-20 md:h-20"
                  priority
                ></Image>
              </div>
            </GlanceCard>
          </GlanceContainer>
          <GlanceContainer className="group">
            <GlanceCard>
              <div>
                <CardLabel>Staff</CardLabel>
                <CardTotal>50+</CardTotal>
              </div>
              <div>
                <Image
                  src={Staff}
                  alt="Staff"
                  width={0}
                  height={0}
                  sizes="100vh"
                  tw="w-14 h-14 md:w-20 md:h-20"
                  priority
                ></Image>
              </div>
            </GlanceCard>
          </GlanceContainer>
        </div>
      </div>
      <div tw="md:hidden">
        <div tw="flex justify-center ">
          <div tw="w-full h-32 relative" className="group">
            <div
              tw="min-w-max bg-white px-4 py-2 rounded group-hover:bg-blue-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] absolute left-0 group-hover:left-5 transition-all"
              className="group"
            >
              <GlanceCard>
                <div>
                  <CardLabel>Teachers</CardLabel>
                  <CardTotal>100+</CardTotal>
                </div>
                <div>
                  <FaUserTie tw="fill-green-400 w-12 h-12 md:w-16 md:h-16" />
                </div>
              </GlanceCard>
            </div>
            <div
              tw="min-w-max bg-white px-4 py-2 rounded group-hover:bg-blue-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] absolute left-28 group-hover:left-80"
              className="group"
            >
              <GlanceCard>
                <div>
                  <CardLabel>Student</CardLabel>
                  <CardTotal>2.7K+</CardTotal>
                </div>
                <div>
                  <FaUserGraduate tw="fill-purple-400 w-12 h-12 md:w-16 md:h-16" />
                </div>
              </GlanceCard>
            </div>
            {/* <div
              tw="min-w-max bg-white px-4 py-2 rounded group-hover:bg-blue-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] absolute left-28 group-hover:left-64"
              className="group"
            >
              <GlanceCard>
                <div>
                  <CardLabel>Student</CardLabel>
                  <CardTotal>2.7K+</CardTotal>
                </div>
                <div>
                  <FaUserGraduate tw="fill-purple-400 w-12 h-12 md:w-16 md:h-16" />
                </div>
              </GlanceCard>
            </div>
            <div
              tw="min-w-max bg-white px-4 py-2 rounded group-hover:bg-blue-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] absolute left-40 group-hover:left-80"
              className="group"
            >
              <GlanceCard>
                <div>
                  <CardLabel>Student</CardLabel>
                  <CardTotal>2.7K+</CardTotal>
                </div>
                <div>
                  <FaUserGraduate tw="fill-purple-400 w-12 h-12 md:w-16 md:h-16" />
                </div>
              </GlanceCard>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LuminaryGlance
