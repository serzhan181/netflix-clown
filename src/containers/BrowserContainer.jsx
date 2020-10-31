import React, { useContext, useEffect, useState } from 'react'
import Fuse from 'fuse.js'
import { SelectProfileContainer } from './Profiles'
import { FirebaseContext } from '../context/firebase'
import { Loading, Header, Card, Player } from '../components'
import { FooterContainer } from '../containers/Footer.container'
import logo from '../logo.svg'

export const BrowserContainer = ({ slides }) => {
  const [category, setCategory] = useState('series')
  const [slideRows, setSlideRows] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const { firebase } = useContext(FirebaseContext)
  const user = firebase.auth().currentUser || {}
  const [profile, setProfile] = useState({})

  const [loading, setLoading] = useState(true)
  // console.log('slides: ', slides)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    })
  }, [profile.displayName])

  useEffect(() => {
    setSlideRows(slides[category])
  }, [slides, category])

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ['data.description', 'data.title', 'data.genre'],
    })

    const results = fuse.search(searchTerm).map(({ item }) => item)

    if (slideRows.length > 0 && searchTerm && results.length > 0) {
      setSlideRows(results)
    } else {
      setSlideRows(slides[category])
    }
  }, [searchTerm])

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header src='joker1' dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to='/' src={logo} alt='netflix' />
            <Header.TextLink
              onClick={() => setCategory('series')}
              active={category === 'series' ? 'true' : 'false'}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              onClick={() => setCategory('films')}
              active={category === 'films' ? 'true' : 'false'}
            >
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now.</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gothan City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the workd
            around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((item) => (
          <Card key={`${category}-${item.title.toLowerCase()}`}>
            <Card.Title>{item.title}</Card.Title>
            <Card.Entities>
              {item.data.map((cardItem) => (
                <Card.Item key={cardItem.docId} item={cardItem}>
                  <Card.Image
                    src={`/images/${category}/${cardItem.genre}/${cardItem.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{cardItem.title}</Card.SubTitle>
                    <Card.Text>{cardItem.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src='/videos/bunny.mp4' />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  )
}
