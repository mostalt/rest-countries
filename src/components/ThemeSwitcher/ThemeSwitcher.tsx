import React from 'react'
import styled from 'styled-components'
import { IoMoonOutline } from "react-icons/io5";

import { ThemeContext } from '../../services/theme'
import { devices } from '../../media'
import { noop } from '../../utils/noop'

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  color: ${({ theme }) => theme.textColor};
  font-size: 16px;
  transition: opacity 0.25s ease-in-out;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media ${devices.mobile} {
    font-size: 12px;
  }
`

const Label = styled.div`
  margin-left: 5px;
`

interface ThemeSwitcherProps {
  onClick?: () => void
}

const ThemeSwitcherView = ({ onClick = noop }: ThemeSwitcherProps) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <IoMoonOutline style={{ fill: 'currentColor' }} />
      <Label>Dark Mode</Label>
    </ButtonWrapper>
  )
}

export const ThemeSwitcher = () => (
  <ThemeContext.Consumer>
    {({ toggleTheme }) => (
      <ThemeSwitcherView onClick={toggleTheme} />
    )}
  </ThemeContext.Consumer>
)