import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import Container from '../layouts/Container'
import Header from '../layouts/Header'

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title='About Page'>Gatsby Starter Noodles</Header>
    <Container center={center}>
      <h3>
        このサイトを一から作りたいという方は{' '}
        <a href='https://qiita.com/so99ynoodles/items/87e136d09644baac634c'>
          ここ
        </a>
        をご確認ください。
      </h3>
    </Container>
  </Layout>
)

export default About

Container.propTypes = {
  center: PropTypes.object
}
