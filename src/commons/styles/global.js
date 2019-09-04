import { createGlobalStyle } from 'styled-components'
import { getSpacing } from './mixing'

const globalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
  }

  html,
  body,
  #root {
    width: 100%;
    min-height: 100vh;
  }

  #root {
    display: flex;
  }

  ${getSpacing('margin', 'm')}
  ${getSpacing('padding', 'p')}
`

export default globalStyle
