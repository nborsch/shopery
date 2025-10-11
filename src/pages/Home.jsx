import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import MainFeatures from "../components/MainFeatures/MainFeatures"
import MainFeature from "../components/MainFeatures/MainFeature"
import MainHighlights from "../components/MainHighlights/MainHighlights"
import MainHighlight from "../components/MainHighlights/MainHighlight"
import Intro from "../components/Intro/Intro"
import Highlights from "../components/Highlights/Highlights"
import Specials from "../components/Specials/Specials"

export default function Home(){

  return (
    <>
      <Header />
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
        <h1>Hello World</h1>
      </main>
      <Footer />
    </>
  )
}