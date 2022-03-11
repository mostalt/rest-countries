import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: hsl(0, 0%, 52%);
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
    </StyledHeader>
  )
}