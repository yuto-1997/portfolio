import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import Layout from '../layouts'
import Post from '../components/Post'

const Wrapper = styled.div`
  padding: 2rem 2.5rem;
`

const Home = ({ data }) => {
  const {
    allMarkdownRemark: { edges }
  } = data
  return (
    <Layout>
      <Helmet title={'Home Page'} />
      <Wrapper>
        {edges.map(({ node }) => (
          <Post
            key={node.id}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
            excerpt={node.excerpt}
            path={node.frontmatter.path}
            cover={node.frontmatter.cover.childImageSharp.fluid}
          />
        ))}
      </Wrapper>
    </Layout>
  )
}

Home.propTypes = {
  data: PropTypes.object
}

export default Home

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "YYYY年MM月DD日")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
