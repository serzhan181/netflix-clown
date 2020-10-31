import React from 'react'
import { Header } from '../components'
import logo from '../logo.svg'

export const HeaderContainer = ({ children }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to='/' src={logo} alt='netflix' />
        <Header.ButtonLink to='/signin'>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  )
}
