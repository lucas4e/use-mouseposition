import React from 'react'
import { useMousePosition } from 'use-mouseposition'

const App = () => {
  // OPTIONAL: Element which you want to use the hook on.
  // Not passing an element as argument will make the hook target window.
  const doc = document.getElementById('exampleEl')

  // OPTIONAL: Setting toggleOn to true will make the hook return its values on mouse movement.
  // Not passing this as an argument will make the hook only return its values when the user holds the mousebutton.
  let toggleOn = true

  // Create the hook reference.
  const example = useMousePosition(doc, toggleOn)

  // The hook returns an x and y value, desctructuring the variable is optional.
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
