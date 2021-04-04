import Header from './components/Header'
import Intro from './components/Intro'
import People from './components/People'
import Footer from './components/Footer'
import Resume from './components/Resume'
import Skills from './components/Skills'

export default function Home() {
  return (
    <>

      <Header/>
      <Intro/>

      <main>
        <Skills/>
        <People/>
        <Resume/>
      </main>

      <Footer siteTitle="Leroy Rosales"/>
    </>
  )
}
