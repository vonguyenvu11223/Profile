import styles from './text.module.scss'
import { useEffect, useState } from 'react';

const Text4 = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setActive(true);
        }, 200);
    }, [])
    return (
        <div className={styles.container}>
            <div className={`${styles.textContainer} ${active && styles.active}`}>
                <h1>Data Science Research Assistant <span>@California State Fullerton</span></h1>
                <p>May 2023 - Aug 2023</p>
                <h3>💙 Researched about Data Science, Machine Learning concepts such as Linear Regression, K-Means Clustering, Random Forests,...</h3>
                <h3>💙 Developed a Spotify Songs Recommendation System with K-Means and content-based filtering with optimal number of clusters through Elbow Method, Silhouette Number enhancing result outcome by 50%</h3>
            </div>
        </div>
    )
}

export default Text4