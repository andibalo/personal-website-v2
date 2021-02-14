import React from "react"
import Button from "../atoms/Button"
import styled from "styled-components"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"

const StyledMobileSidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 75vw;
  transform: ${({ showSidebar }) =>
    showSidebar ? " translateX(0vw)" : " translateX(100vw)"};
`

const MobileSidebar = ({ showSidebar }) => {
  return (
    <StyledMobileSidebar
      showSidebar={showSidebar}
      className="bg-primary shadow-xl transition ease duration-300 flex items-center justify-center"
    >
      <div className="flex  flex-col">
        <ul className="m-0 text-center">
          <li className="mb-8 text-xl text-white">About</li>
          <li className="mb-8 text-xl text-white">Experience</li>
          <li className="mb-8 text-xl text-white">Projects</li>
          <li className="mb-8 text-xl text-white">Contact</li>
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
  )
}

export default MobileSidebar
