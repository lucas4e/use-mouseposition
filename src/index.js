import { useEffect, useState, useRef } from 'react'

export const useMousePosition = (documentRef, toggleOn) => {
  
  let doc = useRef(window)

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  const [mousePressed, setMousePressed] = useState(false)
  const w = doc.current.clientWidth
  const h = doc.current.clientHeight
  
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.type === 'mousedown' || toggleOn === true) {
        setMousePressed(true)
      } else {
        setMousePressed(false)
      }
    }
    if (toggleOn === true) {
      doc.current.addEventListener('mousemove', handleKeyPress)
    } else {
      doc.current.addEventListener('mouseup', handleKeyPress)
      doc.current.addEventListener('mousedown', handleKeyPress)
    }

    return () => {
      if (toggleOn === true) {
        doc.current.removeEventListener('mousemove', handleKeyPress)
      } else {
        doc.current.removeEventListener('mousedown', handleKeyPress)
        doc.current.removeEventListener('mouseup', handleKeyPress)
      }
    }
  }, [])
  
  
  useEffect(() => {
    const setFromEvent = (e) => {
      if (mousePressed === true ) {
        if (doc === window) {
          setPosition({ x: e.clientX, y: e.clientY })
        } else {
          const rect = doc.getBoundingClientRect
          console.log(rect)
        }
      }
    }
    doc.current.addEventListener('mousemove', setFromEvent)
    return () => {
      doc.current.removeEventListener('mousemove', setFromEvent)
    }
  }, [mousePressed])
  
  const setConstraints = () => {
    
    if (position.x > w) {
      setPosition({...position, x: w})
    }
    
    if (position.x < 0) {
      setPosition({...position, x: 0})
    }
    
    if (position.y > h) {
      setPosition({...position, y: h})
    }
    
    if (position.y < 0) {
      setPosition({...position, y: 0})
    }
  }

  const getEl = () => {
    try {
      documentRef ? doc.current = documentRef : doc.current = window
    } catch (e) {
      return console.log(e.message)
    }
  }

  setConstraints()
  getEl()

  return position
}
