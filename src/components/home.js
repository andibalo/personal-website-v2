import React, { useState, useEffect } from "react"
import Button from "./atoms/Button"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { Link, animateScroll as scroll } from "react-scroll"
import styled from "styled-components"

const StyledHomeContainer = styled.div`
  margin: auto;
`

const Home = props => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const one = (
    <h4 className="mb-1 text-gray md:text-2xl lg:text-4xl">Hi, my name is</h4>
  )
  const two = (
    <h2 className="mb-1 text-white md:text-3xl lg:text-5xl ">
      Andi Usman Balo
    </h2>
  )
  const three = (
    <h1 className="mb-5 text-primary md:text-5xl lg:text-7xl">
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
    <StyledHomeContainer className="container">
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
