const searchFood = async (query) => {
  try {
    const url = new URL('https://trackapi.nutritionix.com/v2/search/instant')
    url.search = new URLSearchParams({
      query,
      common: true,
      branded: false
    })
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-app-id': process.env.REACT_APP_API_ID,
        'x-app-key': process.env.REACT_APP_API_KEY,
        'x-remote-user-id': 0
      }
    })
    if (!response.ok) {
      throw Error(response.statusText)
    }
    const result = await response.json()
    return result.common
  } catch (e) {
    return []
  }
}

export default searchFood
