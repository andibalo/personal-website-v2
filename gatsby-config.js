module.exports = {
  siteMetadata: {
    title: `Andi Usman Balo | Full Stack Developer`,
    description: `Andi Usman Balo is a software engineer with strong knowledge in frontend, backend development and UI/UX fundamentals who specializes in building websites, applications and everything in between.`,
    author: `@andiusmanbalo`,
    siteUrl: "https://andiusmanbalo.com",
    image: "/og.png",
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto`],
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-images
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AndiUsmanBalo`,
        short_name: `AndiUsmanBalo`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/balo-logo.png`, // This path is relative to the root of the site.
      },
    },
    // All other plugins
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-189911870-1"],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
