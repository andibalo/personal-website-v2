import React from "react"
import Layout from "../components/layout"
import Home from "../components/home"
import About from "../components/about"
import Experience from "../components/experience"
import Project from "../components/project"
import Contact from "../components/contact"

import SEO from "../components/seo"

const IndexPage = () => (
  <React.Fragment>
    <Layout>
      <SEO />
      <Home />
      <About />
      <Experience />
      <Project />
      <Contact />
    </Layout>
  </React.Fragment>
)

export default IndexPage
