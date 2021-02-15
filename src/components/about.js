import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { CSSTransition } from "react-transition-group"
import Img from "gatsby-image"
import Button from "./atoms/Button"
import Section from "./atoms/Section"
import SectionHeader from "./atoms/SectionHeader"
// import sr from "../utils/scroll-reveal/sr"
// import srConfig from "../utils/scroll-reveal/sr-config"
import ReactTooltip from "react-tooltip"
import { FaBirthdayCake } from "@react-icons/all-files/fa/FaBirthdayCake"
import { FaInfoCircle } from "@react-icons/all-files/fa/FaInfoCircle"
import { FaGraduationCap } from "@react-icons/all-files/fa/FaGraduationCap"
import { FaGamepad } from "@react-icons/all-files/fa/FaGamepad"
import {
  frontendComponents,
  othersComponents,
  backendComponents,
} from "../content/skills/skills"
import {
  Card,
  CardInner,
  FrontCard,
  BackCard,
} from "../components/molecules/FlipCard"

const StyledAboutContent = styled.div`
  .profileCard {
    width: 300px;
    height: 400px;
  }

  @media (max-width: 767px) {
    .description,
    .profileCardContainer {
      flex: 0 0 100%;
    }

    .description {
      order: 1;
    }

    .profileCardContainer {
      margin-bottom: 2.5rem;
    }
  }

  @media (max-width: 460px) {
    .profileCard {
      width: 250px;
      height: 370px;
    }
  }
`

const StyledTabItem = styled.div`
  padding: 8px 20px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: all 250ms;

  @media (max-width: 400px) {
    padding: 5px 10px;
  }
`

const About = props => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "andi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const revealContainer = useRef(null)
  // useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  const [isFrontend, setIsFrontend] = useState(true)
  const [isBackend, setIsBackend] = useState(false)
  const [isOthers, setIsOthers] = useState(false)

  const handleChangeTab = (e, type) => {
    setIsFrontend(false)
    setIsBackend(false)
    setIsOthers(false)

    switch (type) {
      case "frontend":
        return setIsFrontend(true)
      case "backend":
        return setIsBackend(true)
      case "others":
        return setIsOthers(true)
      default:
        return
    }
  }

  return (
    <div ref={revealContainer} id="about">
      <Section className="container">
        <SectionHeader title="About Me" />
        <StyledAboutContent className="sectionContent flex flex-wrap  mt-10">
          <div className="description flex-1">
            <p className="text-white">
              Hello world! My name is Andi, a Software Engineer based in
              Indonesia, Jakarta.
            </p>
            <p className="text-white">
              I'm a highly passionate Software Engineer who possesses strong
              knowledge in both frontend and backend development in addition to
              strong fundamentals in building user interface with positive user
              experience in mind.
            </p>
            <p className="text-white">
              I love learning about technology. Currently my interests include
              Web Development, Mobile Development, UI/UX and SEO.
            </p>
            <Button
              title="View Github"
              href="https://github.com/andibalo"
              newWindow={true}
            />
          </div>
          <div className="profileCardContainer flex-1 px-5">
            <Card className="profileCard">
              <CardInner>
                <FrontCard>
                  <Img
                    fluid={data.placeholderImage.childImageSharp.fluid}
                    style={{ maxHeight: "400px", borderRadius: "10px" }}
                  />
                </FrontCard>
                <BackCard className="p-8 bg-primary">
                  <p className="text-center text-secondary font-semibold">
                    Andi Usman Balo
                  </p>
                  <ul>
                    <li>
                      <FaBirthdayCake className="list-icon " />
                      12 March 2000
                    </li>
                    <li>
                      <FaGraduationCap className="list-icon " />
                      Universitas Multimedia Nusantara
                    </li>
                    <li>
                      <FaGamepad className="list-icon " />
                      Gaming, Football, Coding, Eating
                    </li>
                    <li>
                      <FaInfoCircle className="list-icon" />
                      Cat Lover, Startup Enthusiast, INFJ-A, Dislikes Coffee
                    </li>
                  </ul>
                </BackCard>
              </CardInner>
            </Card>
          </div>
        </StyledAboutContent>
        <div className="skillsContainer mt-10 container">
          <div className="skillsTab flex justify-center">
            <StyledTabItem
              className="skillsTabItem mr-2 sm:mr-5"
              onClick={e => handleChangeTab(e, "frontend")}
              style={{
                backgroundColor: isFrontend ? "var(--primary-blue)" : null,
              }}
            >
              Frontend
            </StyledTabItem>
            <StyledTabItem
              className="skillsTabItem mr-2 sm:mr-5"
              onClick={e => handleChangeTab(e, "backend")}
              style={{
                backgroundColor: isBackend ? "var(--primary-blue)" : null,
              }}
            >
              Backend
            </StyledTabItem>
            <StyledTabItem
              className="skillsTabItem"
              onClick={e => handleChangeTab(e, "others")}
              style={{
                backgroundColor: isOthers ? "var(--primary-blue)" : null,
              }}
            >
              Others
            </StyledTabItem>
          </div>
        </div>

        <div className="mt-5">
          <CSSTransition in={isFrontend} timeout={250} classNames="fade">
            <div
              className="frontendStack"
              style={{ display: isFrontend ? "block" : "none" }}
            >
              <div className=" flex flex-wrap items-center justify-center ">
                {frontendComponents &&
                  frontendComponents.map((frontend, i) => (
                    <>
                      <ReactTooltip
                        id={`frontend-${i}`}
                        place="top"
                        effect="solid"
                        backgroundColor="var(--grey)"
                        borderColor="var(--grey)"
                        className="shadow-xl"
                      >
                        {frontend.name}
                      </ReactTooltip>
                      {frontend.component}
                    </>
                  ))}
              </div>
            </div>
          </CSSTransition>

          <CSSTransition in={isBackend} timeout={250} classNames="fade">
            <div style={{ display: isBackend ? "block" : "none" }}>
              <div className=" flex items-center justify-center ">
                {backendComponents &&
                  backendComponents.map((backend, i) => (
                    <>
                      <ReactTooltip
                        id={`backend-${i}`}
                        place="top"
                        effect="solid"
                        backgroundColor="var(--grey)"
                        borderColor="var(--grey)"
                        className="shadow-xl"
                      >
                        {backend.name}
                      </ReactTooltip>
                      {backend.component}
                    </>
                  ))}
              </div>
            </div>
          </CSSTransition>

          <CSSTransition in={isOthers} timeout={250} classNames="fade">
            <div style={{ display: isOthers ? "block" : "none" }}>
              <div className="flex  items-center justify-center ">
                {othersComponents &&
                  othersComponents.map((others, i) => (
                    <>
                      <ReactTooltip
                        id={`others-${i}`}
                        place="top"
                        effect="solid"
                        backgroundColor="var(--grey)"
                        borderColor="var(--grey)"
                        className="shadow-xl"
                      >
                        {others.name}
                      </ReactTooltip>
                      {others.component}
                    </>
                  ))}
              </div>
            </div>
          </CSSTransition>
        </div>
      </Section>
    </div>
  )
}

export default About
