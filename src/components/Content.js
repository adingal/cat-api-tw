import React, { useContext } from 'react'
import CustomContainer from 'atoms/CustomContainer'
import BreedCard from 'atoms/BreedCard'

import CatContext from 'context/CatContext'

const Content = ({ page, setPage, getBreed }) => {
  // Get context states and methods
  const { breed, breeds, currentBreed, dispatch } = useContext(CatContext)
  const breedCount = breed?.length > 0 ? `${breed.length} results` : '0 result'

  // Handle select option change
  const handleSelectChange = async (e) => {
    dispatch({ type: 'CLEAR_SELECTED_BREED' })
    dispatch({ type: 'SET_SELECTED_BREED', payload: e.target.value })
    getBreed(e.target.value, 1)
  }

  // Handle load more button click
  const handleLoadMoreClick = () => {
    setPage((prev) => prev + 1)
  }

  // Render select options
  const renderSelect = () => (
    <select
      onChange={handleSelectChange}
      className="w-full min-w-[150px] text-sm text-gray-700 mb-3 border rounded-md p-2 outline-none cursor-pointer md:w-auto md:text-base md:mb-0"
      value={`${currentBreed !== '' ? currentBreed : 'default'}`}
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
        <div className="flex flex-col justify-between mb-4 md:flex-row lg:mb-6">
          {renderSelect()}
          {currentBreed !== '' && (
            <p className="text-sm text-gray-700 md:text-base">{breedCount}</p>
          )}
        </div>
        {breed?.length > 0 ? (
          <div className="grid grid-cols-1 gap-y-4 mb-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 lg:mb-6">
            {breed.map((item, index) => (
              <BreedCard item={item} key={`${index}-${item.id}`} />
            ))}
          </div>
        ) : (
          <div className="mb-4 lg:mb-6">
            <p className="text-sm text-gray-700 md:text-base">
              Please select cat breed.
            </p>
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
