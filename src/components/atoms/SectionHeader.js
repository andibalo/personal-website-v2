import React from "react"
import styled from "styled-components"

const StyledBlueCircle = styled.div`
  background-color: var(--primary-blue);
  height: 20px;
  width: 20px;
  border-radius: 50%;
`
const StyledGrayLine = styled.div`
  background-color: var(--grey);
  height: 3px;
  width: 400px;
`
const SectionHeader = ({ title }) => {
  return (
    <div className="sectionHeader flex items-center">
      <StyledBlueCircle />
      <h3 className="mb-0 ml-3 text-white text-2xl font-normal ">{title}</h3>
      <StyledGrayLine className="ml-3" />
    </div>
  )
}

export default SectionHeader
