/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, createContext, useContext } from 'react'
import { Container, Inner, Title, Header, Body, Item } from './accordion.style'

export const Accordion = ({ children }) => {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  )
}

const ToggleShowContext = createContext()

Accordion.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}

Accordion.Item = ({ children, ...restProps }) => {
  const [toggleShow, setToggleShow] = useState(false)
  return (
    <ToggleShowContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleShowContext.Provider>
  )
}

Accordion.Header = ({ children, ...restProps }) => {
  const { toggleShow, setToggleShow } = useContext(ToggleShowContext)

  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restProps}
    >
      {children}
      {toggleShow ? (
        <img src='/images/icons/close-slim.png' alt='Close' />
      ) : (
        <img src='/images/icons/add.png' alt='Open' />
      )}
    </Header>
  )
}

Accordion.Body = ({ children, ...restProps }) => {
  const { toggleShow } = useContext(ToggleShowContext)

  return toggleShow ? <Body {...restProps}>{children}</Body> : null
}
