import { rest } from 'msw'

// create a mock response
export const handlers = [
  rest.get(
    'www.thecocktaildb.com/api/json/v1/1/search.php',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          drinks: [
            {
              idDrink: 1,
              strDrinkThumb: '../images/logo.png',
              strDrink: 'test drink',
              strInstructions: 'test instructions',
              strIngredient1: 'test ingredient'
            }
          ]
        })
      )
    }
  )
]
