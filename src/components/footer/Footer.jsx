import React from 'react';
import {
  Container,
  Column,
  Row,
  Link,
  Text,
  Title,
  Break,
} from './footer.styles';

export const Footer = ({ children, ...restProps }) => {
  return <Container>{children}</Container>;
};

Footer.Row = ({ children, ...restProps }) => (
  <Row {...restProps}>{children}</Row>
);

Footer.Column = ({ children, ...restProps }) => (
  <Column {...restProps}>{children}</Column>
);

Footer.Link = ({ children, ...restProps }) => (
  <Link {...restProps}>{children}</Link>
);

Footer.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Footer.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
);

Footer.Break = ({ children, ...restProps }) => (
  <Break {...restProps}>{children}</Break>
);
