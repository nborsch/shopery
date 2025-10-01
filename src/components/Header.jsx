import React from "react"
import classes from "../App.module.css"
import Sign from "./Sign"

export default function Header(){

    return (
        <div className={classes.headerTop}>
            <div className={classes.headerTopContainer}>
                <div>
                    Store Location: 1234 Mardi Gras Lane, New Orleans LA 70112
                </div>
                <Sign />
            </div>
        </div> // headerTop
    )
}