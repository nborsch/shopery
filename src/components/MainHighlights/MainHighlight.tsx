import React from "react"
import classes from "./MainHighlight.module.css"
import type { MainHighlight } from "./MainHighlightsCopy"

export default function MainHighlight({ copy }: { copy: MainHighlight }) {
  return (
    <div className={classes.container}>
      <div className={classes.iconContainer}>
        <img src={copy.icon} />
      </div>
      <h3>{copy.title}</h3>
      <p className={classes.p}>{copy.desc}</p>
    </div>
  )
}
