import React from "react"

import { SiReact } from "@react-icons/all-files/si/SiReact"
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5"
import { SiCss3 } from "@react-icons/all-files/si/SiCss3"
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript"
import { SiJquery } from "@react-icons/all-files/si/SiJquery"
import { SiRedux } from "@react-icons/all-files/si/SiRedux"
import { SiBootstrap } from "@react-icons/all-files/si/SiBootstrap"
import { SiNodeDotJs } from "@react-icons/all-files/si/SiNodeDotJs"
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb"
import { SiPhp } from "@react-icons/all-files/si/SiPhp"
import { SiGithub } from "@react-icons/all-files/si/SiGithub"
import { SiFigma } from "@react-icons/all-files/si/SiFigma"
import { SiHeroku } from "@react-icons/all-files/si/SiHeroku"

export const othersComponents = [
  {
    name: "Github/Version Control",
    component: (
      <SiGithub
        data-tip
        data-for="others-0"
        className="text-6xl text-white mr-3 mb-3 "
      />
    ),
  },
  {
    name: "Figma",
    component: (
      <SiFigma
        data-tip
        data-for="others-1"
        className="text-6xl text-white mr-3 mb-3"
      />
    ),
  },
  {
    name: "Heroku/Deployment",
    component: (
      <SiHeroku
        data-tip
        data-for="others-2"
        className="text-6xl text-white mr-3 mb-3"
      />
    ),
  },
]

export const backendComponents = [
  {
    name: "Node/Express",
    component: (
      <SiNodeDotJs
        data-tip
        data-for="backend-0"
        className="text-6xl text-white mr-3 mb-3"
      />
    ),
  },
  {
    name: "MongoDB/Mongoose",
    component: (
      <SiMongodb
        data-tip
        data-for="backend-1"
        className="text-6xl text-white mr-3 mb-3"
      />
    ),
  },
  {
    name: "PHP",
    component: (
      <SiPhp
        data-tip
        data-for="backend-2"
        className="text-6xl text-white mr-3 mb-3"
      />
    ),
  },
]

export const frontendComponents = [
  {
    name: "React/React Native",
    component: (
      <SiReact
        data-tip
        data-for="frontend-0"
        className="text-6xl text-white mr-3 mb-3"
      />
    ),
  },

  {
    name: "Redux",
    component: (
      <SiRedux
        data-tip
        data-for="frontend-1"
        className="text-6xl text-white mr-3 mb-3"
      />
    ),
  },
  {
    name: "HTML",
    component: (
      <SiHtml5
        data-tip
        data-for="frontend-2"
        className="text-6xl text-white mr-3 mb-3"
      />
    ),
  },
  {
    name: "CSS",
    component: (
      <SiCss3
        data-tip
        data-for="frontend-3"
        className="text-6xl text-white mr-3 mb-3"
      />
    ),
  },
  {
    name: "Javascript",
    component: (
      <SiJavascript
        data-tip
        data-for="frontend-4"
        className="text-6xl text-white mr-3 mb-3"
      />
    ),
  },
  {
    name: "jQuery",
    component: (
      <SiJquery
        data-tip
        data-for="frontend-5"
        className="text-6xl text-white mr-3 mb-3"
      />
    ),
  },
  {
    name: "Bootstrap",
    component: (
      <SiBootstrap
        data-tip
        data-for="frontend-6"
        className="text-6xl text-white mr-3 mb-3"
      />
    ),
  },
]
