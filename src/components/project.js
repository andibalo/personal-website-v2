import React, { useRef, useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Section from "./atoms/Section"
import SectionHeader from "./atoms/SectionHeader"
import styled from "styled-components"
// import sr from "../utils/scroll-reveal/sr"
// import srConfig from "../utils/scroll-reveal/sr-config"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt"
import otherProjects from "../content/otherProjects.json"
import TechTags from "../components/atoms/TechTags"

const StyledFeaturedProject = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  .projectImage {
    grid-column: ${({ isAlternate }) => (isAlternate ? " 6 / -1" : "1 / 8")};
    grid-row: 1/-1;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    z-index: 1;

    &:hover::before {
      opacity: 1;
    }

    &::before {
      content: "";
      width: 100%;
      top: 0;
      height: 100%;
      background-color: rgba(15, 135, 230, 0.7);
      left: 0;
      z-index: 1;
      position: absolute;
      opacity: 0;
      transition: all 0.3s;
      pointer-events: none;
    }
  }

  .projectContent {
    grid-row: 1/-1;
    grid-column: ${({ isAlternate }) => (isAlternate ? "1 / 7" : "7 / -1")};

    position: relative;
    z-index: 2;
  }

  .projectHeader {
    & h3 {
      order: ${({ isAlternate }) => (isAlternate ? "0" : "1")};
    }

    & hr {
      order: ${({ isAlternate }) => (isAlternate ? "1" : "0")};
    }
  }

  .headerLine {
    width: 15%;
    height: 2px;
  }

  .projectDescription p {
    margin: 0;
  }

  @media (max-width: 767px) {
    .projectImage,
    .projectContent {
      grid-column: 1 / -1;
      grid-row: auto;
      margin-bottom: 20px;
    }
  }
`

const StyledOtherProjects = styled.div`
  .otherProjectsGrid {
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    & div {
      min-height: 400px;
    }
  }

  .projectDescription {
    min-height: 100px;
  }

  @media (max-width: 400px) {
    .otherProjectsGrid {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
`

const Project = props => {
  const data = useStaticQuery(graphql`
    query {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/featured/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              cover {
                childImageSharp {
                  fluid(maxWidth: 700) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              tech
              github
              external
            }
            html
          }
        }
      }
    }
  `)

  const featuredProjects = data.featured.edges.filter(({ node }) => node)

  const revealHeader = useRef(null)
  const revealFeatured = useRef([])

  const revealOtherHeader = useRef(null)
  const revealOtherProjects = useRef([])

  // useEffect(() => {
  //   sr.reveal(revealHeader.current, srConfig())
  //   sr.reveal(revealOtherHeader.current, srConfig())

  //   revealFeatured.current.forEach((ref, i) =>
  //     sr.reveal(ref, srConfig(i * 100))
  //   )
  //   revealOtherProjects.current.forEach((ref, i) =>
  //     sr.reveal(ref, srConfig(i * 75))
  //   )
  // }, [])

  let isAlternate = true

  return (
    <div id="project">
      <Section className="container">
        <SectionHeader title="My Projects" />
        <div className="featuredProjects">
          <div className="mt-10">
            <h2 className="text-center text-primary " ref={revealHeader}>
              Featured Projects
            </h2>
          </div>
          <div className="mt-10">
            {featuredProjects &&
              featuredProjects.map(({ node }, i) => {
                const { frontmatter, html } = node
                const { external, title, tech, github, cover } = frontmatter

                isAlternate = !isAlternate

                return (
                  <StyledFeaturedProject
                    isAlternate={isAlternate}
                    key={i}
                    ref={el => (revealFeatured.current[i] = el)}
                    className="mt-16"
                  >
                    <div className="projectImage">
                      <a
                        href={external || "#"}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Img fluid={cover.childImageSharp.fluid} alt={title} />
                      </a>
                    </div>
                    <div className="projectContent">
                      <div
                        className={`projectHeader flex flex-wrap ${
                          isAlternate ? "justify-start" : "justify-end"
                        } items-center`}
                      >
                        <hr
                          className={`headerLine bg-primary ${
                            isAlternate ? "ml-3" : "mr-3"
                          }`}
                        />
                        <h3 className=" text-white">{title}</h3>
                      </div>

                      <div className="projectDescription p-7 bg-secondary-light text-justify text-white shadow-xl rounded-xl">
                        <div
                          className="mb-0"
                          dangerouslySetInnerHTML={{ __html: html }}
                        ></div>
                      </div>
                      <ul
                        className={`projectTech m-0  mt-3  flex flex-wrap ${
                          isAlternate ? "justify-start" : "justify-end"
                        }`}
                      >
                        {tech.map((item, i) => (
                          <li
                            key={`${item}-${i}`}
                            className="bg-primary text-white py-0.5 px-3 mb-2  mr-2 rounded-2xl"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <ul
                        className={`projectLinks m-0 mt-1  flex ${
                          isAlternate ? "justify-start" : "justify-end"
                        }`}
                      >
                        <li className="mb-0 mr-2">
                          <a
                            href={github || "#"}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaGithub className="text-gray cursor-pointer text-xl hover:text-white transition duration-300 ease" />
                          </a>
                        </li>
                        <li className="mb-0 mr-2">
                          <a
                            href={external || "#"}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaExternalLinkAlt className="text-gray cursor-pointer text-xl hover:text-white transition duration-300 ease" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </StyledFeaturedProject>
                )
              })}
          </div>
        </div>

        <StyledOtherProjects className="mt-20">
          <h2
            className="text-center text-primary mb-16 "
            ref={revealOtherHeader}
          >
            Other Projects
          </h2>
          <div className="otherProjectsGrid">
            {otherProjects &&
              otherProjects.map((otherProject, i) => (
                <div
                  key={`${otherProject.projectTitle}-${i}`}
                  ref={el => (revealOtherProjects.current[i] = el)}
                  className="gridItem p-7 bg-secondary-light rounded-lg shadow-xl "
                >
                  <h4 className="text-white">{otherProject.projectTitle}</h4>
                  <p className="text-gray projectDescription">
                    {otherProject.projectDescription}
                  </p>
                  <TechTags tags={otherProject.techStack} />
                  <ul className={`projectLinks m-0 mt-3  flex justify-start `}>
                    <li className="mb-0 mr-2">
                      <a
                        href={otherProject.githubLink || "#"}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub className="text-gray cursor-pointer text-xl hover:text-white transition duration-300 ease" />
                      </a>
                    </li>
                    <li className="mb-0 mr-2">
                      <a
                        href={otherProject.demoLink || "#"}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaExternalLinkAlt className="text-gray cursor-pointer text-xl hover:text-white transition duration-300 ease" />
                      </a>
                    </li>
                  </ul>
                </div>
              ))}
          </div>
        </StyledOtherProjects>
      </Section>
    </div>
  )
}

export default Project
