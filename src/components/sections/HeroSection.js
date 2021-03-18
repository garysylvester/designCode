import React from "react"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import PurchaseButton from "../buttons/PurchaseButton"

function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>hi, i'm gary</Title>
          <Desctiption>
            i'm a senior ux designer at Electronic Arts, where I spend my days
            finding ways to inspire the world to play.
            <br />
            but there’s much more to me than where I work...
          </Desctiption>
          <PurchaseButton
            title="Start Learning"
            subtitle="100+ hours ov video"
          />
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  background-image: url("/images/background/hero-bg-large.jpg");
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 32px;
`

const Title = styled(H1)`
  color: ${themes.light.text1};
`

const Desctiption = styled(MediumText)``
