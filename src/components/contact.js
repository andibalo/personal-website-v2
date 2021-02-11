import React, { useRef, useEffect, useState } from "react"
import Section from "./atoms/Section"
import SectionHeader from "./atoms/SectionHeader"
import styled from "styled-components"
import sr from "../utils/scroll-reveal/sr"
import srConfig from "../utils/scroll-reveal/sr-config"
import { GoTriangleLeft } from "@react-icons/all-files/go/GoTriangleLeft"

const StyledContactCard = styled.div`
  min-height: 500px;

  .contactInfo {
    background-color: var(--black-lighter);
    flex: 0 0 50%;
  }

  .contactForm {
    background-color: var(--primary-blue);
    flex: 0 0 50%;
  }

  input,
  textarea {
    border-radius: var(--border-radius);
  }

  textarea {
    resize: none;
  }

  .triangle {
    left: -65px;
    top: 15%;
    color: var(--primary-blue);
  }
`

const Contact = props => {
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  const revealContainer = useRef(null)

  return (
    <div ref={revealContainer} id="contact">
      <Section className="container">
        <SectionHeader title="Contact Me" />
        <div className="mt-10">
          <StyledContactCard className="flex shadow-xl">
            <div className=" contactInfo p-10 rounded-l-lg">
              <div>
                <div>
                  <h3 className="text-white mb-1">Contact Information</h3>
                </div>
              </div>
            </div>
            <div className=" contactForm p-10 rounded-r-lg relative">
              <GoTriangleLeft className="absolute triangle text-7xl" />
              <div>
                <div>
                  <h3 className="text-white mb-1">Get In Touch</h3>
                  <p className="font-semibold text-secondary">
                    Open for Business Inquiries
                  </p>
                </div>
                <form className="mb-0 ">
                  <input
                    className="block w-full p-2 mb-3"
                    type="text"
                    placeholder="Full Name"
                    required
                  />
                  <input
                    className="block w-full p-2 mb-3"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    className="block w-full p-2 mb-3"
                    type="tel"
                    placeholder="Phone Number"
                    required
                  />
                  <textarea
                    className="block w-full p-2 mb-3"
                    rows="5"
                    placeholder="Leave your message here..."
                    required
                  ></textarea>
                  <input
                    type="Submit"
                    value="Send Message"
                    className="bg-secondary-light text-white py-2 px-3 cursor-pointer"
                  />
                </form>
              </div>
            </div>
          </StyledContactCard>
        </div>
      </Section>
    </div>
  )
}

export default Contact
