import React from 'react'
import styled from 'styled-components'

const LayoutContainer = styled.div`
  background-color: hsl(207, 26%, 17%);
  min-height: 100vh;
  color: white;
`
interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      {children}
    </LayoutContainer>
  )
}