import type { Metadata } from "next"
import { ConfigProvider } from "antd"
import theme from "../styles/antd-theme-config"
import GlobalStyles from "@/styles/GlobalStyles"

export const metadata: Metadata = {
  title: "Luminary School",
  description: "It's a school management web application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ConfigProvider theme={theme}>
        <GlobalStyles />
        <body suppressHydrationWarning={true}>{children}</body>
      </ConfigProvider>
    </html>
  )
}
