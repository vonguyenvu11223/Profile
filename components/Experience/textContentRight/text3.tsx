import styles from './text.module.scss'
import { useEffect, useState } from 'react';

const Text3 = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setActive(true);
        }, 200);
    }, [])
    return (
        <div className={styles.container}>
            <div className={`${styles.textContainer} ${active && styles.active}`}>
                <h1>Peer Advisor <span>@Project RAISE CSUF</span></h1>
                <p>May 2022 - August 2022</p>
                <h3>May 2022 - August 2022</h3>
                <h3>💙 Participated in helping students with their undergraduate research program for Summer 2022 along with principal instructors</h3>
            </div>
        </div>
    )
}

export default Text3