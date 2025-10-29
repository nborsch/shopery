import React from "react"
import classes from "./MainArticle.module.css"
import { FaArrowRightLong } from "react-icons/fa6"

export type BlogPost = {
  id: number
  dateCreated: string
  title: string
  content: string
  imageUrl: string
  category: string
  tags: string[]
  lastUpdated: string
}

export default function MainArticle({ post }: { post: BlogPost }) {
  return (
    <article className={classes.container}>
      <img className={classes.img} src={post.imageUrl} />
      <h3 className={classes.title}>{post.title}</h3>
      <p>{post.content.slice(0, 100)}</p>
      <a className={classes.link} href="">
        Read more <FaArrowRightLong />
      </a>
    </article>
  )
}
