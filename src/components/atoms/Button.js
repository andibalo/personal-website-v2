import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const StyledButtonWrapper = styled.div`
  a,
  button {
    display: inline-block;
    background-color: ${({ dark }) =>
      dark ? "var(--black-light)" : "transparent"};
    border-radius: 5px;
    padding: 10px 20px;
    border: ${({ dark }) =>
      dark ? "1px solid var(--black-light)" : "1px solid var(--primary-blue)"};
    color: ${({ dark }) => (dark ? " var(--white)" : " var(--primary-blue)")};
    font-family: Roboto;
    transition: all 0.3s;
    &:hover {
      background-color: var(--primary-blue);
      color: var(--white);
    }
  }

  @media (max-width: 767px) {
    a,
    button {
      padding: 8px 16px;
    }
  }
`

const Button = ({
  title,
  href = null,
  newWindow,
  role,
  download,
  dark,
  gatsbyLink,
  className,
}) => {
  if (role === "button") {
    return (
      <StyledButtonWrapper className={className}>
        <button>{title}</button>
      </StyledButtonWrapper>
    )
  }

  if (download) {
    return (
      <StyledButtonWrapper className={className}>
        <a href={href || "#"} download>
          {title}
        </a>
      </StyledButtonWrapper>
    )
  }

  return (
    <StyledButtonWrapper dark={dark} className={className}>
      {gatsbyLink ? (
        <Link to={href}>{title}</Link>
      ) : (
        <a href={href || "#"} target={newWindow ? "_blank" : "_self"}>
          {title}
        </a>
      )}
    </StyledButtonWrapper>
  )
}

export default Button
