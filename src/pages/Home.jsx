import MainFeatures from "../components/MainFeatures/MainFeatures"
import MainFeature from "../components/MainFeatures/MainFeature"
import MainHighlights from "../components/MainHighlights/MainHighlights"
import MainHighlight from "../components/MainHighlights/MainHighlight"
import Intro from "../components/Intro/Intro"
import Highlights from "../components/Highlights/Highlights"
import Specials from "../components/Specials/Specials"
import Featured from "../components/Featured/Featured"
import Testimonials from "../components/Testimonials/Testimonials"
import MainVideo from "../components/MainVideo/MainVideo"
import MainBlog from "../components/MainBlog/MainBlog"
import MainArticle from "../components/MainBlog/MainArticle"

export default function Home(){

  return (
    <main>
      <MainFeatures>
        <MainFeature />
      </MainFeatures>
      <MainHighlights>
        <MainHighlight />
        <MainHighlight />
        <MainHighlight />
        <MainHighlight />
      </MainHighlights>
      <Intro />
      <Highlights />
      <Specials />
      <Featured />
      <Testimonials />
      <MainVideo />
      <MainBlog>
        <MainArticle />
        <MainArticle />
        <MainArticle />
      </MainBlog>
    </main>
  )
}