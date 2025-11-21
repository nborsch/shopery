import React from "react"
import classes from "./Button.module.css"
import clsx from "clsx"

export default function Button({
  children,
  type,
  className = "",
}: {
  children: React.ReactNode
  type: "button" | "submit" | "reset" | undefined
  className?: string
}) {
  return (
    <button type={type} className={clsx(classes.button, className)}>
      <span className={classes.align}>{children}</span>
    </button>
  )
}
