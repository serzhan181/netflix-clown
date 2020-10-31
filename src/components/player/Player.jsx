/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useContext, createContext } from 'react'
import { createPortal } from 'react-dom'
import { Container, Button, Overlay, Inner } from './player.styles'

const PlayerContext = createContext()

export const Player = ({ children, ...restProps }) => {
  const [showPlayer, setShowPlayer] = useState(false)

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  )
}

Player.Video = ({ src, ...restProps }) => {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext)

  return showPlayer
    ? createPortal(
        <Overlay
          onClick={() => setShowPlayer(false)}
          data-testid='player'
          {...restProps}
        >
          <Inner>
            <video id='netflix-player' controls>
              <source src={src} type='video/mp4' />
            </video>
          </Inner>
        </Overlay>,
        document.body
      )
    : null
}

Player.Button = ({ ...restProps }) => {
  const { setShowPlayer } = useContext(PlayerContext)

  return (
    <Button
      onClick={() => setShowPlayer((showPlayer) => !showPlayer)}
      {...restProps}
    >
      Play
    </Button>
  )
}
