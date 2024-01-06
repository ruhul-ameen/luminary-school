import { Carousel } from "antd"
import Image from "next/image"
import React from "react"
import tw from "twin.macro"

const images = [
  "/images/hero-slider/hero-slider-1.jpg",
  "/images/hero-slider/hero-slider-2.jpg",
  "/images/hero-slider/hero-slider-3.jpg",
  "/images/hero-slider/hero-slider-4.jpg",
  "/images/hero-slider/hero-slider-5.jpg",
  "/images/hero-slider/hero-slider-6.jpg",
]

const HeroSection = () => {
  return (
    <Carousel autoplay draggable={true} tw="px-32 my-5">
      {images.map((imageUrl, index) => (
        <div key={index} tw="w-full max-h-[75vh] overflow-hidden relative">
          <Image
            src={imageUrl}
            alt={`Image ${index + 1}`}
            sizes="100vw"
            height={0}
            width={0}
            tw="w-full h-full"
            priority
          ></Image>
          <div tw="absolute inset-0 bg-black opacity-60"></div>
          <div tw="absolute w-full h-full flex items-center justify-center top-0 left-0">
            <div>
              <h3 tw="text-[#F9B572] text-4xl text-center">
                Let your future begin with
              </h3>
              <h1 tw="text-[#41EECB] text-7xl text-center">Luminary School</h1>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default HeroSection
