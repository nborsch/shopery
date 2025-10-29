import React from "react"
import classes from "./Shop.module.css"

export default function Shop() {
  return (
    <div className={classes.container}>
      <aside className={classes.sidebar}>sidebar</aside>
      <main>
        <div className={classes.products}>produtos</div>
        <div className={classes.pagination}>pagination</div>
      </main>
    </div>
  )
}
