import { createContext, useReducer } from 'react'
import catReducer from 'context/CatReducer'

const CatContext = createContext()

export const CatProvider = ({ children }) => {
  const initialState = {
    breed: [],
    breeds: [],
    currentBreed: '',
    isLoading: false,
    error: false,
  }

  const [state, dispatch] = useReducer(catReducer, initialState)

  return (
    <CatContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </CatContext.Provider>
  )
}

export default CatContext
