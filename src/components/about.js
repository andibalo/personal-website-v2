import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { CSSTransition } from "react-transition-group"
import Img from "gatsby-image"
import Button from "./atoms/Button"
import Section from "./atoms/Section"
import SectionHeader from "./atoms/SectionHeader"
import sr from "../utils/scroll-reveal/sr"
import srConfig from "../utils/scroll-reveal/sr-config"
import { FaBirthdayCake } from "@react-icons/all-files/fa/FaBirthdayCake"
import { FaInfoCircle } from "@react-icons/all-files/fa/FaInfoCircle"
import { FaGraduationCap } from "@react-icons/all-files/fa/FaGraduationCap"
import { FaGamepad } from "@react-icons/all-files/fa/FaGamepad"
import { SiReact } from "@react-icons/all-files/si/SiReact"
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5"
import { SiCss3 } from "@react-icons/all-files/si/SiCss3"
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript"
import { SiJquery } from "@react-icons/all-files/si/SiJquery"
import { SiRedux } from "@react-icons/all-files/si/SiRedux"
import { SiBootstrap } from "@react-icons/all-files/si/SiBootstrap"
import { SiNodeDotJs } from "@react-icons/all-files/si/SiNodeDotJs"
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb"
import { SiPhp } from "@react-icons/all-files/si/SiPhp"
import { SiGithub } from "@react-icons/all-files/si/SiGithub"
import { SiFigma } from "@react-icons/all-files/si/SiFigma"
import { SiHeroku } from "@react-icons/all-files/si/SiHeroku"

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

const StyledTabItem = styled.div`
  padding: 8px 20px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: all 250ms;
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
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

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
        <div className="sectionContent flex mt-10">
          <div className="description flex-1">
            <p className="text-white">
              Sit ac mattis in at pulvinar aliquet platea nisi.
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              euismod ullamcorper pulvinar fames cursus egestas at quis nisl.
              Gravida nec vulputate pellentesque vitae.
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
              parturient eget congue turpis. Est elementum eget enim dictum
              semper dictum cursus duis sit. Mattis.
            </p>
            <Button title="View Github" />
          </div>
          <div className="flex-1">
            <StyledProfileCard>
              <StyledInnerCard className="shadow-xl">
                <StyledFrontCard>
                  <Img
                    fluid={data.placeholderImage.childImageSharp.fluid}
                    style={{ maxHeight: "400px", borderRadius: "10px" }}
                  />
                </StyledFrontCard>
                <StyledBackCard>
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
                </StyledBackCard>
              </StyledInnerCard>
            </StyledProfileCard>
          </div>
        </div>
        <div className="skillsContainer mt-10">
          <div className="skillsTab flex justify-center">
            <StyledTabItem
              className="skillsTabItem mr-5"
              onClick={e => handleChangeTab(e, "frontend")}
              style={{
                backgroundColor: isFrontend ? "var(--primary-blue)" : null,
              }}
            >
              Frontend
            </StyledTabItem>
            <StyledTabItem
              className="skillsTabItem mr-5"
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
              <div className=" flex items-center justify-center ">
                <SiReact className="text-6xl text-white mr-3" />
                <SiRedux className="text-6xl text-white mr-3" />
                <SiHtml5 className="text-6xl text-white mr-3" />
                <SiCss3 className="text-6xl text-white mr-3" />
                <SiJavascript className="text-6xl text-white mr-5" />
                <SiJquery className="text-6xl text-white mr-3" />
                <SiBootstrap className="text-6xl text-white mr-3" />
              </div>
            </div>
          </CSSTransition>

          <CSSTransition in={isBackend} timeout={250} classNames="fade">
            <div style={{ display: isBackend ? "block" : "none" }}>
              <div className=" flex items-center justify-center ">
                <SiNodeDotJs className="text-6xl text-white mr-3" />
                <SiMongodb className="text-6xl text-white mr-3" />
                <SiPhp className="text-6xl text-white mr-3" />
              </div>
            </div>
          </CSSTransition>

          <CSSTransition in={isOthers} timeout={250} classNames="fade">
            <div style={{ display: isOthers ? "block" : "none" }}>
              <div className="flex items-center justify-center ">
                <SiGithub className="text-6xl text-white mr-3" />
                <SiFigma className="text-6xl text-white mr-3" />
                <SiHeroku className="text-6xl text-white mr-3" />
              </div>
            </div>
          </CSSTransition>
        </div>
      </Section>
    </div>
  )
}

export default About
