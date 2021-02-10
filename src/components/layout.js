/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
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
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
