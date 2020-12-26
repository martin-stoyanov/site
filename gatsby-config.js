module.exports = {
  siteMetadata: {
    title: `martin's site`,
    description: `Martin's portfolio website.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // name: `images`,
        // path: `${__dirname}/src/images`,
        name: `pages/blog`,
        path: `${__dirname}/src/pages/blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
