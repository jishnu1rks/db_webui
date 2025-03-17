import React from 'react'
import Layout from '../../layouts/homelayout/homelayout'
import { Counter } from '../../features/counter/counter'

const Homepage = () => {
  return (
    <Layout>
        <h1>Homepage</h1>
        <Counter />
    </Layout>
  )
}

export default Homepage