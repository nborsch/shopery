import React from "react"
import classes from "./MainVideo.module.css"

const MainVideoFootage = React.lazy(() => import("./MainVideoFootage"))

export default function MainVideo(){

    return (
      <div className={classes.bg}>
        <div className={classes.container}>
          <figure>
            <React.Suspense fallback={<>Loading...</>}>
              <MainVideoFootage />
            </React.Suspense>
          </figure>
          <figcaption>
            <h2 className={classes.title}>We’re the Largest Organic Farm in the World</h2>
          </figcaption>
          <div className={classes.videoBg}></div>
        </div>
      </div>
    )
}