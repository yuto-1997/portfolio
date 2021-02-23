import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import generatePrism from '../styles/prism'

const Wrapper = styled.div`
  ${generatePrism};
  color: ${props => props.theme.colors.text.base};
  p,
  li {
    letter-spacing: -0.003em;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    font-size: 1.15rem;
    line-height: 2;
    code {
      padding: 0.2rem 0.5rem;
      margin: 0.5rem 0;
    }
  }
  a:not(.gatsby-resp-image-link):not(.anchor) {
    color: ${props => props.theme.colors.text.base};
    box-shadow: inset 0 -2px 0 ${props => props.theme.colors.background};
    border-bottom: 1px solid ${props => props.theme.colors.background};
    text-decoration: none;
    &:hover,
    &:focus {
      background: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.text.base};
    }
  }
  h1 {
    margin-top: 3rem;
  }
  h2 {
    margin-top: 1rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: inline-block;
    position: relative;
    a {
      box-shadow: none;
      border-bottom: none;
      &:hover,
      &:focus {
        background: none;
      }
    }
    &:hover {
      .anchor svg {
        opacity: 0.8;
      }
    }
  }
`

const Content = ({ input }) => (
  <Wrapper dangerouslySetInnerHTML={{ __html: input }} />
)

export default Content

Content.propTypes = {
  input: PropTypes.any.isRequired
}
