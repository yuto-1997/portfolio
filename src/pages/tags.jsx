import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts/'
import Container from '../layouts/Container'
import Header from '../layouts/Header'
import TagsBlock from '../components/TagsBlock'

const Tags = ({ pageContext }) => {
  const { tags } = pageContext

  return (
    <Layout>
      <Header title='Tags Page'>Gatsby Starter Noodles</Header>
      <Container>
        <TagsBlock list={tags} />
      </Container>
    </Layout>
  )
}

export default Tags

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tags: PropTypes.array
  })
}
