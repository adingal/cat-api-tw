import React, { useContext, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'assets/css/style.css'

import Layout from 'components/Layout'
import Header from 'components/Header'
import Content from 'components/Content'
import CatInfo from 'components/CatInfo'
import Footer from 'components/Footer'

import CatContext from 'context/CatContext'
import { getCatBreeds, getSelectedBreed } from 'context/CatActions'

const App = () => {
  const { breeds, currentBreed, dispatch } = useContext(CatContext)
  const [page, setPage] = useState(1)

  // Get breeds on initial render to fill select input
  useEffect(() => {
    if (breeds?.length === 0) {
      dispatch({ type: 'SET_LOADING' })
      const getBreeds = async () => {
        const catBreeds = await getCatBreeds()
        dispatch({ type: 'GET_BREEDS', payload: catBreeds })
      }
      getBreeds()
    }
  }, [dispatch])

  // Get current breed when page is updated
  useEffect(() => {
    if (currentBreed !== '') {
      dispatch({ type: 'SET_LOADING' })
      getBreed(currentBreed, page)
    }
  }, [page])

  // Get  breed
  const getBreed = async (value, page) => {
    dispatch({ type: 'SET_LOADING' })
    const data = await getSelectedBreed(value, page)
    dispatch({ type: 'GET_SELECTED_BREED', payload: data })
  }

  return (
    <Layout>
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Content page={page} setPage={setPage} getBreed={getBreed} />
            }
          />
          <Route path="/:id" element={<CatInfo />} />
        </Routes>
      </Router>
      <Footer />
    </Layout>
  )
}

export default App
