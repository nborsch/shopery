import React from "react"
import classes from "./Filter.module.css"
import useToggle from "../../hooks/useToggle"
import { FaAngleUp, FaAngleDown } from "react-icons/fa6"

export default function Filter({
  label,
  children,
}: {
  label: string
  children: React.JSX.Element
}) {
  const [on, toggle] = useToggle()

  return (
    <div className={classes.filter}>
      <div onClick={toggle} className={classes.filterTitleContainer}>
        <h3 className={classes.filterTitle}>{label}</h3>
        {on ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      {on ? children : null}
    </div>
  )
}
