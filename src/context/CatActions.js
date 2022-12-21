export const getCatBreeds = async () => {
  const response = await fetch(`https://api.thecatapi.com/v1/breeds`)
  return response.json()
}

export const getSelectedBreed = async (breed_id, page, limit = 10) => {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?page=${page}&limit=${limit}&breed_id=${breed_id}`
  )
  return response.json()
}

export const getCatInfo = async (id) => {
  const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`)
  return response.json()
}
