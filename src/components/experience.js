import React, { useRef, useEffect, useState } from "react"
import Section from "./atoms/Section"
import SectionHeader from "./atoms/SectionHeader"
import styled from "styled-components"
import sr from "../utils/scroll-reveal/sr"
import srConfig from "../utils/scroll-reveal/sr-config"
import ExperienceData from "../content/experience.json"
import { CSSTransition } from "react-transition-group"
import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight"

const StyledTimelineContainer = styled.div`
  min-height: 360px;
`

const StyledTimelineCircle = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ isActive }) =>
    isActive ? "var(--primary-blue)" : "var(--grey)"};
  border-radius: 50%;
  position: relative;
  z-index: 1;
  margin-bottom: 50px;
  cursor: pointer;
  transition: background-color 250ms;
  &:last-child {
    margin-bottom: 0;
  }
`

const StyledTimelineLine = styled.div`
  position: absolute;
  height: 100%;
  z-index: 0;
  width: 5px;
  background: grey;
  left: 50%;
  transform: translateX(-50%);
`

const StyledTimelineNav = styled.div`
  position: relative;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledTabContent = styled.div`
  max-width: 600px;
  color: white;
  width: 100%;

  .companyName {
    color: var(--primary-blue);
  }

  .workPeriod {
    color: var(--grey);
  }

  ul {
    margin-bottom: 0;
  }

  li {
    position: relative;
  }

  .list-icon {
    left: 0;
    position: absolute;
    margin-left: -1.8rem;

    color: var(--primary-blue);
  }
`

const Experience = () => {
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  const [activeTabId, setActiveTabId] = useState(0)

  const revealContainer = useRef(null)
  return (
    <div ref={revealContainer} id="experience">
      <Section className="container">
        <SectionHeader title="Experience" />
        <StyledTimelineContainer className="flex mt-10 justify-center ">
          <StyledTimelineNav>
            <StyledTimelineLine />
            <StyledTimelineCircle
              isActive={0 === activeTabId}
              onClick={() => setActiveTabId(0)}
            />
            <StyledTimelineCircle
              isActive={1 === activeTabId}
              onClick={() => setActiveTabId(1)}
            />
            <StyledTimelineCircle
              isActive={2 === activeTabId}
              onClick={() => setActiveTabId(2)}
            />
          </StyledTimelineNav>
          <StyledTabContent>
            <div>
              {ExperienceData.experiences.map((exp, i) => (
                <CSSTransition
                  key={i}
                  in={activeTabId === i}
                  timeout={250}
                  classNames="fade"
                >
                  <div hidden={activeTabId !== i}>
                    <h3 className="mb-3">
                      {exp.jobTitle}{" "}
                      <span className="companyName">@ {exp.company}</span>
                    </h3>
                    <h5 className="workPeriod">
                      {exp.from} - {exp.to ? exp.to : "Present"}
                    </h5>
                    <ul>
                      {exp.jobDescription.map(desc => (
                        <li>
                          <MdKeyboardArrowRight className="list-icon text-2xl" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CSSTransition>
              ))}
            </div>
          </StyledTabContent>
        </StyledTimelineContainer>
      </Section>
    </div>
  )
}

export default Experience
