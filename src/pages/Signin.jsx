import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../context/firebase'
import { useHistory } from 'react-router-dom'
import { HeaderContainer } from '../containers/Header.container'
import { FooterContainer } from '../containers/Footer.container'
import { Form } from '../components'

export const Signin = () => {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)

  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isInvalid =
    emailAddress === '' || password === '' || password.length < 6

  const handleSubmit = (e) => {
    e.preventDefault()

    firebase
      .auth()

      .signInWithEmailAndPassword(emailAddress, password)

      .then(() => {
        history.push('/browse')
      })

      .catch((err) => {
        setEmailAddress('')
        setPassword('')
        setError(err.message)
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSubmit} method='POST' netlify>
            <Form.Input
              placeholder='Email address'
              value={emailAddress}
              onChange={({ target: { value } }) => setEmailAddress(value)}
            />
            <Form.Input
              type='password'
              autoComplete='off'
              placeholder='Password'
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
            />
            <Form.Submit disabled={isInvalid} type='submit'>
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix?
            <Form.Link to='/signup'> Sign Up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>This page is protected by reCAPTCHA.</Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
