import Link from "next/link"
import styles from './project.module.scss'
import Language from "./language"

interface Props {
    href: string
    src: string
    title: string
    desc: string
    language: string
}

const Item = (prop: Props) => {
    const { href, src, title, desc, language } = prop
    return (
        <Link className={styles.content} href={prop.href} rel="noopener noreferrer" target="_blank">
            <img src={prop.src} alt="" className={styles.img} />
            <div className={styles.itemContainer}>
                <h3 className={styles.h3}>{prop.title}</h3>
                <div className={styles.itemLists}>
                    {prop.language == '1' || prop.language == '2' ?
                        <>
                            <Language src='https://www.danieltruongg.com/nextjs.svg' language="Next.js" />
                            <Language src='https://www.danieltruongg.com/typescript.svg' language="Typescript" />
                            <Language src='https://www.danieltruongg.com/tailwind.svg' language="tailwindCSS" />
                            <Language src='https://www.danieltruongg.com/prisma.svg' language="Prisma" />
                            <Language src='https://www.danieltruongg.com/mongodb.svg' language="MongoDB" />
                        </>
                        :
                        prop.language == '3' ?
                            <>
                                <Language src='https://www.danieltruongg.com/python.svg' language="Python" />
                            </>
                            : prop.language == '4' ?
                                <>
                                    <Language src='https://www.danieltruongg.com/python.svg' language="Python" />
                                    <Language src='https://www.danieltruongg.com/pandas.svg' language="Pandas" />
                                </>
                                : prop.language == '5' ?
                                    <>
                                        <Language src='https://www.danieltruongg.com/mysql.svg' language="MySQL" />
                                    </>
                                    : prop.language == '6' ?
                                        <>
                                            <Language src='https://www.danieltruongg.com/swift.svg' language="Swift" />
                                        </> : 'no'
                    }
                </div>
                <p>{prop.desc}</p>
            </div>
        </Link>
    )
}

export default Item