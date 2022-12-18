export const getCatBreeds = async () => {
  const response = await fetch(`https://api.thecatapi.com/v1/breeds`)
  return response.json()
}
