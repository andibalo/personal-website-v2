import React from "react"
import Button from "./atoms/Button"

const Navbar = () => {
  return (
    <div className="flex justify-end pt-3 absolute right-0 mr-10r">
      <ul className="flex text-white m-0 items-center">
        <li className="p-3 mx-2">About</li>
        <li className="p-3 mx-2">Experience</li>
        <li className="p-3 mx-2">Projects</li>
        <li className="p-3 mx-2">Contact</li>
        <li className="p-3 mx-2 mr-0 pr-0">
          <Button title="Resume" />
        </li>
      </ul>
    </div>
  )
}

export default Navbar
