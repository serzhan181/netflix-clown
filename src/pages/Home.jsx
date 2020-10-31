import React from 'react'
import { OptForm, Feature } from '../components'
import { HeaderContainer } from './../containers/Header.container'
import { JumbotronContainer } from './../containers/Jumbotron.container'
import { AccordionContainer } from './../containers/Accordion.container'
import { FooterContainer } from './../containers/Footer.container'

export const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anytime. Cancel at any time.
          </Feature.SubTitle>

          <OptForm>
            <OptForm.Input placeholder='Email address' />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  )
}
