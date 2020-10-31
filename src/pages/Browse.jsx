import React from 'react'
import { BrowserContainer } from '../containers/BrowserContainer'
import { useContent } from '../hooks/use-content'
import { selectionFilter } from '../utils/selectionFilter'

export const Browse = () => {
  const { series } = useContent('series')
  const { films } = useContent('films')

  const slides = selectionFilter({ series, films })

  return <BrowserContainer slides={slides} />
}
