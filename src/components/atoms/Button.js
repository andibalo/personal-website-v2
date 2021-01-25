import React from "react"
import styled from "styled-components"

const StyledButtonPrimary = styled.button`
  background-color: transparent;
  border-radius: 5px;
  padding: 10px 20px;
  border: 1px solid var(--primary-blue);
  color: var(--primary-blue);
  font-family: Roboto;
  transition: all 0.3s;
  &:hover {
    background-color: var(--primary-blue);
    color: var(--white);
  }
`

const Button = ({ title }) => {
  return <StyledButtonPrimary>{title}</StyledButtonPrimary>
}

export default Button
