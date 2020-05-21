const path = require(`path`)


module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["CONFIG_PDF", "DATA_PATH"]
      },
    },
  ],
}



