import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Button from "./atoms/Button"
import Section from "./atoms/Section"
import SectionHeader from "./atoms/SectionHeader"

const About = props => {
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
    background: var(--primary-blue);
    padding: 8px 20px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
  `

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

  return (
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
            parturient eget congue turpis. Est elementum eget enim dictum semper
            dictum cursus duis sit. Mattis.
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
                <p style={{ color: "red" }}>test</p>
              </StyledBackCard>
            </StyledInnerCard>
          </StyledProfileCard>
        </div>
      </div>
      <div className="skillsContainer mt-10">
        <div className="skillsTab flex justify-center">
          <StyledTabItem className="skillsTabItem mr-5">Frontend</StyledTabItem>
          <StyledTabItem className="skillsTabItem mr-5">Backend</StyledTabItem>
          <StyledTabItem className="skillsTabItem">Others</StyledTabItem>
        </div>
      </div>
    </Section>
  )
}

export default About
