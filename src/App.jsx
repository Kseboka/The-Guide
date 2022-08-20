import React, { useState, useEffect } from 'react'

import './App.css'
import Channels from './components/Channels'
import Footer from './components/Footer'
import Window from './components/Window'

import { channels } from './data'

const App = () => {
  const [category, setCategory] = useState('All')
  const [newChannels, setChannels] = useState(channels)

  useEffect(() => {
    setChannels(
      channels.filter((channel) => {
        if (category === 'All') return channel
        else return channel.category === category
      })
    )
  }, [category])

  const handleChange = (e) => {
    const { value } = e.target

    setCategory(value)
  }

  return (
    <div className='App'>
      <Window handleChange={handleChange} category={category}>
        <Channels channels={newChannels} />
      </Window>
      <Footer />
    </div>
  )
}

export default App
