import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from '../layouts'
import Container from '../layouts/Container'
import Header from '../layouts/Header'
import config from '../../config/site'
import Post from '../components/Post'

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.text.base};
  padding: 5px 10px;
  border: solid 1px #fff;
  border-radius: 20px;
  &:hover {
    background: ${props => props.theme.colors.background};
  }
`

const Information = styled.div`
  text-align: center;
  h1 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }
`

const Tag = ({ pageContext }) => {
  const { posts, tagName } = pageContext
  const upperTag = tagName.charAt(0).toUpperCase() + tagName.slice(1)
  return (
    <Layout>
      <Helmet title={`${tagName} | ${config.siteTitle}`} />
      <Header title={upperTag}>
        <StyledLink to='/taglist'>All Tags</StyledLink>
      </Header>
      <Container>
        <Information>
          {posts.map((post, index) => (
            <Post
              key={index}
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              tags={post.frontmatter.tags}
              path={post.frontmatter.path}
              cover={post.frontmatter.cover.childImageSharp.fluid}
            />
          ))}
        </Information>
      </Container>
    </Layout>
  )
}

export default Tag

Tag.propTypes = {
  pageContext: PropTypes.shape({
    posts: PropTypes.array,
    tagName: PropTypes.string
  })
}
