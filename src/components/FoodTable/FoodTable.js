import React from 'react'
import PropTypes from 'prop-types'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

const FoodTable = ({ foods, favourites, addFav, removeFav }) => {
  const favClicked = (food) => () => {
    if (favourites[food.ndb_no]) {
      removeFav(food)
    } else {
      addFav(food)
    }
  }
  if (!foods.length) return null
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Qty</TableCell>
            <TableCell>Unit</TableCell>
            <TableCell>Food</TableCell>
            <TableCell>Calories</TableCell>
            <TableCell>Weight</TableCell>
            <TableCell>Food group</TableCell>
            <TableCell>Fav</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {foods.map((food) => {
            const {
              ndb_no,
              photo,
              food_name,
              tags,
              serving_qty,
              serving_unit,
              serving_weight_grams,
              nf_calories
            } = food
            return (
              <TableRow key={ndb_no}>
                <TableCell>
                  <img src={photo.thumb} alt={food_name} />
                </TableCell>
                <TableCell align="right">{serving_qty}</TableCell>
                <TableCell>{serving_unit}</TableCell>
                <TableCell>{food_name}</TableCell>
                <TableCell>{nf_calories} kcal</TableCell>
                <TableCell>{serving_weight_grams} g</TableCell>
                <TableCell>{tags.food_group}</TableCell>
                <TableCell onClick={favClicked(food)}>
                  {favourites[ndb_no] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

FoodTable.propTypes = {
  foods: PropTypes.arrayOf(
    PropTypes.shape({
      ndb_no: PropTypes.number.isRequired,
      food_name: PropTypes.string.isRequired,
      serving_qty: PropTypes.number.isRequired,
      serving_unit: PropTypes.string.isRequired,
      nf_calories: PropTypes.number.isRequired,
      serving_weight_grams: PropTypes.number.isRequired,
      photo: PropTypes.shape({
        thumb: PropTypes.string.isRequired
      }).isRequired,
      tags: PropTypes.shape({
        food_group: PropTypes.number.isRequired
      }).isRequired
    })
  ),
  favourites: PropTypes.object.isRequired,
  addFav: PropTypes.func.isRequired,
  removeFav: PropTypes.func.isRequired
}

export default FoodTable
