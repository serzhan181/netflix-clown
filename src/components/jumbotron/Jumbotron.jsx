import React from 'react'
import {Inner, Container, Title, SubTitle, Image, Pane, Item } from './jumbotron.styles'

export const Jumbotron = ({children ,direction, ...restProps}) => {
    return (
        <Item {...restProps}>
        <Inner direction={direction} >
           {children}
        </Inner>
        </Item>
    )
};


Jumbotron.Container = ({children, ...restProps}) => {
return <Container {...restProps}>{children}</Container>
};

Jumbotron.Title = ({children, ...restProps}) => {
    return <Title {...restProps}>{children}</Title>
};

Jumbotron.SubTitle = ({children, ...restProps}) => {
    return <SubTitle {...restProps}>{children}</SubTitle>
};

Jumbotron.Pane = ({children, ...restProps}) => {
    return <Pane {...restProps}>{children}</Pane>
};

Jumbotron.Image = ({ ...restProps}) => {
    return <Image {...restProps} />
};