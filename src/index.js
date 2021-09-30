import { useEffect, useState, useRef } from 'react'

export const useMousePosition = (documentRef) => {
  
  let doc = useRef(window)

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  const [mousePressed, setMousePressed] = useState(false)
  const w = doc.current.width
  const h = doc.current.height

  
  
  
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.type === 'mousedown') {
        setMousePressed(true)
      } else {
        setMousePressed(false)
      }
    }
    doc.current.addEventListener('mouseup', handleKeyPress)
    doc.current.addEventListener('mousedown', handleKeyPress)
    return () => {
      doc.current.removeEventListener('mousedown', handleKeyPress)
      doc.current.removeEventListener('mouseup', handleKeyPress)
    }
  }, [])
  
  
  useEffect(() => {
    const setFromEvent = (e) => {
      if (mousePressed === true) {
        setPosition({ x: e.clientX, y: e.clientY })
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
