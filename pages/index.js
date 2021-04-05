import Header from './components/Header'
import Intro from './components/Intro'
import People from './components/People'
import Footer from './components/Footer'
import Resume from './components/Resume'
import Skills from './components/Skills'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

export default function Home({ content, data }) {

  const frontmatter = data

  return (
    <>
      <Header/>
      <Intro/>

      <main>
      <ReactMarkdown source={content} />
        <People/>
        <Resume/>
      </main>

      <Footer siteTitle="Leroy Rosales"/>
    </>
  )
}


Home.getInitialProps = async () => {
  // Import our .md file
  const content = await import(`./skills/proficient.md`)

  // Parse .md data through `matter`
  const data = matter(content.default)

  // Pass data to our component props
  return { ...data }

}
