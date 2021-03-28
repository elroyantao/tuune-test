import { Button, Input, InputAdornment, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './SearchFoods.module.css'

const SearchFoods = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
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
      <TextField
        variant="outlined"
        placeholder="1 cup mashed potatoes"
        value={searchTerm}
        onChange={handleChange}
        fullWidth
        InputProps={{
          endAdornment: renderButton()
        }}
      />
    </div>
  )
}

SearchFoods.propTypes = {
  onSearch: PropTypes.func
}

export default SearchFoods
