import React from "react"
import styled from "styled-components"

const StyledProfileCard = styled.div`
  width: 300px;
  height: 400px;

  perspective: 1000px;
  margin: auto;
  cursor: pointer;
`

const StyledFrontCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`

const StyledBackCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 30px;
  border-radius: 10px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-color: var(--primary-blue);

  ul {
    position: relative;
    color: white;
    margin-bottom: 0;
  }

  .list-icon {
    position: absolute;
    margin-left: -1.5rem;
    color: white;
    left: 0;
  }
`

const StyledInnerCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.6s;
  &:hover {
    transform: rotateY(180deg);
  }
`

export const Card = ({ children, className }) => {
  return <StyledProfileCard className={className}>{children}</StyledProfileCard>
}

export const FrontCard = ({ children, className }) => {
  return <StyledFrontCard className={className}>{children}</StyledFrontCard>
}

export const BackCard = ({ children, className }) => {
  return <StyledBackCard className={className}>{children}</StyledBackCard>
}

export const CardInner = ({ children, className }) => {
  return <StyledInnerCard className={className}>{children}</StyledInnerCard>
}
