import React, { useReducer, useState } from 'react'
import { Grid, Paper } from '@material-ui/core'

import SearchFoods from '../../components/SearchFoods/SearchFoods'
import fetchNutrients from '../../api/fetchNutrients'
import FoodTable from '../../components/FoodTable/FoodTable'
import favouriteReducer, { initialFavourites } from '../../reducers/favouriteReducer'
import Favourites from '../../components/Favourites/Favourites'

const FoodContainer = () => {
  const [foods, setFoods] = useState([])
  const [favourites, dispatch] = useReducer(favouriteReducer, initialFavourites)

  const handleSearch = async (searchTerm) => {
    const results = await fetchNutrients(searchTerm)
    setFoods(results)
  }

  const updateFav = (type) => (favFood) => {
    dispatch({
      type,
      food: favFood
    })
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Paper>
          <SearchFoods onSearch={handleSearch} />
          <FoodTable
            foods={foods}
            favourites={favourites.entity}
            addFav={updateFav('ADD_FAVOURITE')}
            removeFav={updateFav('REMOVE_FAVOURITE')}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Favourites
          favourites={favourites.entity}
          favList={favourites.list}
          removeFav={updateFav('REMOVE_FAVOURITE')}
        />
      </Grid>
    </Grid>
  )
}

export default FoodContainer
