module.exports = {
  siteMetadata: {
    title: 'My Wonderful Website',
    description: 'Welcome to your brilliant website.',
    author: 'Cool Developer'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-transformer-remark',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'posts',
          path: `${__dirname}/posts`
        }
      }
    ]
}