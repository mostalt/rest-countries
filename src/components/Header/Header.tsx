import React from 'react'
import styled from 'styled-components'

import { ThemeSwitcher } from '../ThemeSwitcher'
import { devices } from '../../media'

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.elementColor};
  margin: 0;
  padding: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,.08);
`

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-weight: 800;

  @media ${devices.mobile} {
    font-size: 18px;
  }
`

const Container = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px 10px;
`

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Title>Where in the world?</Title>
        <ThemeSwitcher />
      </Container>
    </StyledHeader>
  )
}