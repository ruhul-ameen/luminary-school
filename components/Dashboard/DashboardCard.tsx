import React from "react"
import { FaUserTie } from "react-icons/fa6"
import { FaUserGraduate } from "react-icons/fa6"
import Award from "../../public/images/dashboard-icons/award-icon.png"
import Staff from "../../public/images/dashboard-icons/staff-icon.png"
import Image from "next/image"
import styled from "styled-components"
import tw from "twin.macro"

const Card = styled.div`
  ${tw`w-max h-[254px] grid grid-cols-2 gap-1 overflow-visible`}
`

const CardItem = styled.div`
  ${tw`rounded-xl w-full h-full flex flex-col items-center justify-center hover:scale-[1.95] hover:transition hover:duration-[1s] hover:ease-in-out  hover:rotate-[360deg]`}
`
const GlanceContainer = styled.div`
  ${tw`w-min bg-white px-4 py-2 rounded group-hover:bg-blue-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]`}
`

const GlanceCard = styled.div`
  ${tw`flex items-center justify-between gap-10 group-hover:scale-110 transition`}
`
const CardLabel = styled.p`
  ${tw`text-gray-400 text-sm mb-4`}
`
const CardTotal = styled.p`
  ${tw`text-[#344D67] text-xl md:text-2xl lg:text-3xl font-bold`}
`

const DashboardCard = () => {
  return (
    <div tw="flex items-center justify-center">
      <Card>
        <CardItem>
          <GlanceContainer>
            <GlanceCard>
              <div>
                <CardLabel>Teachers</CardLabel>
                <CardTotal>100+</CardTotal>
              </div>
              <div>
                <FaUserTie tw="fill-green-400 w-14 h-14 md:w-20 md:h-20" />
              </div>
            </GlanceCard>
          </GlanceContainer>
        </CardItem>
        <CardItem>
          <GlanceContainer>
            <GlanceCard>
              <div>
                <CardLabel>Teachers</CardLabel>
                <CardTotal>100+</CardTotal>
              </div>
              <div>
                <FaUserTie tw="fill-green-400 w-14 h-14 md:w-20 md:h-20" />
              </div>
            </GlanceCard>
          </GlanceContainer>
        </CardItem>
        <CardItem>
          <GlanceCard>
            <div>
              <CardLabel>Teachers</CardLabel>
              <CardTotal>100+</CardTotal>
            </div>
            <div>
              <FaUserTie tw="fill-green-400 w-14 h-14 md:w-20 md:h-20" />
            </div>
          </GlanceCard>
        </CardItem>
        <CardItem>
          <GlanceCard>
            <div>
              <CardLabel>Teachers</CardLabel>
              <CardTotal>100+</CardTotal>
            </div>
            <div>
              <FaUserTie tw="fill-green-400 w-14 h-14 md:w-20 md:h-20" />
            </div>
          </GlanceCard>
        </CardItem>
      </Card>
    </div>
  )
}

export default DashboardCard
