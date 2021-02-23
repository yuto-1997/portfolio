import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadows.footer};
  background: ${props => props.theme.colors.background};
`

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.text.base};
`

const Footer = () => (
  <Wrapper>
    <Text>
      <span>
        Gatsby Starter Noodles -{' '}
        <a href='https://github.com/so99ynoodles'>Taiki Ikeda</a>
      </span>
    </Text>
  </Wrapper>
)
export default Footer
