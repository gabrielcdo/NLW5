import { useContext, useEffect, useRef } from 'react'
import { playerContext } from '../../contexts/PlayerContext'
import styles from './styles.module.scss'
import Image from 'next/image'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
export default function Player() {

    const { episodeList, currentEpisodeIndex
        , isPlaying,
        togglePlay , setPlayingState } = useContext(playerContext)
    const episode = episodeList[currentEpisodeIndex]
    const audioRef = useRef<HTMLAudioElement>(null)

     useEffect(()=>{
         if(!audioRef.current){
             return;
         }
         if(isPlaying){
             audioRef.current.play();
         }
         else {
             audioRef.current.pause()
         }}, [isPlaying])
    return (


        <div className={styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Tocando agora" />
                <strong>tocando agora</strong>
            </header>

            {
                episode ? (
                    <div className={styles.currentEpisode}>
                        <Image
                            width={592}
                            height={592}
                            src={episode.thumbnail}
                            objectFit="cover" />
                        <strong>{episode.title}</strong>
                        <span>{episode.members}</span>
                    </div>

                ) : (
                        <div className={styles.emptyPlayer}>
                            <span>
                                selecione um podcast para ouvir
                </span>
                        </div>)
            }


            <footer className={episode ? styles.empty : ''}>
                <div className={styles.progress}>
                    <span>00:00</span>
                    <div className={styles.slider}>
                        {
                            episode ? (
                                <Slider
                                    trackStyle={{
                                        backgroundColor: '#04d361'
                                    }}
                                    railStyle={{
                                        backgroundColor: '#9f75ff'
                                    }}
                                    handleStyle={{
                                        borderColor: '#04d361',
                                        borderWidth: 4
                                    }} />
                            )
                                : (<div className={styles.emptySlyder}></div>)
                        }

                    </div>
                    <span>00:00</span>
                </div>

                {episode && (
                    <audio src={episode.url} autoPlay
                    ref={audioRef}
                    onPlay={
                        ()=> setPlayingState(true)
                    }
                    onPause={
                        ()=> setPlayingState(false)
                    }
                        />
                    

                )}
                <div className={styles.buttons}>
                    <button type="button" disabled={!episode}>
                        <img src="/shuffle.svg" alt="Embaralhar" />
                    </button>
                    <button type="button" disabled={!episode}>
                        <img src="/play-previous.svg" alt="tocar a anterior" />
                    </button>
                    <button type="button" className={styles.playButton} disabled={!episode}
                        onClick={togglePlay}>
                        {isPlaying ? <img src="/pause.svg" alt="pausar" /> : (<img src="/play.svg" alt="tocar" />)}
                    </button>
                    <button type="button" disabled={!episode}>
                        <img src="/play-next.svg" alt="tocar a próxima" />
                    </button>
                    <button type="button" disabled={!episode}>
                        <img src="/repeat.svg" alt="Repetir" />
                    </button>
                </div>
            </footer>


        </div>

    )
}