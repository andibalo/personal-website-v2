import React, { useState, createContext } from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import { FaTimes } from "@react-icons/all-files/fa/FaTimes"

const StyledSnackBar = styled.div`
  .snackbar {
    min-width: 300px;
    max-width: 600px;
    background-color: ${({ bgColor }) => bgColor || "#00e676"};
    border-radius: var(--border-radius);
  }

  .snackbar-wrapper {
    display: flex;
    align-items: center;
    margin: 8px;
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1;
    transition: opacity 150ms, transform 150ms;
    pointer-events: none;
    bottom: 15px;
    justify-content: center;
  }
`
export const defaultDuration = 5000
export const defaultInterval = 250
export const defaultType = "success"
export const SnackbarContext = createContext(null)

const SnackBar = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [duration, setDuration] = useState(defaultDuration)
  const [text, setText] = useState("")
  const [timeoutId, setTimeoutId] = useState("")
  const [type, setType] = useState(defaultType)

  const triggerSnackbar = (text, type, duration) => {
    setDuration(duration)
    setText(text)
    setType(type)
    setOpen(true)
  }

  const openSnackbar = (text, type, duration) => {
    if (open) {
      setOpen(false)

      setTimeout(() => triggerSnackbar(text, type, duration), defaultInterval)

      return
    }

    triggerSnackbar(text, type, duration)
  }

  const closeSnackbar = () => {
    setOpen(false)
  }

  const resolveSnackbarBg = () => {
    switch (type) {
      case "success":
        return "#00e676"
      case "danger":
        return "#ff3d00"
      default:
        return "#00e676"
    }
  }

  return (
    <SnackbarContext.Provider value={{ openSnackbar, closeSnackbar }}>
      {children}
      <StyledSnackBar bgColor={resolveSnackbarBg}>
        <CSSTransition
          in={open}
          timeout={150}
          mountOnEnter
          unmountOnExit
          onEnter={() => {
            clearTimeout(timeoutId)
            setTimeoutId(
              setTimeout(() => {
                setOpen(false)
              }, duration)
            )
          }}
          className="snackbar-wrapper "
          classNames={{
            enter: `snackbar-enter snackbar-enter-bottom-center`,
            enterActive: `snackbar-enter-active snackbar-enter-active-bottom-center`,
            exitActive: `snackbar-exit-active snackbar-exit-active-bottom-center`,
          }}
        >
          <div>
            <div className="snackbar shadow-xl  p-3 flex items-center">
              <div className="snackbarText text-sm text-white mr-5 ">
                {text}
              </div>
              <div className="snackbarClose ml-auto">
                <FaTimes
                  className="pointer-events-auto text-lg cursor-pointer"
                  onClick={closeSnackbar}
                />
              </div>
            </div>
          </div>
        </CSSTransition>
      </StyledSnackBar>
    </SnackbarContext.Provider>
  )
}

export default SnackBar
