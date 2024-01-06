import React from "react"
import { FaQuoteLeft } from "react-icons/fa"
import styled from "styled-components"
import tw from "twin.macro"
import Kid from "@/public/images/dashboard/card/kid-zone.png"
import Teenager from "@/public/images/dashboard/card/teenager-zone.png"
import Image from "next/image"

const QuoteHeading = styled.h1`
  ${tw`text-[#ffffff] text-xl w-min font-semibold uppercase leading-7`}
`
const QuoteHeadingSecondary = styled.h1`
  ${tw`text-[#ffffff] text-lg w-min font-medium uppercase leading-5`}
`
const LearningQuote = styled.div`
  ${tw`bg-[#EA5455] h-min max-w-min lg:w-max rounded-sm p-2 mb-8`}
`
const KidsContainer = styled.div`
  ${tw`bg-[#BC7AF9] h-min  max-w-min lg:w-max rounded-sm p-2 mb-8`}
`
const ChildrenContainer = styled.div`
  ${tw`bg-[#3559E0] h-min max-w-min lg:w-max rounded-sm p-2`}
`

const DashboardQuote = () => {
  return (
    <div tw="mt-28">
      <LearningQuote>
        <FaQuoteLeft tw="h-14 w-14 text-white mb-2" />
        <QuoteHeading>Never Stop learning,</QuoteHeading>
        <QuoteHeadingSecondary>
          Because Life never stops teaching
        </QuoteHeadingSecondary>
      </LearningQuote>
      <KidsContainer>
        <Image
          src={Kid}
          alt="Kid"
          height={0}
          width={0}
          sizes="100vvw"
          priority
          tw="h-full w-full"
        />
        <h1 tw="text-[#ffffff] text-xl w-max font-semibold uppercase leading-7">
          Kids Zone
        </h1>
        <p tw="text-base text-gray-100 leading-4">
          Because Life never stops teaching
        </p>
        <div tw="flex items-center justify-center mt-2">
          <button tw="bg-[#ffffff] px-3 py-1 rounded text-[#BC7AF9] font-semibold hover:bg-[#EA5455] hover:text-[#ffffff] animate-pulse">
            Enroll
          </button>
        </div>
      </KidsContainer>
      <ChildrenContainer>
        <Image
          src={Teenager}
          alt="Teenager"
          height={0}
          width={0}
          sizes="100vvw"
          priority
          tw="h-full w-full"
        />
        <h1 tw="text-[#ffffff] text-xl w-min font-semibold uppercase leading-7">
          Teenager Zone
        </h1>
        <p tw="text-base text-gray-100 leading-4">
          Because Life never stops teaching
        </p>
        <div tw="flex items-center justify-center mt-2">
          <button tw="bg-[#ffffff] px-3 py-1 rounded text-[#3559E0] font-semibold hover:bg-[#01D28E] hover:text-[#ffffff] animate-pulse">
            Enroll
          </button>
        </div>
      </ChildrenContainer>
    </div>
  )
}

export default DashboardQuote
