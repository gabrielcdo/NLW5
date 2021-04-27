import Header from '../components/header'
import '../styles/global.scss'
import styles from '../styles/app.module.scss'
import Player from '../components/player'
import { playerContext } from '../contexts/PlayerContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  function play(episode) {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true)
  }
  const [isPlaying , setIsPlaying] = useState(false)

  function togglePlay (){
    setIsPlaying(!isPlaying)
  }

  function setPlayingState(state : boolean){
    setIsPlaying(state);
  }
  return (
    <playerContext.Provider value={{
      episodeList, currentEpisodeIndex , play , isPlaying , togglePlay , setPlayingState
    }}>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </playerContext.Provider>
  )
}

export default MyApp
