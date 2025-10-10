import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import MainFeatures from "../components/MainFeatures/MainFeatures"
import MainFeature from "../components/MainFeatures/MainFeature"
import MainHighlights from "../components/MainHighlights/MainHighlights"
import MainHighlight from "../components/MainHighlights/MainHighlight"

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
        </MainHighlights>
        <h1>Hello World</h1>
      </main>
      <Footer />
    </>
  )
}