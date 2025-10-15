import React from "react"
import classes from "./MainArticle.module.css"
import { FaArrowRightLong } from "react-icons/fa6"

export default function MainArticle(){

    return (
      <article className={classes.container}>
        <img src="/img/temp-blog.png" />
        <h3 className={classes.title}>
          Curabitur porttitor orci eget neque accumsan venenatis.
        </h3>
        <p>
          Nulla libero lorem, euismod venenatis nibh sed, sodales dictum ex. Etiam nisi augue, malesuada et pulvinar at, posuere eu neque.
        </p>
        <a className={classes.link} href="">Read more <FaArrowRightLong /></a>
      </article>
    )
}