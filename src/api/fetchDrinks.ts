const fetchDrinks = async (drinkQuery: string) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkQuery}`
  )
  const data = await response.json()
  return data.drinks
}

export default fetchDrinks
