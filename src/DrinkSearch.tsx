import React, { useState } from 'react'
import fetchDrinks from './api/fetchDrinks'

interface IDrinks {
  idDrink: React.Key
  strDrink: string
  strInstructions: string
}

const DrinkSearch = () => {
  const [drinks, setDrinks] = useState<IDrinks[]>([])
  const [drinkQuery, setDrinkQuery] = useState('')
  const [error, setError] = useState<unknown>(null)

  const handleDrinkQuery = async (e: any) => {
    e.preventDefault()
    if (drinkQuery) {
      try {
        const data = await fetchDrinks(drinkQuery)
        setDrinks(data)
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error)
        }
      }
    }
    setDrinkQuery('')
  }

  return (
    <>
      <form className="form-group m-auto w-50 pt-2" onSubmit={handleDrinkQuery}>
        <input
          className="form-control"
          placeholder="search for a drink..."
          type="search"
          value={drinkQuery}
          onChange={event => setDrinkQuery(event.target.value)}
        />
        <button className="btn btn-primary mt-2 btn-block" type="submit">
          Search
        </button>
      </form>

      {drinks ? (
        <>
          {drinks.map(drink => {
            return (
              <div
                key={drink.idDrink}
                className="card m-2"
                style={{ width: '20rem' }}
              >
                <div className="card-body">
                  <h3 className="card-title text-center">{drink.strDrink}</h3>
                  <p className="card-text border-top">
                    {drink.strInstructions}
                  </p>
                </div>
              </div>
            )
          })}
        </>
      ) : (
        <h5 className="text-center mt-5">🍹 No drinks found 🍹</h5>
      )}
      {error && <h5 className="text-center mt-5">🛑 Service unavailable 🛑</h5>}
    </>
  )
}

export default DrinkSearch
