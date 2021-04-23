import styles from './styles.module.scss'

export default function Player() {

    return (

        <div className={styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Tocando agora" />
                <strong>tocando agora</strong>
            </header>
            <div className={styles.emptyPlayer}>
                <strong>Selecione um podcast para ouvir</strong>
            </div>

            <footer className={styles.empty}>
                <div className={styles.progress}>
                    <span>00:00</span>
                    <div className={styles.slider}>
                    <div className={styles.emptySlyder}></div>
                    </div>
                    <span>00:00</span>
                </div>
                <div className={styles.buttons}>
                    <button type="button">
                        <img src="/shuffle.svg" alt="Embaralhar"/>
                    </button>
                    <button type="button">
                        <img src="/play-previous.svg" alt="tocar a anterior"/>
                    </button>
                    <button type="button" className={styles.playButton}>
                        <img src="/play.svg" alt="tocar"/>
                    </button>
                    <button type="button">
                        <img src="/play-next.svg" alt="tocar a próxima"/>
                    </button>
                    <button type="button">
                        <img src="/repeat.svg" alt="Repetir"/>
                    </button>
                </div>
            </footer>


        </div>

    )
}