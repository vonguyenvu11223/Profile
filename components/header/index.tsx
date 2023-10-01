'use client'
import styles from './header.module.scss'
import { Link } from 'react-scroll'

const Header = () => {
    return (
        <div className={styles.container}>
            <header className={styles.headerContainer}>
                <ul className={styles.ul}>
                    <li>
                        <Link to="project" spy={true} smooth={true} offset={-30} duration={900}>Projects</Link>
                    </li>
                    <li>
                        <Link to="about" spy={true} smooth={true} offset={-10} duration={900}>About</Link>
                    </li>
                    <li>
                        <Link to="experience" spy={true} smooth={true} offset={-30} duration={900}>Experience</Link>
                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true} offset={10} duration={900}>Contact</Link>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Header