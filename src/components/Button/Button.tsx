import React from "react"
import classes from "./Button.module.css"
import clsx from "clsx"

export default function Button({
  children,
  type,
  className = "",
  onClick = () => {}
}: {
  children: React.ReactNode
  type: "button" | "submit" | "reset" | undefined
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button type={type} className={clsx(classes.button, className)} onClick={onClick}>
      <span className={classes.align}>{children}</span>
    </button>
  )
}
