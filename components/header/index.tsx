'use client'
import styles from './header.module.scss'

const Header = () => {
    return (
        <div className={styles.container}>
            <header className={styles.headerContainer}>
                <ul className={styles.ul}>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Contact</li>
                </ul>
            </header>
        </div>
    )
}

export default Header