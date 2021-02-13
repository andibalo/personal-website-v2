import React from "react"
import Button from "./atoms/Button"
import { Link, animateScroll as scroll } from "react-scroll"

const Navbar = () => {
  return (
    <div className="flex justify-end pt-3 absolute right-0 mr-10r">
      <ul className="flex text-white m-0 items-center">
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
    </div>
  )
}

export default Navbar
