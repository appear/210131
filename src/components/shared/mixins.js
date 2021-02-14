import { css } from 'styled-components'

export const marginPadding = css`
  ${({ margin }) => margin && `margin:${margin};`}
  ${({ padding }) => padding && `padding:${padding};`}
`

export const centered = css`
  ${({ centered }) => centered && `margin: 0 auto;`}
`

export const bold = css`
  ${({ bold }) => bold && `font-weight: bold;`}
`
