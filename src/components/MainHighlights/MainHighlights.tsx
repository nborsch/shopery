import React from "react"
import classes from "./MainHighlights.module.css"

export default function MainHighlights({
  children,
}: {
  children: React.JSX.Element[]
}) {
  return (
    <div className={classes.bg}>
      <div className={classes.container}>{children}</div>
    </div>
  )
}
