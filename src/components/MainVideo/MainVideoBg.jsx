import React from "react"
import classes from "./MainVideoBg.module.css"
import videoBg from "/img/home-farm.mp4"

export default function MainVideoBg(){

    return (
      <video autoPlay loop muted className={classes.video}>
        <source src={videoBg} type="video/mp4" />
      </video>
    )
}