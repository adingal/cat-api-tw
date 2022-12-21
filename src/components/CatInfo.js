import React, { useContext, useEffect } from 'react'
import CustomContainer from 'atoms/CustomContainer'
import { Link, useParams } from 'react-router-dom'

import CatContext from 'context/CatContext'
import { getCatInfo } from 'context/CatActions'

const CatInfo = () => {
  const { catInformation, isLoading, dispatch } = useContext(CatContext)
  const params = useParams()

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' })
    const getCatData = async () => {
      const catData = await getCatInfo(params.id)
      dispatch({ type: 'GET_SELECTED_CAT', payload: catData })
    }
    getCatData()
  }, [])

  return (
    <div className="min-w-[90%] max-w-lg text-gray-700 mx-auto mb-auto py-8 lg:min-w-[600px] lg:py-16">
      <CustomContainer>
        <div>
          <Link
            onClick={() => dispatch({ type: 'CLEAR_SELECTED_CAT' })}
            to="/"
            className="w-auto bg-stone-800 text-white mb-4 rounded-md py-2 px-4 lg:mb-6 hover:bg-stone-600"
            type="button"
          >
            Back
          </Link>
        </div>
        <div>
          {catInformation && catInformation.breeds !== null ? (
            <div className="border border-gray-300 rounded-md overflow-hidden">
              <img src={catInformation.url} alt="" />
              <div className="pt-4 px-4 pb-6">
                <h2 className="text-lg font-medium mb-0 md:text-xl">
                  {catInformation.breeds[0].name}
                </h2>
                <p className="text-xs text-gray-500 mb-2 md:text-sm md:mb-3">
                  {catInformation.breeds[0].origin}
                </p>
                <p className="text-sm mb-6 md:text-base md:mb-8">
                  {catInformation.breeds[0].description}
                </p>
                <div className="text-right">
                  <a
                    className="text-white bg-gray-700 border border-gray-300 rounded-md py-2 px-4 transition-all hover:bg-gray-600"
                    href={catInformation.breeds[0].vetstreet_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ) : isLoading ? null : (
            <p className="text-sm md:text-base text-gray-700">
              Failed to fetch cat data...
            </p>
          )}
        </div>
      </CustomContainer>
    </div>
  )
}

export default CatInfo
