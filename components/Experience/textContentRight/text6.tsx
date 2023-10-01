import styles from './text.module.scss'
import { useEffect, useState } from 'react';

const Text6 = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setActive(true);
        }, 200);
    }, [])
    return (
        <div className={styles.container}>
            <div className={`${styles.textContainer} ${active && styles.active}`}>
                <h1>Software Engineer Intern <span>@Birdy Labs</span></h1>
                <p>Nov 2021 - Jan 2022</p>
                <h3>💙 Experimented with latest front-end technologies (Next.js, Redux, Tailwind CSS) as a part of implementation of high-volume appointment booking web app with more than 1000 weekly users</h3>
                <h3>💙 Constructed new and customisation of time-picker and appointment schedule, resulting in consistent deployment of 4 major products updates and boosted user engagements by 40%</h3>
            </div>
        </div>
    )
}

export default Text6