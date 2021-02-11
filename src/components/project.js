import React, { useRef, useEffect, useState } from "react"
import Section from "./atoms/Section"
import SectionHeader from "./atoms/SectionHeader"
import styled from "styled-components"
import sr from "../utils/scroll-reveal/sr"
import srConfig from "../utils/scroll-reveal/sr-config"

const Project = props => {
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  const [activeTabId, setActiveTabId] = useState(0)

  const revealContainer = useRef(null)

  return (
    <div ref={revealContainer} id="project">
      <Section className="container">
        <SectionHeader title="My Projects" />
        <div className="mt-10">
          <h2 className="text-center text-primary ">Featured Projects</h2>
        </div>
      </Section>
    </div>
  )
}

export default Project
