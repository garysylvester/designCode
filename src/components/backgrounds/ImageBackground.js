import React from "react"
import { Parallax } from "react-parallax"
import styled from "styled-components"

const image1 = "/images/background/hero-bg-large.jpg"

export default function ImageBackground() {
  return (
    <Parallax bgImage={image1} strength={500}>
      <ParallaxInnerDiv></ParallaxInnerDiv>
    </Parallax>
  )
}

const ParallaxInnerDiv = styled.div`
  height: 500px;
`
