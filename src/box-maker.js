import React, { useState } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  width: 100px;
  height: 30px;
  border: 1px solid;
`

const Box = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid;

  ${(props) => {
    return `background-color: ${props.color};`
  }}
`

function BoxMaker() {
  const [color, setColor] = useState('#fff')

  const handleColor = (event) => {
    setColor(event.target.value)
  }

  return (
    <div>
      <Input onChange={handleColor} />
      <Box color={color} />
    </div>
  )
}

export default BoxMaker
