import React from 'react'
import { useMousePosition } from 'use-mouseposition'
import './app.css'

const App = () => {
  const doc = document.getElementById('exampleEl')
  const example = useMousePosition(doc)
  const {x, y} = example
  return (
    <div>
      {`X: ${x}, Y: ${y}`}
      <div id='exampleEl' />
    </div>
  )
}
export default App
