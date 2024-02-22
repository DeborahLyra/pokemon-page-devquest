import React, { useContext } from 'react'
import { ThemeContext, themes } from '../../contexts/theme-context'
import { Button } from '../button/Button.jsx'

export function ThemeToggleButton() {

    const { theme, setTheme }  = useContext(ThemeContext)

  return (
    <div>
    <Button onClick = {()=> setTheme(theme === themes.light ? themes.dark : themes.light)}>{theme === themes.light ? "Dark Mode" : "Light Mode" }</Button>
  </div>
  )
}
