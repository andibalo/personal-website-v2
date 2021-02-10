import React, { useState, useEffect } from "react"
import Button from "./atoms/Button"
import { TransitionGroup, CSSTransition } from "react-transition-group"

const Home = props => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const one = <h4 className="mb-1 text-gray text-4xl">Hi, my name is</h4>
  const two = <h2 className="mb-1 text-white text-5xl ">Andi Usman Balo</h2>
  const three = (
    <h1 className="mb-5 text-primary text-7xl">Full Stack Developer</h1>
  )
  const four = <Button title="Get In Touch" />

  const items = [one, two, three, four]

  return (
    <div className="container ">
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
    </div>
  )
}

export default Home
