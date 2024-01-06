"use client"
import DashboardContent from "@/components/Dashboard/DashboardContents"
import Navbar from "@/components/Navbar/Navbar"
import React from "react"
import tw from "twin.macro"

const Dashboard = () => {
  return (
    <div tw="h-screen">
      <DashboardContent />
    </div>
  )
}

export default Dashboard
