import styles from './about.module.scss'

const About = () => {
    return (
        <div className={styles.container} id='about'>
            <h1>About</h1>
            <div className={styles.content}>
                <div className={styles.contentImg}>
                    <img src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/328456164_6029118150485599_7260745641509346722_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=L6CR68hLRsoAX9nr3T2&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfBAuPDZhPVB_oYIGvfe49CB5vxlOnbgWOQpAVcB4B7OIQ&oe=651F47D9" alt="IMAGE" />
                </div>
                <div className={styles.contentText}>
                    <p>I’m an international student from Vietnam who started programming back in 2020 and turned it into a hobby</p>
                    <p>My experience is mostly about full-stack development but I also explore other fields like Data Science & Machine Learning</p>
                    <p>Besides from programming, I also do mobile/web design, listen to music, go to the gym, and create content for my Youtube channel</p>
                </div>
            </div>
        </div>
    )
}

export default About