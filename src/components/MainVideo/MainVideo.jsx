import React from "react"
import classes from "./MainVideo.module.css"

const MainVideoBg = React.lazy(() => import("./MainVideoBg"))

export default function MainVideo(){

    return (
      <div className={classes.container}>
        <React.Suspense fallback={<>Loading...</>}>
          <MainVideoBg />
        </React.Suspense>
        <h2 className={classes.title}>We’re the Largest Organic Farm<br />in the World</h2>
        <div className={classes.bg}>

        </div>
      </div>
    )
}