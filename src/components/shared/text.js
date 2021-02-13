import styled from 'styled-components'

import { marginPadding, bold } from './mixins'

const Text = styled.div`
  ${({ display }) => display && `display:${display};`}
  ${({ color }) => color && `color:${color};`}
  ${({ size }) => size && `font-size: ${size}px;`}
  
  ${bold}
  ${marginPadding}
`

export default Text
