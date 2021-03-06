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
import {
  Card,
  CardInner,
  FrontCard,
  BackCard,
} from "../components/molecules/FlipCard"
import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft"
import useSnackbar from "../hooks/useSnackbar"

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
    left: -70px;
    top: 15%;
    color: var(--primary-blue);
  }

  .list-icon {
    position: absolute;
    left: -30px;
    color: var(--primary-blue);
  }
`

const StyledContactCardMobile = styled.div`
  .contactCardMobile {
    height: 600px;
  }

  input,
  textarea,
  button {
    border-radius: var(--border-radius);
  }

  .list-icon {
    position: absolute;

    color: var(--primary-blue);
  }

  @media (max-width: 480px) {
    .contactCardMobile {
      height: 550px;
    }
  }
`

const Contact = props => {
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  const revealContainer = useRef(null)

  const [isSending, setIsSending] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)
  const [openSnackbar, closeSnackbar] = useSnackbar()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const { name, email, phone, message } = formData

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleFormChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmitForm = e => {
    e.preventDefault()

    setIsSending(true)

    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formData,
      }),
    })
      .then(() => {
        setIsSending(false)
        openSnackbar("Message sent successfully")
      })
      .catch(error => {
        setIsSending(false)
        openSnackbar("Failed to send message", "danger")
      })
  }

  return (
    <div ref={revealContainer} id="contact">
      <Section className="container">
        <SectionHeader title="Contact Me" />
        <div className="mt-10">
          <StyledContactCard className="hidden md:flex shadow-xl  ">
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
                <form
                  name="contact"
                  method="post"
                  className="mb-0 "
                  onSubmit={handleSubmitForm}
                  data-netlify="true"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input
                    className="block w-full p-2 mb-3"
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={name}
                    onChange={e => handleFormChange(e)}
                    required
                  />
                  <input
                    className="block w-full p-2 mb-3"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={e => handleFormChange(e)}
                    required
                  />
                  <input
                    className="block w-full p-2 mb-3"
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    value={phone}
                    onChange={e => handleFormChange(e)}
                    required
                  />
                  <textarea
                    className="block w-full p-2 mb-3"
                    rows="5"
                    placeholder="Leave your message here..."
                    name="message"
                    value={message}
                    onChange={e => handleFormChange(e)}
                    required
                  ></textarea>

                  <div className="flex items-center">
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
                        className="animate-spin h-8 w-8 mr-3"
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
          <StyledContactCardMobile className="md:hidden">
            <Card className="contactCardMobile">
              <CardInner flipOnHover={false} flipped={isFlipped}>
                <FrontCard className="bg-primary p-8 rounded-lg overflow-hidden flex flex-col">
                  <div>
                    <h3 className="text-white mb-1">Get In Touch</h3>
                    <p className="font-semibold text-secondary">
                      Open for Business Inquiries
                    </p>
                  </div>
                  <form
                    name="contact"
                    method="post"
                    className="mb-0 "
                    onSubmit={handleSubmitForm}
                    data-netlify="true"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <input
                      className="block w-full p-2 mb-3"
                      type="text"
                      placeholder="Full Name"
                      name="name"
                      value={name}
                      onChange={e => handleFormChange(e)}
                      required
                    />
                    <input
                      className="block w-full p-2 mb-3"
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={e => handleFormChange(e)}
                      required
                    />
                    <input
                      className="block w-full p-2 mb-3"
                      type="tel"
                      placeholder="Phone Number"
                      name="phone"
                      value={phone}
                      onChange={e => handleFormChange(e)}
                      required
                    />
                    <textarea
                      className="block w-full p-2 mb-3"
                      rows="5"
                      placeholder="Leave your message here..."
                      name="message"
                      value={message}
                      onChange={e => handleFormChange(e)}
                      required
                    ></textarea>

                    <div className="flex items-center">
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
                          className="animate-spin h-8 w-8 mr-3"
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
                  <div
                    className="flex items-center mt-auto"
                    onClick={() => setIsFlipped(!isFlipped)}
                  >
                    <FaArrowLeft className="mr-2 text-white" />
                    <p className="m-0 text-white">View Contact Information</p>
                  </div>
                </FrontCard>
                <BackCard className="bg-secondary-light p-8 rounded-lg overflow-hidden flex flex-col">
                  <div>
                    <h3 className="text-white mb-1">Contact Information</h3>
                  </div>
                  <ul className="relative mb-0 max-w-xs mt-6">
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
                  <div
                    className="flex items-center mt-auto"
                    onClick={() => setIsFlipped(!isFlipped)}
                  >
                    <FaArrowLeft className="mr-2 text-primary" />
                    <p className="m-0 text-primary">Write A Message</p>
                  </div>
                </BackCard>
              </CardInner>
            </Card>
          </StyledContactCardMobile>
        </div>
      </Section>
    </div>
  )
}

export default Contact
