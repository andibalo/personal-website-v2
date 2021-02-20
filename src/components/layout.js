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
import "./layout.css"
import Navbar from "./navbar"
import Footer from "./footer"
import SnackBar from "../components/molecules/SnackBar"

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
      <SnackBar>
        <div className="min-h-screen bg-secondary">
          <Sidebar />
          <Navbar />
          {children}

          <Footer />
        </div>
      </SnackBar>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
