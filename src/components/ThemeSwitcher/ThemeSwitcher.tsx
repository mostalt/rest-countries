import React from 'react'

import { ThemeContext } from '../../themes'
import { noop } from '../../utils/noop'

interface ThemeSwitcherProps {
  onClick?: () => void
}

const ThemeSwitcherView = ({ onClick = noop }: ThemeSwitcherProps) => {
  return (
    <button onClick={onClick}>SWITCH</button>
  )
}

export const ThemeSwitcher = () => (
  <ThemeContext.Consumer>
    {({ toggleTheme }) => (
      <ThemeSwitcherView onClick={toggleTheme} />
    )}
  </ThemeContext.Consumer>
)
