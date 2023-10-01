import styles from './introduction.module.scss'

const Introduction = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContent}>
                <h1 className={styles.title}>Xin chao,</h1>
                <h1>I'm <span className={styles.span}>Nguyen Vu</span></h1>
                <h3>CSUF'24 | Software Engineer | Graphic Designer</h3>
                <button className={styles.button}>My resume</button>
            </div>
        </div>
    )
}

export default Introduction