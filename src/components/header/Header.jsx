/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Feature,
  Text,
  FeatureCallOut,
  Link,
  Group,
  Profile,
  Picture,
  Dropdown,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
} from './header.styles'

export const Header = ({ bg = true, children, ...restProps }) => {
  return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Frame = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>
}

Header.Logo = ({ to, ...restProps }) => {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  )
}

Header.ButtonLink = ({ children, ...restProps }) => {
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Feature = ({ children, ...restProps }) => {
  return <Feature {...restProps}>{children}</Feature>
}

Header.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>
}

Header.FeatureCallOut = ({ children, ...restProps }) => {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.TextLink = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>
}

Header.Group = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>
}

Header.Profile = ({ children, ...restProps }) => {
  return <Profile {...restProps}>{children}</Profile>
}

Header.Picture = ({ src, ...restProps }) => {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />
}

Header.Dropdown = ({ children, ...restProps }) => {
  return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Search = ({ searchTerm, setSearchTerm, ...restProps }) => {
  const [searchActive, setSearchActive] = useState(false)
  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src='/images/icons/search.png' alt='search' />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target: { value } }) => setSearchTerm(value)}
        placeholder='nice'
        active={searchActive}
      />
    </Search>
  )
}

Header.PlayButton = ({ children, ...restProps }) => {
  return <PlayButton {...restProps}>{children}</PlayButton>
}
