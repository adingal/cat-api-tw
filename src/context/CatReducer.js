const catReducer = (state, action) => {
  switch (action.type) {
    case 'GET_BREEDS':
      return {
        ...state,
        breeds: action.payload,
        isLoading: false,
        error: false,
      }
    case 'GET_SELECTED_BREED':
      return {
        ...state,
        breed: [...state.breed, ...action.payload],
        isLoading: false,
        error: false,
      }
    case 'SET_SELECTED_BREED':
      return {
        ...state,
        currentBreed: action.payload,
      }
    case 'CLEAR_SELECTED_BREED':
      return {
        ...state,
        breed: [],
      }
    case 'GET_SELECTED_CAT':
      return {
        ...state,
        catInformation: action.payload,
        isLoading: false,
        error: false,
      }
    case 'CLEAR_SELECTED_CAT':
      return {
        ...state,
        catInformation: null,
      }
    case 'SET_LOADING':
      return { ...state, isLoading: true }
    default:
      return state
  }
}

export default catReducer
