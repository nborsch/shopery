import React from "react"
import classes from "./Search.module.css"

export default function Search(){

    return <>
        <form className={classes.headerMidForm}>
            <input className={classes.headerMidInput} placeholder="Search" />
            <button className={classes.headerMidButton}>Search</button>
        </form>
    </>
}