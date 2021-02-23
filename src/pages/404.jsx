import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import Container from '../layouts/Container'
import Header from '../layouts/Header'

const ErrorPage = center => (
  <Layout>
    <Helmet title={'404'} />
    <Header title='404' />
    <Container center={center}>
      <h1>ページが見つかりません</h1>
      <h3>
        <Link to='/'>ホーム</Link>に戻る
      </h3>
    </Container>
  </Layout>
)

export default ErrorPage

Container.propTypes = {
  center: PropTypes.object
}
