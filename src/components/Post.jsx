import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import TagsBlock from './TagsBlock'
import Container from '../layouts/Container'

const Wrapper = styled.article`
  margin: 0 3rem;
  display: flex;
  @media (max-width: 1000px) {
    display: block;
  }
`

const Image = styled.div`
  margin: auto;
  position: relative;
  box-shadow: ${props => props.theme.shadows.post.default};
  /* transition: ${props => props.theme.transitions.boom.transition}; */
  border-radius: 8px;
  min-height: 300px;
  img {
    border-radius: 8px;
  }
  &:hover {
    box-shadow: ${props => props.theme.shadows.post.hover};
    transform: scale(1.04);
  }
  a {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 8px;
    > div {
      position: static !important;
    }
    > div > div {
      position: static !important;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 5px ${props => props.theme.colors.background};
    }
  }
  flex-basis: 100%;
  max-width: 100%;
  width: 100%;
  @media (max-width: 800px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 500px) {
    min-height: 200px;
  }
`

const Information = styled.div`
  padding: 1rem 1.5rem;
  h1 {
    font-size: 2rem;
    display: inline-block;
    color: ${props => props.theme.colors.text.base};
    /* transition: all ${props => props.theme.transitions.default.duration}; */
    &:hover {
      color: ${props => props.theme.colors.text.light};
    }
  }
  text-align: center;
  flex-basis: 100%;
  max-width: 100%;
  width: 100%;
  @media (max-width: 800px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }
`

const Date = styled.div`
  margin-top: 1rem;
  color: ${props => props.theme.colors.text.light};
`

const Title = styled.h1`
  margin: 0;
`

const Post = ({ path, cover, title, date, excerpt, tags }) => (
  <Container>
    <Wrapper>
      <Image>
        <Link to={path} title={title}>
          <Img fluid={cover} alt={title} />
        </Link>
      </Image>
      <Information>
        <Date>{date}</Date>
        <Link to={path}>
          <Title>{title}</Title>
        </Link>
        <TagsBlock list={tags} />
        {excerpt}
      </Information>
    </Wrapper>
  </Container>
)

export default Post

Post.propTypes = {
  cover: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired
}
