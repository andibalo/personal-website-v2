import React from "react"
import Button from "../atoms/Button"
import styled from "styled-components"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { Link, animateScroll as scroll } from "react-scroll"
import { navLinks } from "../../utils/navLinks"

const StyledMobileSidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 75vw;
  z-index: 100;
  transform: ${({ showSidebar }) =>
    showSidebar ? " translateX(0vw)" : " translateX(100vw)"};
`

const StyledSidebarOverlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  z-index: 99;
  opacity: ${({ showSidebar }) => (showSidebar ? " 1" : " 0")};
  pointer-events: ${({ showSidebar }) => (showSidebar ? " auto" : " none")};
`

const MobileSidebar = ({ showSidebar, handleShowSidebar }) => {
  return (
    <React.Fragment>
      <StyledSidebarOverlay
        showSidebar={showSidebar}
        onClick={handleShowSidebar}
        className="fixed transition ease duration-300 md:hidden"
      ></StyledSidebarOverlay>
      <StyledMobileSidebar
        showSidebar={showSidebar}
        className="bg-primary shadow-xl transition ease duration-300 flex items-center justify-center"
      >
        <div className="flex  flex-col">
          <ul className="m-0 text-center">
            {navLinks &&
              navLinks.map(navlink => (
                <li className=" mb-8">
                  <Link
                    className="p-3 text-xl text-white"
                    to={navlink.href}
                    duration={navlink.duration}
                  >
                    {navlink.name}
                  </Link>
                </li>
              ))}
          </ul>
          <div className="flex justify-center">
            <Button title="Resume" dark={true} />
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="https://github.com/andibalo"
              target="_blank"
              rel="noreferrer"
              className="text-white text-2xl p-2"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/andi-usman-balo-284707182/"
              target="_blank"
              rel="noreferrer"
              className="text-white text-2xl p-2"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/andibalo213/"
              target="_blank"
              rel="noreferrer"
              className="text-white text-2xl p-2"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </StyledMobileSidebar>
    </React.Fragment>
  )
}

export default MobileSidebar
