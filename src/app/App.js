import { Container } from '@material-ui/core'
import React from 'react'

import Header from '../components/Header/Header'

function App() {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">{/* <NutrientsContainer /> */}</Container>
    </div>
  )
}

export default App
