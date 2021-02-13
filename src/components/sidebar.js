import React from "react"
import styled from "styled-components"
import {
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { scrollToTop } from "../utils/functions"

const StyledBlueLine = styled.div`
  width: 8px;
  height: 100px;
`

const StyledSidebar = styled.div`
  max-width: 150px;
  z-index: 10;
`

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "balo-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledSidebar className="fixed w-full h-full flex flex-col justify-between px-3 pt-3">
      <div className="logo">
        {!data?.placeholderImage?.childImageSharp?.fluid ? (
          <div>Picture not found</div>
        ) : (
          <div onClick={scrollToTop} className="cursor-pointer">
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
        )}
      </div>

      <div className="social-media flex flex-col items-center">
        <a
          href="https://github.com/andibalo"
          target="_blank"
          rel="noreferrer"
          className="mb-2 text-white text-2xl hover:text-primary transition ease duration-300"
        >
          <GithubOutlined />
        </a>
        <a
          href="https://www.linkedin.com/in/andi-usman-balo-284707182/"
          target="_blank"
          rel="noreferrer"
          className="mb-2 text-white text-2xl hover:text-primary transition ease duration-300"
        >
          <LinkedinOutlined />
        </a>
        <a
          href="https://www.instagram.com/andibalo213/"
          target="_blank"
          rel="noreferrer"
          className="mb-2 text-white text-2xl hover:text-primary transition ease duration-300"
        >
          <InstagramOutlined />
        </a>

        <StyledBlueLine className="bg-primary mt-3" />
      </div>
    </StyledSidebar>
  )
}

export default Sidebar
