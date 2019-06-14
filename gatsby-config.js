module.exports = {
  siteMetadata: {
    title: 'Full-Stack Bootcamp :)',
    author: 'NN',
  },
  plugins: [
      // {
      //   resolve: 'gatsby-source-contentful',
      //   options: {
      //     spaceId: process.env.CONTENTFUL_SPACE_ID,
      //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      //   }
      // },
      'gatsby-plugin-sass',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'src',
          path: `${__dirname}/src/`
        }
      },
      'gatsby-plugin-sharp',
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-plugin-netlify-cms-paths`,
        options: {
          // Path to your Netlify CMS config file
          cmsConfig: `/static/admin/config.yml`
        }
      },
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [
            //'gatsby-remark-relative-images',
            `gatsby-plugin-netlify-cms-paths`,
            // {
            //   resolve: 'gatsby-remark-images',
            //   options: {
            //     maxWidth: 750,
            //     linkImagesToOrigin: false,
            //   }
            // }
          ]
        }
      }
  ]
}