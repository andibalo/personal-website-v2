/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Sidebar from "./sidebar"
import Header from "./header"
import "./layout.css"
import Navbar from "./navbar"
import Home from "./home"
import About from "./about"
import Experience from "./experience"
import Project from "./project"
import Contact from "./contact"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const isHome = location.pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome)

  useEffect(() => {
    if (isLoading) {
      return
    }
    setIsLoading(false)
  }, [isLoading])
  return (
    <>
      <div className="min-h-screen bg-secondary">
        <Sidebar />
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
