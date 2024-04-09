import React, { useContext } from 'react'
import { ThemeContext, themes } from '../../contexts/theme-context'
import { Button } from '../button/Button.jsx'

export function AddMoreButton({ onClick }) {

  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div>
      <Button onClick={onClick}>Click to load more</Button>
    </div>
  )
}
