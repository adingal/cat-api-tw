import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'assets/css/style.css'

import Layout from 'components/Layout'
import Header from 'components/Header'
import Content from 'components/Content'
import CatInfo from 'components/CatInfo'
import Footer from 'components/Footer'

import { CatProvider } from 'context/CatContext'

const App = () => {
  return (
    <CatProvider>
      <Layout>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/:id" element={<CatInfo />} />
          </Routes>
        </Router>
        <Footer />
      </Layout>
    </CatProvider>
  )
}

export default App
