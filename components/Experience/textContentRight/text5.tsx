import styles from './text.module.scss'
import { useEffect, useState } from 'react';

const Text5 = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setActive(true);
        }, 200);
    }, [])
    return (
        <div className={styles.container}>
            <div className={`${styles.textContainer} ${active && styles.active}`}>
                <h1>Web Developer <span>@Titan Radio </span></h1>
                <p>May 2023 - Aug 2023</p>
                <h3>💙 Maintained website for CSUF radio station serves 35000 students per semester with HTML, CSS, JavaScript, PHP, Wordpress</h3>
                <h3>💙 Led the data transformation process using PySpark, AWS Glue, and AWS S3 to process 300 builds daily and prepare data for analysis and created dashboard with AWS QuickSight sourcing data from the internal datalake.</h3>
                <h3>💙 Mentored web design intern through Notion applying Scrum best practices to design website graphics, enhancing efficiency by 60%</h3>
            </div>
        </div>
    )
}

export default Text5