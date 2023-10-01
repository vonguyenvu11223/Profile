import { useEffect, useState } from 'react';
import styles from './text.module.scss'

const Text0 = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setActive(true);
        }, 200);
    }, [])

    return (
        <div className={styles.container}>
            <div className={`${styles.textContainer} ${active && styles.active}`}>
                <h1>SDE Intern <span>@Amazon Web Services (AWS)</span></h1>
                <p>May 2023 - Aug 2023</p>
                <h3>💙 Developed a monitoring dashboard, integrating it to an internal data analytics service to promptly detect several metrics, resulting in increasing the detection process by 80% and automate the data collection process entirely
                </h3>
                <h3>💙 Led the data transformation process using PySpark, AWS Glue, and AWS S3 to process 300 builds daily and prepare data for analysis and created dashboard with AWS QuickSight sourcing data from the internal datalake.</h3>
                <h3>💙 Key contributor to an organization-level project, a new internal service tool for doc writers. Pioneered the implementation of Kahn’s Algorithm to handle 9000+ entities data for a pivotal logic feature and collaborated with frontend engineers to develop the project’s UI using TypeScript.</h3>
            </div>
        </div>
    )
}

export default Text0