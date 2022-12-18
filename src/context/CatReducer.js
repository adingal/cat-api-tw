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
        breed: action.payload,
        isLoading: false,
        error: false,
      }
    case 'SET_LOADING':
      return { ...state, isLoading: true }
    default:
      return state
  }
}

export default catReducer
