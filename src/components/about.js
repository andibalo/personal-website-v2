import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Button from "./atoms/Button"
import anime from "animejs"

const About = props => {
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

  const StyledSection = styled.div`
    padding-top: 75px;
    padding-bottom: 75px;
  `

  const StyledProfileCard = styled.div`
    height: 300px;
    width: 300px;
    border-radius: 20px;
    overflow: hidden;
    margin: auto;
    perspective: 1000px;
  `

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "andi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [isFlipped, setIsFlipped] = useState(false)

  const flipCard = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <StyledSection className="container">
      <div className="sectionHeader flex items-center">
        <StyledBlueCircle />
        <h3 className="mb-0 ml-3 text-white text-2xl font-normal ">
          About Me {JSON.stringify(isFlipped)}
        </h3>
        <StyledGrayLine className="ml-3" />
      </div>
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
            <div
              className={"inner" + (isFlipped ? " flipped" : "")}
              style={{
                position: "relative",
                transformStyle: "preserve-3d",
              }}
              onMouseEnter={flipCard}
              onMouseLeave={flipCard}
            >
              <div
                class="front"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "300px",
                  width: "300px",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(0)",
                  zIndex: 2,
                  transformStyle: "preserve-3d",
                  transition: "all 0.5s",
                }}
              >
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
              </div>

              <div
                class="back"
                style={{
                  transform: "rotateY(-180deg)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "300px",
                  width: "300px",
                  backfaceVisibility: "hidden",
                  background: "yellow",
                  transformStyle: "preserve-3d",
                  transition: "all 0.5s",
                }}
              >
                <p style={{ color: "red" }}>test</p>
              </div>
            </div>
          </StyledProfileCard>
        </div>
      </div>
    </StyledSection>
  )
}

export default About
