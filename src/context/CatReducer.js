const catReducer = (state, action) => {
  switch (action.type) {
    case 'GET_BREEDS':
      return {
        ...state,
        breeds: action.payload,
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
