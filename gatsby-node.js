/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const featuredProjects = require("./src/content/featuredProjects.json")

// relative path from `gatsby-node.js`
const IMAGE_PATH = "./src/images/"

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  return featuredProjects.map(project => {
    // 1. Extract the card data.
    const {
      projectTitle,
      projectDescription,
      projectTech,
      githubLink,
      demoLink,
      image,
    } = project

    // name, extension and absolute path are required to build a File node
    const { name, ext } = path.parse(image)
    console.log(name, ext)
    const absolutePath = path.resolve(__dirname, IMAGE_PATH, image)
    console.log(absolutePath)
    //  Build a data shape that corresponds to a File node that Sharp can process
    const data = {
      name,
      ext,
      absolutePath, // <-- required
      extension: ext.substring(1), // <-- required, remove the dot in `ext`
    }

    //  Build the image node using our data
    const imageNode = {
      ...data,
      id: createNodeId(`image-${name}`),
      internal: {
        type: "FeaturedProjectImage",
        contentDigest: createContentDigest(data),
      },
    }
    // Create the node. When imageNode is created,
    //    Sharp adds childImageSharp to the node
    actions.createNode(imageNode)

    // 2. Build the PortfolioCard node. Note that most fields simply correspond to
    //    to our JSON data.
    const node = {
      projectTitle,
      projectDescription,
      projectTech,
      githubLink,
      demoLink,
      image: imageNode,
      id: createNodeId(`featured-${projectTitle}`),
      internal: {
        type: "FeaturedProject",
        contentDigest: createContentDigest(project),
      },
    }

    // 3. Create the node
    actions.createNode(node)
  })
}
