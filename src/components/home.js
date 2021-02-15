import React, { useState, useEffect } from "react"
import Button from "./atoms/Button"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHomeContainer = styled.div`
  margin: auto;

  @media (max-width: 390px) {
    h1 {
      font-size: 1.8rem;
    }

    h2 {
      font-size: 1.6rem;
    }

    h4 {
      font-size: 1.3rem;
    }
  }
`

const Home = props => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const one = (
    <h4 className="mb-1 text-gray text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
      Hi, my name is
    </h4>
  )
  const two = (
    <h2 className="mb-1 text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl ">
      Andi Usman Balo
    </h2>
  )
  const three = (
    <h1 className="mb-5 text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
      Full Stack Developer
    </h1>
  )
  const four = (
    <Link to="contact" smooth={true} duration={2000}>
      <Button title="Get In Touch" role="button" />
    </Link>
  )

  const items = [one, two, three, four]

  return (
    <StyledHomeContainer className="container" id="home">
      <div className="min-h-screen flex items-center">
        <div>
          <TransitionGroup component={null}>
            {isMounted &&
              items.map((item, i) => (
                <CSSTransition key={i} timeout={1000} classNames="fadeup">
                  <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </div>
      </div>
    </StyledHomeContainer>
  )
}

export default Home
