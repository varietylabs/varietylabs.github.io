module.exports = {
  siteMetadata: {
    site: `Variety Labs`,
    title: `Variety Labs`,
    titleTemplate: `Variety Labs`,
    description: `Software development company based in the UK`,
    siteUrl: `https://varietylabs.xyz/`,
    language: `en`,
    color: `#ffffff`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-routes`,
      options: {
        path: `${__dirname}/src/routes.ts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Variety Labs`,
        short_name: `Variety Labs`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/assets/icon.png`,
        include_favicon: true,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets\/svg/,
        },
      },
    },
  ],
  flags: {
    DEV_SSR: false,
  },
};
