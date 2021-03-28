import React, { useState } from 'react'
import { Grid, Paper } from '@material-ui/core'

import SearchFoods from '../../components/SearchFoods/SearchFoods'
import fetchNutrients from '../../api/fetchNutrients'

const NutrientsContainer = () => {
  const [nutrients, setNutrients] = useState([])

  const handleSearch = async (searchTerm) => {
    const nutrients = await fetchNutrients(searchTerm)
    setNutrients(nutrients)
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Paper>
          <SearchFoods onSearch={handleSearch} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <div style={{ height: '100vh', background: 'pink' }}></div>
      </Grid>
    </Grid>
  )
}

export default NutrientsContainer
