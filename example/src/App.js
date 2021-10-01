import React from 'react'
import { useMousePosition } from 'use-mouseposition'

const App = () => {
  let toggleOn = true
  const doc = document.getElementById('exampleEl')
  const example = useMousePosition(doc, toggleOn)
  const {x, y} = example

  const style = {
    width: '200px',
    height: '200px',
    border: '2px solid black'
  }

  return (
    <div>
      <div id='exampleEl' style={style} />
      {`X: ${x}, Y: ${y}`}
    </div>
  )
}
export default App
