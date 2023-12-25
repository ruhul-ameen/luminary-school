import React from "react"
import tw from "twin.macro"

const LuminaryGlance = () => {
  return (
    <div tw="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-4">
      <div tw="w-64 bg-green-100 hover:bg-blue-100 px-6 py-2 rounded flex items-center justify-between">
        <div>
          <p tw="text-gray-400 text-xs mb-4">Teachers</p>
          <h1 tw="text-[#1d1d1d] text-3xl font-bold">100+</h1>
        </div>
        <div>
          <img
            src="/images/dashboard-icons/teacher-icon.png"
            alt="teacher-icon"
            tw="w-20 h-20"
          ></img>
        </div>
      </div>
      <div tw="w-64 bg-violet-100 hover:bg-orange-100 px-6 py-2 rounded flex items-center justify-between">
        <div>
          <p tw="text-gray-400 text-xs mb-4">Student</p>
          <h1 tw="text-[#1d1d1d] text-3xl font-bold">2.7K+</h1>
        </div>
        <div>
          <img
            src="/images/dashboard-icons/student-icon.png"
            alt="student-icon"
            tw="w-20 h-20"
          ></img>
        </div>
      </div>
      <div tw="w-64 bg-blue-100 hover:bg-green-100 px-6 py-2 rounded flex items-center justify-between">
        <div>
          <p tw="text-gray-400 text-xs mb-4">Award</p>
          <h1 tw="text-[#1d1d1d] text-3xl font-bold">30+</h1>
        </div>
        <div>
          <img
            src="/images/dashboard-icons/award-icon.png"
            alt="award-icon"
            tw="w-20 h-20"
          ></img>
        </div>
      </div>
      <div tw="w-64 bg-orange-100 hover:bg-violet-100 px-6 py-2 rounded flex items-center justify-between">
        <div>
          <p tw="text-gray-400 text-xs mb-4">Staff</p>
          <h1 tw="text-[#1d1d1d] text-3xl font-bold">50+</h1>
        </div>
        <div>
          <img
            src="/images/dashboard-icons/staff-icon.png"
            alt="staff-icon"
            tw="w-20 h-20"
          ></img>
        </div>
      </div>
    </div>
  )
}

export default LuminaryGlance
