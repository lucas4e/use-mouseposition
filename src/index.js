import { useEffect, useState } from "react";

export const useMousePosition = (documentRef, toggleOn) => {
  const [mousePressed, setMousePressed] = useState(false)
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  let doc = window;
  let w;
  let h;

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.type === "mousedown" || toggleOn === true) {
        setMousePressed(true)
      } else {
        setMousePressed(false)
      }
    }
    if (toggleOn === true) {
      doc.addEventListener("mousemove", handleKeyPress)
    } else {
      doc.addEventListener("mouseup", handleKeyPress)
      doc.addEventListener("mousedown", handleKeyPress)
    }
    return () => {
      if (toggleOn === true) {
        doc.removeEventListener("mousemove", handleKeyPress)
      } else {
        doc.removeEventListener("mousedown", handleKeyPress)
        doc.removeEventListener("mouseup", handleKeyPress)
      }
    }
  }, [])

  useEffect(() => {
    const setFromEvent = (e) => {
      if (mousePressed === true) {
        if (doc === window) {
          setPosition({ x: e.clientX, y: e.clientY })
        } else {
          const rect = doc.getBoundingClientRect()
          const x = e.clientX - rect.x
          const y = e.clientY - rect.y
          setPosition({ x: Math.round(x), y: Math.round(y) })
        }
      }
    }
    doc.addEventListener("mousemove", setFromEvent)
    return () => {
      doc.removeEventListener("mousemove", setFromEvent)
    }
  }, [mousePressed])

  const setConstraints = () => {
    if (position.x > w) {
      setPosition({ ...position, x: w })
    }
    if (position.x < 0) {
      setPosition({ ...position, x: 0 })
    }
    if (position.y > h) {
      setPosition({ ...position, y: h })
    }
    if (position.y < 0) {
      setPosition({ ...position, y: 0 })
    }
  };

  if (typeof documentRef !== "object") {
    console.log("Invalid document reference datatype")
    doc = window
  }

  if (typeof toggleOn !== "boolean") {
    console.log("Invalid datatype for toggleOn")
    toggleOn = false
  }

  const getEl = () => {
    try {
      documentRef ? (doc = documentRef) : (doc = window)
      w = doc.innerWidth
      h = doc.innerHeight
    } catch (e) {
      return console.log(e.message)
    }
  };

  setConstraints()
  getEl()

  return position
};
