import React from "react"
import Logo from "../Logo"
import classes from "./Newsletter.module.css"

export default function Newsletter() {
  function getEmail(formData: FormData) {
    const email = formData.get("email") as string
    sendEmail(email)
  }

  function sendEmail(email: string) {
    async function send() {
      try {
        const confirm = await fetch("http://localhost:3000/newsletter", {
          method: "POST",
        })
        if (!confirm) {
          return new Error("Could not submit form!")
        }
        console.log(email)
      } catch(err) {
        console.log(err)
      }
    }

    send()
  }

  return (
    <div className={classes.container}>
      <div className={classes.news}>
        <Logo width={225} />
        <div>
          <p className={classes.para}>Subscribe to our newletter</p>
          <span className={classes.span}>
            Pellentesque eu nibh eget mauris congue mattis matti.
          </span>
        </div>
        <div>
          <form action={getEmail}>
            <input
              name="email"
              placeholder="Your email"
              className={classes.input}
            />
            <button type="submit" className={classes.button}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
