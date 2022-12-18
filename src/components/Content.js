import React, { useContext, useEffect } from 'react'
import CustomContainer from 'atoms/CustomContainer'
import BreedCard from 'atoms/BreedCard'

import CatContext from 'context/CatContext'
import { getCatBreeds, getSelectedBreed } from 'context/CatActions'

const Content = () => {
  const { breed, breeds, dispatch } = useContext(CatContext)

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' })
    const getBreeds = async () => {
      const catBreeds = await getCatBreeds()
      dispatch({ type: 'GET_BREEDS', payload: catBreeds })
    }
    getBreeds()
  }, [dispatch])

  const handleSelectChange = async (e) => {
    dispatch({ type: 'SET_LOADING' })
    const getBreed = await getSelectedBreed(e.target.value, 1)
    dispatch({ type: 'GET_SELECTED_BREED', payload: getBreed })
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
          <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4">
            {breed.map((item) => (
              <BreedCard item={item} key={item.id} />
            ))}
          </div>
        ) : (
          <div>
            <p>Please select cat breed.</p>
          </div>
        )}
      </CustomContainer>
    </main>
  )
}

export default Content
