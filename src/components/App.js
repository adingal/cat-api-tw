import React from 'react'
import 'assets/css/style.css'

import Layout from 'components/Layout'
import Header from 'components/Header'
import Content from 'components/Content'
import Footer from 'components/Footer'

import { CatProvider } from 'context/CatContext'

const App = () => {
  return (
    <CatProvider>
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </CatProvider>
  )
}

export default App
