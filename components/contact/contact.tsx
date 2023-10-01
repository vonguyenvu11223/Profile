import styles from './contact.module.scss';

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Contact Me</h1>
            <div className={styles.logo}>
                <a href="https://www.instagram.com/uv.neyugn_/" rel="noopener noreferrer" target="_blank">
                    <img src="https://www.danieltruongg.com/linkedin.svg" alt="" />
                </a>
                <a href="https://github.com/vonguyenvu11223" rel="noopener noreferrer" target="_blank">
                    <img src="https://www.danieltruongg.com/github.svg" alt="" />
                </a>
                <a href="https://www.instagram.com/uv.neyugn_/" rel="noopener noreferrer" target="_blank">
                    <img src="https://www.danieltruongg.com/linkedin.svg" alt="" />
                </a>
                <a href="https://mail.google.com/mail/u/0/#inbox" rel="noopener noreferrer" target="_blank">
                    <img src="https://www.danieltruongg.com/email.svg" alt="" />
                </a>
            </div>
            <div className={styles.text}>
                <p>Designed and made with 💙 by Nguyen vu</p>
                <p>@2023</p>
            </div>
        </div>
    )
}

export default Contact