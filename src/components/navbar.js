import React, { useState } from "react"
import Button from "./atoms/Button"
import { Link, animateScroll as scroll } from "react-scroll"
import MobileSidebar from "./molecules/MobileSidebar"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledNavbar = styled.div`
  .gatsby-image-wrapper {
    width: 100px;
  }
`

const Navbar = () => {
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

  const [showSidebar, setShowSidebar] = useState(false)

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <React.Fragment>
      <MobileSidebar showSidebar={showSidebar} />
      <StyledNavbar className="flex justify-between md:justify-end pt-3 absolute inset-x-0  sm:mx-8 lg:mx-20 xl:mx-10r">
        <Img
          className="md:hidden"
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
        <button
          class={`hamburger hamburger--spin md:hidden ${
            showSidebar ? "is-active" : ""
          }`}
          onClick={handleShowSidebar}
          type="button"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <ul className=" text-white m-0 items-center hidden md:flex">
          <li className=" mx-2">
            <Link
              className="p-3 cursor-pointer hover:text-primary transition duration-300"
              to="about"
              smooth={true}
              duration={1000}
            >
              About
            </Link>
          </li>
          <li className=" mx-2">
            <Link
              className="p-3 cursor-pointer hover:text-primary transition duration-300"
              to="experience"
              smooth={true}
              duration={1500}
            >
              Experience
            </Link>
          </li>
          <li className="mx-2">
            <Link
              className="p-3 cursor-pointer hover:text-primary transition duration-300"
              to="project"
              smooth={true}
              duration={2000}
            >
              Projects
            </Link>
          </li>
          <li className="mx-2">
            <Link
              className="p-3 cursor-pointer hover:text-primary transition duration-300 ease"
              to="contact"
              smooth={true}
              duration={2000}
            >
              Contact
            </Link>
          </li>
          <li className="p-3 mx-2 mr-0 pr-0">
            <Button
              title="Resume"
              href="../static/Andi_Usman_Balo_CV.pdf"
              download
            />
          </li>
        </ul>
      </StyledNavbar>
    </React.Fragment>
  )
}

export default Navbar
