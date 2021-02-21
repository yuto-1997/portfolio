import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Link to="/">
          <h3>{data.site.siteMetadata.title} Layout</h3>
        </Link>
        <Link to="/about">
          About
        </Link>
        {children}
      </div>
    )}
  />
)