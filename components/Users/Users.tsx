"use client"

import Image from "next/image"
import React, { useState } from "react"
import { MdOutlineNotificationsActive } from "react-icons/md"
import { TiMessages } from "react-icons/ti"
import styled from "styled-components"
import tw from "twin.macro"

const TooltipContainer = styled.div`
  ${tw`relative inline-block cursor-pointer w-10 h-10`}
`
const TooltipText = styled.div`
  ${tw`absolute text-center z-10 top-0 transition-opacity`}
  ${TooltipContainer}:hover & {
    ${tw`block opacity-100`}
  }
`

const NotificationContainer = tw.div`
bg-green-400 flex items-center justify-center p-2 hover:bg-gray-300 hover:scale-110 cursor-pointer relative
`

const Users = ({ user }: any) => {
  const { name, post, imageUrl } = user
  const [adminPanelOpen, setAdminPanelOpen] = useState(true)
  const handleAdminPanelOpen = () => {
    setAdminPanelOpen(!adminPanelOpen)
  }
  return (
    <>
      <div tw="hidden lg:block">
        <div
          tw="flex items-center gap-2 hover:scale-110 cursor-pointer"
          className="group"
        >
          <div>
            <Image
              src={imageUrl}
              alt="Student-1"
              sizes="100vw"
              height={0}
              width={0}
              tw="w-10 h-10 rounded-full"
              priority
            />
          </div>
          <div tw="flex flex-col items-center">
            <h4 tw="text-gray-500 text-sm font-semibold uppercase group-hover:text-gray-800">
              {name}
            </h4>
            <p tw="text-gray-400 text-xs group-hover:text-gray-500">{post}</p>
          </div>
        </div>
      </div>

      <div tw="block lg:hidden" onClick={handleAdminPanelOpen}>
        {adminPanelOpen ? (
          <div
            tw="flex items-center justify-center gap-2 hover:scale-110 cursor-pointer"
            className="group"
          >
            <TooltipContainer>
              <Image
                src={imageUrl}
                alt="Student-1"
                sizes="100vw"
                width={0}
                height={0}
                priority
                tw="w-10 h-10 rounded-full"
              />
              <div tw="absolute -top-2 right-0 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-[10px] text-white">
                0
              </div>
            </TooltipContainer>
            <TooltipText>
              <div tw="flex flex-col items-center justify-center h-10 w-10 rounded-full hover:bg-black hover:bg-opacity-40 mb-6">
                <h4 tw="text-gray-500 text-xs font-medium uppercase group-hover:text-white">
                  Rose
                </h4>
                {/* <p tw="text-gray-400 text-[10px] group-hover:text-white">
              {post}
            </p> */}
              </div>
            </TooltipText>
          </div>
        ) : (
          <div
            tw="flex items-center justify-center gap-2 hover:scale-110 cursor-pointer"
            className="group"
          >
            <div tw="relative cursor-pointer">
              <Image
                src={imageUrl}
                alt="Student-1"
                sizes="100vw"
                width={0}
                height={0}
                priority
                tw="w-10 h-10 rounded-full"
              />
            </div>
            <div tw="bg-green-400 w-28 p-4 absolute top-16 right-0 flex flex-col items-center justify-center">
              <div tw="flex flex-col items-center justify-center h-10 w-10 rounded-full hover:bg-black hover:bg-opacity-40 mb-6">
                <h4 tw="text-gray-500 text-lg font-semibold uppercase group-hover:text-white">
                  Rose
                </h4>
                <p tw="text-gray-400 text-[10px] group-hover:text-white">
                  {post}
                </p>
              </div>
              <div tw="w-full h-[1.5px] bg-white my-5"></div>
              <NotificationContainer>
                <div tw="flex flex-col items-center justify-center gap-1">
                  <MdOutlineNotificationsActive />
                  <p>Notification</p>
                </div>
                <div tw="absolute top-0 right-7 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-[10px] text-white">
                  0
                </div>
              </NotificationContainer>
              <div tw="w-full h-[1.5px] bg-white my-5"></div>
              <NotificationContainer>
                <div tw="flex flex-col items-center justify-center gap-1">
                  <TiMessages />
                  <p>Messages</p>
                </div>
                <div tw="absolute top-0 right-6 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-[10px] text-white">
                  0
                </div>
              </NotificationContainer>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Users
