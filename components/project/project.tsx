'use client'
import Link from 'next/link'
import styles from './project.module.scss'
import img from '@/public/next-js.svg'
import Language from './language'
import Item from './item'

const Project = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Project</h1>
            <div className={styles.contentContainer}>
                <Item language='1' href='https://github.com/anhduy1202/fullyhacks' src="https://www.danieltruongg.com/_ipx/w_1920,q_75/%2Ffullyhacks.png?url=%2Ffullyhacks.png&w=1920&q=75" title="FullyHack 2023" desc="Full-stack hackathon website for CSUF, with application feature, atuthentication, user poral, user feed, admin portal,..." />
                <Item language='2' href="https://github.com/anhduy1202/wordcloud-vote" src="https://www.danieltruongg.com/_ipx/w_1920,q_75/%2Fwordcloud.png?url=%2Fwordcloud.png&w=1920&q=75" title="WordCloud Vote" desc="WordCloud Vote is a web-based application that provides a secure, anonymous, and transparent platform for online voting" />
                <Item language='3' href='https://github.com/anhduy1202/fullyhacks' src="https://www.danieltruongg.com/_ipx/w_1920,q_75/%2Fgameboy.png?url=%2Fgameboy.png&w=1920&q=75" title="Gameboy Simulator" desc="A PyQT desktop application to convert image /webcam to gameboy style applying Computer Vision, image procesing" />
                <Item language='4' href='https://github.com/anhduy1202/fullyhacks' src="https://www.danieltruongg.com/_ipx/w_1920,q_75/%2Fspotify_desktop.jpg?url=%2Fspotify_desktop.jpg&w=1920&q=75" title="Songs Recommendation System" desc="A Data Science and Machine Learning project for my Summer 2022 research to analyze Spotify hot songs from 2017 to 2022, and a recommendation system that suggest songs based on personal playlist" />
                <Item language='5' href='https://github.com/anhduy1202/fullyhacks' src="https://www.danieltruongg.com/_ipx/w_1920,q_75/%2Fdevwork_desktop.jpg?url=%2Fdevwork_desktop.jpg&w=1920&q=75" title="DevWork" desc="A MySQL Database for a job freelancing website that helps freelancing developers finding the appropriate client and get paid for their services" />
                <Item language='6' href='https://github.com/anhduy1202/fullyhacks' src="https://www.danieltruongg.com/_ipx/w_1920,q_75/%2Ftuffyfood_desktop.jpg?url=%2Ftuffyfood_desktop.jpg&w=1920&q=75" title="Tuffy Food" desc="An IOS food view app built with Swift, Swift Storyboard that helps CSUF students check out and submit reviews for food places at CSUF" />
            </div>
        </div>
    )
}

export default Project