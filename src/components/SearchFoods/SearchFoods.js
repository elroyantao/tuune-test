import { Button, Input, InputAdornment, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './SearchFoods.module.css'
import Autocomplete from '@material-ui/lab/Autocomplete'
import searchFood from '../../api/searchFood'

const SearchFoods = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [options, setOptions] = useState([])

  const handleAutocompleteFetch = async (event, value) => {
    if (value) {
      const result = await searchFood(value)
      setOptions(result)
    }
  }

  const handleSearchChange = (event, value) => {
    setSearchTerm(value)
  }

  const handleSearch = () => {
    onSearch(searchTerm)
  }

  const renderButton = () => {
    return (
      <InputAdornment>
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </InputAdornment>
    )
  }

  return (
    <div className={styles.container}>
      <div>Enter a query like &quot;1 cup mashed potatoes&quot; to get your nutritional info.</div>
      <Autocomplete
        freeSolo
        disableClearable
        onChange={handleSearchChange}
        onInputChange={handleAutocompleteFetch}
        options={options.map(({ food_name }) => food_name)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder="1 cup mashed potatoes"
            fullWidth
            InputProps={{
              ...params.InputProps,
              endAdornment: renderButton()
            }}
          />
        )}
      />
    </div>
  )
}

SearchFoods.propTypes = {
  onSearch: PropTypes.func
}

export default SearchFoods
