import styles from './text.module.scss'
import { useEffect, useState } from 'react';

const Text1 = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setActive(true);
        }, 200);
    }, [])

    return (
        <div className={styles.container}>
            <div className={`${styles.textContainer} ${active && styles.active}`}>
                <h1>Student Research Fellow <span>@Amazon</span></h1>
                <p>Feb 2023 - Aug 2023</p>
                <h3>💙 Selected as one of 10 CSUF students for the prestigious Amazon Student Fellowship program, collaborating with a team of 4 fellow students and developed a transgender resource mobile web application from inception to completion, incorporating stakeholder interviews, research, and data collection.</h3>
                <h3>💙 Achieved 2nd place among 14 teams in the Engineering competition by CSUF, showcasing strong teamwork, communication, and coding skills.</h3>
            </div>
        </div>
    )
}

export default Text1