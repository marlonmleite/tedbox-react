import React from 'react'
import { ButtonStyled } from './style'

function Example2() {
  return (
    <ButtonStyled color="secondary" variant="contained" onClick={console.log}>
      My button
    </ButtonStyled>
  )
}

export default Example2
