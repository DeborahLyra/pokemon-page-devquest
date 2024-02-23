import React, { useContext } from 'react'
import { ThemeContext, themes } from '../../contexts/theme-context'
import { Button } from '../button/Button.jsx'

export function AddMoreButton() {

    const { theme, setTheme }  = useContext(ThemeContext)

  return (
    <div>
    <Button>Click to load more</Button>
  </div>
  )
}
