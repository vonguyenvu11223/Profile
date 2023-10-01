import styles from './project.module.scss'

interface Props {
    src: string
    language: string
}

const Language = (prop: Props) => {
    const { src, language } = prop;
    return (
        <div className={styles.item}>
            <img src={prop.src} alt={prop.language} />
            <span>{prop.language}</span>
        </div>
    )
}

export default Language