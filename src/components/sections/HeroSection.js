import React from "react"
import styled, { keyframes } from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
// import PurchaseButton from "../buttons/PurchaseButton"
// import MockupAnimation from "../animations/MockupAnimation"
import { spacing } from "../../constraints/Tokens"
import WaveBackground from "../backgrounds/WaveBackground"
// import ImageBackground from "../backgrounds/ImageBackground"

function HeroSection() {
  return (
    <Wrapper>
      <WaveBackground />
      {/* <ImageBackground /> */}
      <ContentWrapper>
        <TextWrapper>
          <Title>
            hi, i'm <span>gary</span>
          </Title>
          <Desctiption>
            i'm a senior ux designer at Electronic Arts, where I spend my days
            finding ways to inspire the world to play.
            <br />
            but there’s much more to me than where I work...
          </Desctiption>
          {/* <PurchaseButton
            title="Start Learning"
            subtitle="100+ hours ov video"
          /> */}
        </TextWrapper>
        {/* <MockupAnimation /> */}
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const animation = keyframes` 
  0% { opacity: 0; transform: translateY(-10px);}
  100% { opacity: 1; transform: translateY(0px);}
`

const Wrapper = styled.div`
  overflow: hidden;
  height: 800px;

  @media (max-width: 450px) {
    height: 550px;
  }
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  position: absolute;
  top: 0;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;
  gap: ${spacing.dimension.spaceMedium}px;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: ${spacing.dimension.spaceLargest}px;
    padding: 24px;
    height: 550px;
    align-items: flex-end;
  }
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: ${spacing.dimension.spaceMedium}px;

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`

const Title = styled(H1)`
  color: ${themes.light.text1};

  @media (max-width: 450px) {
    color: ${themes.dark.text1};
  }
`

const Desctiption = styled(MediumText)`
  color: ${themes.light.text1};

  @media (max-width: 450px) {
    color: ${themes.dark.text1};
  }
`
