'use client'
import { useEffect, useState } from 'react'
import styles from './Experience.module.scss'
import Text0 from './textContentRight/text0'
import Text1 from './textContentRight/text1'
import Text2 from './textContentRight/text2'
import Text3 from './textContentRight/text3'
import Text4 from './textContentRight/text4'
import Text5 from './textContentRight/text5'
import Text6 from './textContentRight/text6'

const list = [
    'Amazon Web Services (AWS)',
    'Amazon',
    'acmCSUF',
    'Project RAISE CSUF',
    "California State Fullerton",
    'Titan Radio',
    ' Birdy Labs',
]

const Experience = () => {
    const [check, setCheck] = useState(0);
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setActive(true);
        }, 1000);
    }, [])

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Experience</h1>
            <div className={styles.contentContainer}>
                <div className={styles.contentLeft}>
                    <ul>
                        {list.map((item, index) => {
                            return (
                                <div key={index}>
                                    <li onClick={() => setCheck(index)} className={check === index ? styles.select : styles.li} >{item}</li >
                                </div>
                            )
                        })}
                    </ul>
                </div>
                <div className={styles.contentRight}>
                    <div>
                        {check === 0 ? <Text0 /> :
                            check === 1 ? <Text1 /> :
                                check === 2 ? <Text2 /> :
                                    check === 3 ? <Text3 /> :
                                        check === 4 ? <Text4 /> :
                                            check === 5 ? <Text5 /> :
                                                check === 6 ? <Text6 /> : "No data"
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Experience