import React from "react"
import styled from "styled-components"

const StyledSection = styled.div`
  padding-top: 75px;
  padding-bottom: 75px;
  margin: auto;
`

const Section = ({ children, className }) => {
  return <StyledSection className={className}>{children}</StyledSection>
}

export default Section
