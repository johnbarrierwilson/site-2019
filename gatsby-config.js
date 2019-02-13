require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    author: '@barrierwilson',
    description: `I create innovative websites that save businesses from obscurity.`,
    keywords: [
      'web',
      'website',
      'design',
      'development', 
      'small business',
      'startup',
      'marketing',
      'storybrand',
      'ui design',
      'ux design',
      'front-end development',
      'frontend development'
    ],
    title: `Hi. My name is John Barrier Wilson.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#f4400f`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-dribbble`,
      options: {
        access_token: `${process.env.ACCESS_TOKEN}`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
