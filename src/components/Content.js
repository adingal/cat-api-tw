import React, { useContext, useEffect } from 'react'
import CustomContainer from 'atoms/CustomContainer'

import CatContext from 'context/CatContext'
import { getCatBreeds } from 'context/CatActions'

const Content = () => {
  const { breeds, dispatch } = useContext(CatContext)

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' })
    const getBreeds = async () => {
      const catBreeds = await getCatBreeds()
      dispatch({ type: 'GET_BREEDS', payload: catBreeds })
    }
    getBreeds()
  }, [dispatch])

  return (
    <main className="mb-auto py-8 lg:py-16">
      <CustomContainer>
        <div className="mb-4 lg:mb-6">
          <select
            className="w-full min-w-[150px] text-sm text-gray-700 border rounded-md p-2 outline-none cursor-pointer md:w-auto md:text-base"
            defaultValue="default"
          >
            <option value="default" disabled>
              Choose breed
            </option>
            {breeds?.length > 1 &&
              breeds.map((breed) => (
                <option value={breed.id} key={breed.id}>
                  {breed.name}
                </option>
              ))}
          </select>
        </div>
        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4">
          <div className="w-full">
            <img src="https://www.dummyimage.com/400x300" alt="Dummy" />
            <p className="text-sm text-center py-2 border md:text-base">
              <a href="/cat-id">Cat Breed</a>
            </p>
          </div>
        </div>
      </CustomContainer>
    </main>
  )
}

export default Content
