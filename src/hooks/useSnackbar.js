import { useContext } from "react"
import {
  SnackbarContext,
  defaultDuration,
  defaultType,
} from "../components/molecules/SnackBar"

const useSnackbar = () => {
  const { openSnackbar, closeSnackbar } = useContext(SnackbarContext)

  function open(text = "", type = defaultType, duration = defaultDuration) {
    openSnackbar(text, type, duration)
  }

  return [open, closeSnackbar]
}

export default useSnackbar
