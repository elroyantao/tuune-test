const fetchNutrients = async (input) => {
  const body = {
    query: input,
    line_delimited: false,
    timezone: 'Europe/London',
    use_branded_foods: false,
    use_raw_foods: false
  }
  const response = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'x-app-id': process.env.REACT_APP_API_ID,
      'x-app-key': process.env.REACT_APP_API_KEY,
      'x-remote-user-id': 0
    },
    body: JSON.stringify(body)
  })
  const result = await response.json()
  return result.foods
}

export default fetchNutrients
