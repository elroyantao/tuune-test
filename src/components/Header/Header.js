import { AppBar, Container, Toolbar } from '@material-ui/core'
import React from 'react'

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>NUTRITION</Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
