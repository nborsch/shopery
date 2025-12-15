import React from "react"
import { Link, useLocation } from "react-router"
import classes from "./Breadcrumbs.module.css"
import { FaHouse } from "react-icons/fa6"

export default function Breadcrumbs() {
  const { pathname } = useLocation()
  let currentLink = ""

  React.useEffect(() => {}, [])

  const crumbs = pathname
    .split("/")
    .filter((crumb) => crumb != "")
    .map((crumb) => {
      if (Number(crumb) > 1000 && Number(crumb) <= 1060) {
        //fetch product name
      }
      currentLink += `/${crumb}`
      const name = crumb[0].toUpperCase() + crumb.slice(1)

      return (
        <Link to={currentLink} className={classes.link}>{`> ${name}`}</Link>
      )
    })

  return (
    <>
      <div className={classes.container}>
        <div className={classes.containerGradient}>
          <nav className={classes.breadcrumbs}>
            <Link to="/" className={classes.link}>
              <FaHouse size="24px" />
            </Link>
            {crumbs}
          </nav>
        </div>{" "}
        {/* containerGradient */}
      </div>{" "}
      {/* container */}
    </>
  )
}
