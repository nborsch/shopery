import React from "react"
import classes from "./MainBlog.module.css"
import MainArticle from "./MainArticle"
import type { BlogPost } from "./MainArticle"

export default function MainBlog() {
  const [mainPosts, setMainPosts] = React.useState<BlogPost[] | null>(null)

  React.useEffect(() => {
    async function getMainPosts() {
      try {
        const response = await fetch("http://localhost:3000/blog")
        if (!response.ok) {
          console.log("Couldn't connect")
          throw new Error("Couldn't connect")
        }
        const data = await response.json()
        data.reverse()
        const mainPostsData = data.slice(0, 3)
        setMainPosts(mainPostsData)
      } catch (err) {
        console.log(err)
      }
    }

    getMainPosts()
  }, [])

  const mainPostsEls = mainPosts
    ? mainPosts.map((post: BlogPost) => <MainArticle post={post} />)
    : null

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Latest News</h2>
      {mainPostsEls || <p>Loading...</p>}
    </div>
  )
}
