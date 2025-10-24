import React from "react"
import classes from "./Specials.module.css"
import Button from "../Button/Button"
import { FaArrowRightLong } from "react-icons/fa6"

export default function Specials(){
  const [timer, setTimer] = React.useState<number>(() => setPeriod())
  
  function setPeriod() {
    const interval = new Date(2025, 10, 0).getTime() - Date.now()
    return Math.floor((interval) / 1000)
  }

  React.useEffect(() => {
  
    let countdown = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime === 0) {
          clearInterval(countdown)
          return 0
        } else return prevTime - 1
      })
    }, 1000)

  }, [])

    return (
      <div className={classes.container}>
        <div className={classes.text}>
          <span className={classes.subtitle}>Best deals</span>
          <h2 className={classes.title}>Our Specials of the Month</h2>
          <div className={classes.countdown}>
            <div className={classes.numbers}>{`${Math.floor(timer / (60 * 60 * 24))}`.padStart(2, "0")}</div>
            <div className={classes.dividers}>:</div>
            <div className={classes.numbers}>{`${Math.floor((timer % (60 * 60 * 24)) / (60 * 60))}`.padStart(2, "0")}</div>
            <div className={classes.dividers}>:</div>
            <div className={classes.numbers}>{`${Math.floor((timer % 3600) / 60)}`.padStart(2, "0")}</div>
            <div className={classes.dividers}>:</div>
            <div className={classes.numbers}>{`${(timer % 60)}`.padStart(2, "0")}</div>
            <div className={classes.time}>Days</div>
            <div className={classes.time}>Hours</div>
            <div className={classes.time}>Mins</div>
            <div className={classes.time}>Secs</div>
          </div>
          <Button>Shop now <FaArrowRightLong /></Button>
        </div>
        <img className={classes.img} src="/img/home-specials.png" />
      </div>
    )
}