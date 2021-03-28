import React from 'react'
import PropTypes from 'prop-types'
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography
} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'

const Favourites = ({ favourites, favList, removeFav }) => {
  return (
    <Card>
      <CardHeader
        title={
          <Typography>
            <FavoriteIcon /> Favourites
          </Typography>
        }
        subheader={`${favList.length} items`}
      />
      <CardContent>
        <List>
          {favList.map((id) => {
            const food = favourites[id]
            const { ndb_no, food_name, photo } = food
            return (
              <ListItem key={ndb_no}>
                <ListItemAvatar>
                  <Avatar alt={food_name} src={photo.thumb} />
                </ListItemAvatar>
                <ListItemText primary={food_name} />
                <ListItemSecondaryAction>
                  <IconButton onClick={() => removeFav(food)}>
                    <FavoriteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )
          })}
        </List>
      </CardContent>
    </Card>
  )
}

Favourites.propTypes = {
  favourites: PropTypes.object.isRequired,
  favList: PropTypes.arrayOf(PropTypes.number).isRequired,
  removeFav: PropTypes.func.isRequired
}

export default Favourites
