import React, { useState, useEffect } from "react"
import Button from "../components/atoms/Button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"

const StyledGlitchWrapper = styled.div`
  .glitch {
    color: var(--white);
    font-size: 3rem;
    text-transform: upercase;
    position: relative;
    display: inline-block;
  }
  .glitch::before,
  .glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #252526;
  }
  .glitch::before {
    left: 2px;
    text-shadow: -2px 0 #49fc00;
    clip: rect(24px, 550px, 90px, 0);
    animation: glitch-anim-2 3s infinite linear alternate-reverse;
  }
  .glitch::after {
    left: -2px;
    text-shadow: -2px 0 #b300fc;
    clip: rect(85px, 550px, 140px, 0);
    animation: glitch-anim 2.5s infinite linear alternate-reverse;
  }
`

const NotFoundPage = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <Layout>
      <SEO title="Page Not Found | Andi Usman Balo" />
      <div className="min-h-screen flex items-center justify-center">
        <CSSTransition in={isMounted} timeout={500} classNames="fadeup">
          <div className="text-center">
            <StyledGlitchWrapper>
              <h1 className="text-primary text-9xl mb-2 ">404</h1>

              <div class="glitch" data-text="Page Not Found">
                <h2 className="text-white text-5xl">Page Not Found</h2>
              </div>
            </StyledGlitchWrapper>

            <Button
              title="Go Back Home"
              href="/"
              className="mt-12"
              gatsbyLink
            />
          </div>
        </CSSTransition>
      </div>
    </Layout>
  )
}

export default NotFoundPage
