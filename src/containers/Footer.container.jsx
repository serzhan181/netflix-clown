import React from 'react'
import { Footer } from '../components'

export const FooterContainer = () => {
  return (
    <Footer>
      <Footer.Title>Question? How much money u got</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link
            href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            target='_blank'
          >
            FREE HACK FOR FORTNITE CLICK ME!
          </Footer.Link>
          <Footer.Link href='#'>Investor Relations</Footer.Link>
          <Footer.Link href='#'>Ways to Watch</Footer.Link>
          <Footer.Link href='#'>Coporate information</Footer.Link>
          <Footer.Link href='#'>Netflix Originals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href='#'>Help Centre</Footer.Link>
          <Footer.Link href='#'>Jobs</Footer.Link>
          <Footer.Link href='#'>Terms of Use</Footer.Link>
          <Footer.Link href='#'>Contact us</Footer.Link>
          <Footer.Link href='#'>Help</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href='#'>Media Centre</Footer.Link>
          <Footer.Link href='#'>Buy Gift Cards</Footer.Link>
          <Footer.Link href='#'>Cookie Preferences</Footer.Link>
          <Footer.Link href='#'>Coporate information</Footer.Link>
          <Footer.Link href='#'>Legal Notices</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href='#'>Account</Footer.Link>
          <Footer.Link href='#'>Redeem Gift Cards</Footer.Link>
          <Footer.Link href='#'>Privacy</Footer.Link>
          <Footer.Link href='#'>Speed Test</Footer.Link>
        </Footer.Column>
      </Footer.Row>

      <Footer.Text>Netflix Kazakhstan</Footer.Text>
    </Footer>
  )
}
