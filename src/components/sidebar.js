import React from "react"
import styled from "styled-components"
import {
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StyledBlueLine = styled.div`
  width: 8px;
  height: 100px;
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
    <div
      className="fixed w-full h-full flex flex-col justify-between px-3 pt-3"
      style={{ maxWidth: 150 }}
    >
      <div className="logo">
        {!data?.placeholderImage?.childImageSharp?.fluid ? (
          <div>Picture not found</div>
        ) : (
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        )}
      </div>

      <div className="social-media flex flex-col items-center">
        <GithubOutlined className="mb-2 text-white text-2xl" />
        <LinkedinOutlined className="mb-2 text-white text-2xl" />
        <InstagramOutlined className="mb-2 text-white text-2xl" />
        <StyledBlueLine className="bg-primary mt-3" />
      </div>
    </div>
  )
}

export default Sidebar
