import React from 'react'
import 'assets/css/style.css'

import Layout from 'components/Layout'
import Header from 'components/Header'
import Content from 'components/Content'
import Footer from 'components/Footer'

const App = () => {
  return (
    <>
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </>
  )
}

export default App
