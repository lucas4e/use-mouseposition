# use-mouseposition

> Get information about current mouse position on window

[![NPM](https://img.shields.io/npm/v/use-mouseposition.svg)](https://www.npmjs.com/package/use-mouseposition) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-mouseposition
```

## Usage

```jsx
import React, from 'react'
import { useMousePosition } from 'use-mouseposition'

const App = () => {
  // OPTIONAL: Element which you want to use the hook on.
  // Not passing an element as argument will make the hook target window.
  const doc = document.getElementById('exampleEl')

  // OPTIONAL: Setting toggleOn to true will make the hook return its values on mouse movement.
  // Not passing this as an argument will make the hook only return its values when the user holds down the left mousebutton.
  let toggleOn = true

  // Create the hook reference. First argument must always be the document to target the hook on.
  // If you wish to target window with the hook returning mouse position on toggle, set first argument to be window and second argument a true boolean.
  // Passing no arguments will make the hook target window and return mouse position on hold.
  const example = useMousePosition(doc, toggleOn)

  // The hook returns an x and y value, desctructuring the variable is optional.
  const { x, y } = example

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
```

## License

MIT © [lucasersson](https://github.com/lucasersson)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
