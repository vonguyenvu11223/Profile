import styles from './text.module.scss'
import { useEffect, useState } from 'react';

const Text2 = () => {

    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setActive(true);
        }, 200);
    }, [])

    return (
        <div className={styles.container}>
            <div className={`${styles.textContainer} ${active && styles.active}`}>
                <h1>Vice President <span>@acmCSUF</span></h1>
                <p>May 2023 - Present</p>
                <h3>💙 Empowered a community of over 1000 tech enthusiasts as Vice President of ACM CSUF, fostering an inclusive and thriving tech club on campus.</h3>
                <h3>💙 Led the successful organization of FullyHacks, CSUF’s inaugural and largest in-person hackathon with more than 200 participants, providing a platform for students to showcase their innovation and coding prowess.</h3>
            </div>
        </div>
    )
}

export default Text2