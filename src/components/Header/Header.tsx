import React from 'react'
import styled from 'styled-components'

import { ThemeSwitcher } from '../ThemeSwitcher'

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.elementColor};
  margin: 0;
  padding: 0;
`

const Title = styled.h1`
  margin: 0;
  padding: 0;
`

export const Header = () => {
  return (
    <StyledHeader>
      <Title>Where in the world?</Title>
      <ThemeSwitcher />
    </StyledHeader>
  )
}