import React, { useRef, useEffect, useState } from "react"
import Section from "./atoms/Section"
import SectionHeader from "./atoms/SectionHeader"
import styled from "styled-components"
import sr from "../utils/scroll-reveal/sr"
import srConfig from "../utils/scroll-reveal/sr-config"

const StyledContactCard = styled.div`
  min-height: 500px;

  .contactInfo {
    background-color: var(--black-lighter);
  }

  .contactForm {
    background-color: var(--primary-blue);
  }
`

const Contact = props => {
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  const [activeTabId, setActiveTabId] = useState(0)

  const revealContainer = useRef(null)

  return (
    <div ref={revealContainer}>
      <Section className="container">
        <SectionHeader title="Contact Me" />
        <div className="mt-10">
          <StyledContactCard className="flex shadow-xl">
            <div className="flex-grow contactInfo">test</div>
            <div className="flex-grow contactForm">test</div>
          </StyledContactCard>
        </div>
      </Section>
    </div>
  )
}

export default Contact
