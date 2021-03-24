import React from "react"
import styled from "styled-components"

export default function MockupAnimation() {
  return (
    <Wrapper>
      <div className="mockup3" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  perspective: 5000;

  @media (max-width: 450px) {
    transform: scale(0.4);
    transform-origin: top left;
  }

  @media (max-width: 768px) {
    transform: scale(0.6);
    transform-origin: top left;
  }

  div {
    transform: rotateY(-20deg) rotateX(20deg);
    transform-origin: bottom left;
  }

  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover div {
    transform: rotateY(0deg) rotateX(0deg);

    &.mockup3 {
      transition-delay: 0s;
    }

    :hover {
      filter: brightness(150%) saturate(120%);
    }
  }

  .mockup3 {
    position: absolute;
    width: 701px;
    height: 630px;
    left: 0;
    top: -150px;
    background: url("/images/background/website-hero.png");
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 8px;
  }
`
