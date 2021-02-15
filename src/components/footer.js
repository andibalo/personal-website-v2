import React from "react"
import { FaChevronUp } from "@react-icons/all-files/fa/FaChevronUp"
import { scrollToTop } from "../utils/functions"

const Footer = props => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center">
        <FaChevronUp
          className="text-3xl text-primary mb-3 cursor-pointer"
          onClick={scrollToTop}
        />
        <div>
          <p className="text-gray">Created by Andi Usman Balo</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
