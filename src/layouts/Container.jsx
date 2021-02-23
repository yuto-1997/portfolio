import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Wrapper = styled.section`
  text-align: ${props => (props.center ? 'center' : '')};
  margin: auto;
  padding: 3rem 1.5rem;
  width: 60%;
  height: 100%;
  flex: 1;
  color: ${props => props.theme.colors.text.base};

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 95%;
    padding: 3rem 1rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 98%;
    padding: 2rem 0.5rem;
  }
`

const Container = ({ children, type, className, center }) => (
  <Wrapper className={className} type={type} center={center}>
    {children}
  </Wrapper>
)

export default Container

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  center: PropTypes.object
}
