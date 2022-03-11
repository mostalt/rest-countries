import React from 'react'
import styled from 'styled-components'

import { Header } from '../Header'

const Wrapper = styled.div`
  min-height: 100vh;
`
interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  )
}