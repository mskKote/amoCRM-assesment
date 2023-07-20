import styles from './page.module.css'
import { Footer, Header, Slide1Main, Slide2Customization, Slide3News } from '@/widgets'

const LandingPage = () =>
  <main className={styles.main}>
    <Header />
    <Slide1Main />
    <Slide2Customization />
    <Slide3News />
    <Footer />
  </main>

export default LandingPage