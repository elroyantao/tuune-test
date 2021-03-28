import { Container } from '@material-ui/core'
import React from 'react'

import Header from '../components/Header/Header'
import FoodContainer from '../container/FoodContainer/FoodContainer'

function App() {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <FoodContainer />
      </Container>
    </div>
  )
}

export default App
