import React from "react"
import styled from "styled-components"
import { Parallax } from "react-parallax"
import { spacing } from "../../constraints/Tokens"

const image1 = "/images/background/website-hero.png"

export default function WaveBackground() {
  return (
    <Wrapper>
      <Background />
      <Parallax bgImage={image1} strength={500} className={"bgImageContainer"}>
        <ParallaxInnerDiv></ParallaxInnerDiv>
      </Parallax>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;

  .bgImageContainer {
    position: absolute;
    width: 714px;
    z-index: -1;
    float: right;
    margin-right: 98px;

    @media (max-width: 450px) {
      height: 550px;
      margin-right: ${spacing.dimension.spaceLarge}px;
      transform: translateX(100px);
    }

    img {
      height: 800px !important;

      @media (max-width: 450px) {
        height: 550px !important;
      }
    }
  }
`

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -1;
  background: #ffffff;

  @media (max-width: 450px) {
    height: 550px;
  }
`
const ParallaxInnerDiv = styled.div`
  height: 800px;

  @media (max-width: 450px) {
    height: 550px;
  }
`
