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
              idDrink: '11457',
              strDrink: 'Gin Fizz',
              strInstructions:
                'Shake all ingredients with ice cubes, except soda water. Pour into glass. Top with soda water.'
            }
          ]
        })
      )
    }
  )
]
