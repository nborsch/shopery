import React from "react"
import classes from "./MainBlog.module.css"

export default function MainBlog({children}){

    return (
      <div className={classes.container}>
        <h2 className={classes.title}>Latest News</h2>
        {children}
      </div>
    )
}