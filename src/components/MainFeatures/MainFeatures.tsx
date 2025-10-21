import React from "react"
import classes from "./MainFeatures.module.css"

export default function MainFeatures({children}:{children:React.JSX.Element}){

  return (
  <>
    <div className={classes.container}>
      {children}
    </div>
  </>
  )
}