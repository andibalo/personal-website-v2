import React, { useRef, useEffect, useState } from "react"
import Section from "./atoms/Section"
import SectionHeader from "./atoms/SectionHeader"
import styled from "styled-components"
import sr from "../utils/scroll-reveal/sr"
import srConfig from "../utils/scroll-reveal/sr-config"
import { GoTriangleLeft } from "@react-icons/all-files/go/GoTriangleLeft"
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt"
import { FaPhone } from "@react-icons/all-files/fa/FaPhone"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"

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
  textarea,
  button {
    border-radius: var(--border-radius);
  }

  textarea {
    resize: none;
  }

  .triangle {
    left: -12%;
    top: 15%;
    color: var(--primary-blue);
  }

  .list-icon {
    position: absolute;
    left: -30px;
    color: var(--primary-blue);
  }
`

const Contact = props => {
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  const revealContainer = useRef(null)

  const [isSending, setIsSending] = useState(false)

  const handleSubmitForm = e => {
    e.preventDefault()

    setIsSending(true)

    setTimeout(() => {
      setIsSending(false)
    }, 2000)
  }

  return (
    <div ref={revealContainer} id="contact">
      <Section className="container">
        <SectionHeader title="Contact Me" />
        <div className="mt-10">
          <StyledContactCard className="flex shadow-xl">
            <div className=" contactInfo p-10 rounded-l-lg flex items-center">
              <div>
                <ul className="relative mb-0 max-w-xs">
                  <li className="mb-7">
                    <FaPhone className="list-icon text-lg" />
                    <p className="text-white ml-3">
                      +62895383118118 (Phone)
                      <br />
                      +6285226062116 (WA)
                      <br />
                      <a
                        href="https://api.whatsapp.com/send?phone=6285226062116&text=Halo%20Andi,%20saya%20baru%20mengunjungi%20website%20kamu.%20Boleh%20berbicara%20sebentar?"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary hover:underline"
                      >
                        Message WA
                      </a>
                    </p>
                  </li>
                  <li className="mb-7">
                    <FaEnvelope className="list-icon text-lg" />
                    <p className="text-white ml-3">
                      andibalo213@gmail.com
                      <br />
                      <a
                        href="mailto:andibalo213@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary hover:underline"
                      >
                        Send email
                      </a>
                    </p>
                  </li>
                  <li className="mb-7">
                    <FaMapMarkerAlt className="list-icon text-lg" />
                    <p className="text-white ml-3">
                      Kec. Klp. Gading, Kota Jkt Utara, Daerah Khusus Ibukota
                      Jakarta
                      <br />
                      <a
                        href="https://goo.gl/maps/9FLc4znnrwGTRvnC8"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary hover:underline"
                      >
                        View in Google Maps
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" contactForm p-10 rounded-r-lg relative">
              <GoTriangleLeft className="absolute triangle text-8xl" />
              <div>
                <div>
                  <h3 className="text-white mb-1">Get In Touch</h3>
                  <p className="font-semibold text-secondary">
                    Open for Business Inquiries
                  </p>
                </div>
                <form className="mb-0 " onSubmit={handleSubmitForm}>
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

                  <div className="flex">
                    <button
                      type="Submit"
                      disabled={isSending}
                      style={{
                        backgroundColor: isSending ? "var(--grey)" : "",
                      }}
                      className=" bg-secondary-light text-white py-2 px-3 cursor-pointer hover:bg-secondary transition ease duration-300"
                    >
                      Send Message
                    </button>
                    {isSending && (
                      <svg
                        x="0px"
                        y="0px"
                        className="animate-spin h-10 w-10 mr-3"
                        viewBox="0 0 100 100"
                        enable-background="new 0 0 0 0"
                      >
                        <path
                          fill="#fff"
                          d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                        ></path>
                      </svg>
                    )}
                  </div>
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
