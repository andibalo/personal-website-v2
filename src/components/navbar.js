import React, { useState, useEffect } from "react"
import Button from "./atoms/Button"
import { Link } from "gatsby"
import MobileSidebar from "./molecules/MobileSidebar"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"
import { navLinks } from "../utils/navLinks"
const StyledNavbar = styled.div`
  .gatsby-image-wrapper {
    width: 140px;
  }

  @media (max-width: 767px) {
    .gatsby-image-wrapper {
      width: 100px;
    }
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

  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 50)
    })
  }, [])

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <React.Fragment>
      <MobileSidebar
        showSidebar={showSidebar}
        handleShowSidebar={handleShowSidebar}
      />
      <StyledNavbar
        isScrolled={isScrolled}
        className={`${
          isScrolled && "bg-secondary-light shadow-xl"
        } flex justify-between  lg:justify-end pt-3 absolute inset-x-0  px-8 lg:px-20 xl:px-10r`}
      >
        <Img
          className="lg:hidden"
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
          {navLinks &&
            navLinks.map(navlink => (
              <li className="mx-2">
                <button
                  className="p-3 cursor-pointer hover:text-primary transition duration-300"
                  onClick={() => scrollTo(navlink.href)}
                >
                  {navlink.name}
                </button>
              </li>
            ))}

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
