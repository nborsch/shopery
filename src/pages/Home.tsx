import MainFeatures from "../components/MainFeatures/MainFeatures"
import MainFeature from "../components/MainFeatures/MainFeature"
import MainHighlights from "../components/MainHighlights/MainHighlights"
import MainHighlight from "../components/MainHighlights/MainHighlight"
import { mainHighlightsCopy } from "../components/MainHighlights/MainHighlightsCopy"
import Intro from "../components/Intro/Intro"
import Highlights from "../components/Highlights/Highlights"
import Specials from "../components/Specials/Specials"
import Featured from "../components/Featured/Featured"
import Testimonials from "../components/Testimonials/Testimonials"
import MainVideo from "../components/MainVideo/MainVideo"
import MainBlog from "../components/MainBlog/MainBlog"

export default function Home() {
  return (
    <main>
      <MainFeatures>
        <MainFeature />
      </MainFeatures>
      <MainHighlights>
        {mainHighlightsCopy.map((mainHighlight, index) => {
          return <MainHighlight copy={mainHighlight} key={index} />
        })}
      </MainHighlights>
      <Intro />
      <Highlights />
      <Specials />
      <Featured />
      <Testimonials />
      <MainVideo />
      <MainBlog />
    </main>
  )
}
