import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../context/firebase'
import { useHistory } from 'react-router-dom'
import { HeaderContainer } from '../containers/Header.container'
import { FooterContainer } from '../containers/Footer.container'
import { Form } from '../components'

export const Signup = () => {
  const { firebase } = useContext(FirebaseContext)
  const history = useHistory()

  const [firstName, setFirstName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isInvalid =
    emailAddress === '' ||
    password === '' ||
    password.length < 6 ||
    firstName === ''

  const handleSignup = (e) => {
    e.preventDefault()

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => history.push('/browse'))
      })
      .catch((err) => {
        setFirstName('')
        setEmailAddress('')
        setPassword('')
        setError(err.message)
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form onSubmit={handleSignup}>
          <Form.Text>Sign Up</Form.Text>

          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base netlify>
            <Form.Input
              value={firstName}
              onChange={({ target: { value } }) => setFirstName(value)}
              placeholder='Firstname'
            />
            <Form.Input
              value={emailAddress}
              onChange={({ target: { value } }) => setEmailAddress(value)}
              placeholder='Email Address'
            />
            <Form.Input
              type='password'
              autocomplete='off'
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
              placeholder='password'
            />

            <Form.Submit
              disabled={isInvalid}
              type='submit'
              onClick={handleSignup}
            >
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already have an account?{' '}
            <Form.Link to='/signin'>Sign In.</Form.Link>
          </Form.Text>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
