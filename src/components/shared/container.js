import styled from 'styled-components'

import { marginPadding, centered } from './mixins'

const Container = styled.div`
  ${({ display }) => display && `display: ${display};`}
  ${({ position }) => position && `position: ${position};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}px;`}
  ${({ height }) => height && `height: ${height}px;`}
  ${({ background }) => background && `background:${background};`}

  ${centered}
  ${marginPadding}
`

export default Container
