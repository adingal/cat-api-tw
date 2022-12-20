import React, { useContext, useEffect, useState } from 'react'
import CustomContainer from 'atoms/CustomContainer'
import BreedCard from 'atoms/BreedCard'

import CatContext from 'context/CatContext'
import { getCatBreeds, getSelectedBreed } from 'context/CatActions'

const Content = () => {
  const { breed, breeds, dispatch } = useContext(CatContext)
  const [page, setPage] = useState(1)
  const [currentBreed, setCurrentBreed] = useState('')

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' })
    const getBreeds = async () => {
      const catBreeds = await getCatBreeds()
      dispatch({ type: 'GET_BREEDS', payload: catBreeds })
    }
    getBreeds()
  }, [dispatch])

  useEffect(() => {
    if (currentBreed !== '') {
      dispatch({ type: 'SET_LOADING' })
      getBreed(currentBreed, page)
    }
  }, [page])

  const getBreed = async (value, page) => {
    dispatch({ type: 'SET_LOADING' })
    const data = await getSelectedBreed(value, page)
    dispatch({ type: 'GET_SELECTED_BREED', payload: data })
  }

  const handleSelectChange = async (e) => {
    dispatch({ type: 'CLEAR_SELECTED_BREED' })
    setCurrentBreed(e.target.value)
    getBreed(e.target.value, 1)
  }

  const handleLoadMoreClick = () => {
    setPage((prev) => prev + 1)
  }

  const renderSelect = () => (
    <select
      onChange={handleSelectChange}
      className="w-full min-w-[150px] text-sm text-gray-700 border rounded-md p-2 outline-none cursor-pointer md:w-auto md:text-base"
      defaultValue="default"
    >
      <option value="default" disabled>
        Choose breed
      </option>
      {breeds?.length > 0 &&
        breeds.map((breed) => (
          <option value={breed.id} key={breed.id}>
            {breed.name}
          </option>
        ))}
    </select>
  )

  return (
    <main className="mb-auto py-8 lg:py-16">
      <CustomContainer>
        <div className="mb-4 lg:mb-6">{renderSelect()}</div>
        {breed?.length > 0 ? (
          <div className="grid grid-cols-1 gap-y-4 mb-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 lg:mb-6">
            {breed.map((item, index) => (
              <BreedCard item={item} key={`${index}-${item.id}`} />
            ))}
          </div>
        ) : (
          <div className="mb-4 lg:mb-6">
            <p>Please select cat breed.</p>
          </div>
        )}
        {breed?.length >= 10 && page < 10 && (
          <div>
            <button
              onClick={handleLoadMoreClick}
              className="w-full bg-stone-800 text-white mb-4 rounded-md py-2 px-4 md:w-auto lg:mb-6 hover:bg-stone-600"
              type="button"
            >
              Load More
            </button>
          </div>
        )}
      </CustomContainer>
    </main>
  )
}

export default Content
