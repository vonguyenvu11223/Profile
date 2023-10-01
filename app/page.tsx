import Image from 'next/image'
import styles from './page.module.scss'
import Introduction from '@/components/introduction/introduction'
import Experience from '@/components/Experience/Experience'
import Project from '@/components/project/project'
import About from '@/components/about/about'
import Contact from '@/components/contact/contact'

export default function Home() {
  return (
    <div className={styles.container}>
      <Introduction />
      <Experience />
      <Project />
      <About />
      <Contact />
    </div>
  )
}
