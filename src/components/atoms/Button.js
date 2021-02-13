import React from "react"
import styled from "styled-components"

const StyledButtonWrapper = styled.div`
  a,
  button {
    display: inline-block;
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
  }
`

const Button = ({ title, href = null, newWindow, role, download }) => {
  if (role === "button") {
    return (
      <StyledButtonWrapper>
        <button>{title}</button>
      </StyledButtonWrapper>
    )
  }

  if (download) {
    return (
      <StyledButtonWrapper>
        <a href={href || "#"} download>
          {title}
        </a>
      </StyledButtonWrapper>
    )
  }

  return (
    <StyledButtonWrapper>
      <a href={href || "#"} target={newWindow ? "_blank" : "_self"}>
        {title}
      </a>
    </StyledButtonWrapper>
  )
}

export default Button
