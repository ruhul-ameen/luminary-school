"use client"

import React from "react"
import { createGlobalStyle } from "styled-components"
import tw, { GlobalStyles as BaseStyles } from "twin.macro"

const CustomStyles = createGlobalStyle`

@font-face {
  font-family: 'Nunito';
  src: url('/fonts/gt-flexa/regular.woff2') format('woff2'),
       url('/fonts/gt-flexa/regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
:root{
  --font-gt-flexa: 'Nunito',sans-serif;;
}
body{
${tw`font-flexa text-[#222222]`};
}
h1{
  ${tw`font-flexa`}
}
h3{
  ${tw`font-flexa`}
}

`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
