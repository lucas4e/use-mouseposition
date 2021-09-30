import React from 'react'
import { useMousePosition } from 'use-mouseposition'

const App = () => {
  const doc = document.getElementById('exampleEl')
  const example = useMousePosition(doc)
  const {x, y} = example

  const style = {
    width: '200px',
    height: '200px',
    border: '2px solid black'

  }

  return (
    <div>
      {`X: ${x}, Y: ${y}`}
      <div id='exampleEl' style={style} />
    </div>
  )
}
export default App
