import React from 'react'
import { LockBody, ReleaseBody, Spinner, Picture } from './loading.styles'

export const Loading = ({ src = 2, ...restProps }) => {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} data-testid='loading-picture' />
    </Spinner>
  )
}

Loading.ReleaseBody = () => {
  return <ReleaseBody />
}
