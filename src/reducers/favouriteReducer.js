export const initialFavourites = {
  entity: {},
  list: []
}

const favouriteReducer = (state, action) => {
  const { type, food } = action

  switch (type) {
    case 'ADD_FAVOURITE': {
      const list = state.entity[food.ndb_no] ? [...state.list] : [...state.list, food.ndb_no]
      return {
        ...state,
        entity: {
          ...state.entity,
          [food.ndb_no]: food
        },
        list
      }
    }
    case 'REMOVE_FAVOURITE': {
      const { [food.ndb_no]: existingFood, ...entity } = state.entity
      const list = state.list.filter((id) => id !== food.ndb_no)
      return {
        ...state,
        entity,
        list
      }
    }
    default:
      return state
  }
}

export default favouriteReducer
