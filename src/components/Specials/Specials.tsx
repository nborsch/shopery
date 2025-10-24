import React from "react";
import classes from "./Specials.module.css";
import Button from "../Button/Button";
import { FaArrowRightLong } from "react-icons/fa6";

function setPeriod() {
  const interval = new Date(2025, 10, 0).getTime() - Date.now();
  return Math.floor(interval / 1000);
}

export default function Specials() {
  const [timer, setTimer] = React.useState<number>(() => setPeriod());

  React.useEffect(() => {
    let countdown = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime === 0) {
          clearInterval(countdown);
          return 0;
        } else return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const days = Math.floor(timer / (60 * 60 * 24));
  const hours = Math.floor((timer % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((timer % 3600) / 60);
  const seconds = timer % 60;

  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <span className={classes.subtitle}>Best deals</span>
        <h2 className={classes.title}>Our Specials of the Month</h2>
        <div className={classes.countdown}>
          <div className={classes.numbers}>{`${days}`.padStart(2, "0")}</div>
          <div className={classes.dividers}>:</div>
          <div className={classes.numbers}>{`${hours}`.padStart(2, "0")}</div>
          <div className={classes.dividers}>:</div>
          <div className={classes.numbers}>{`${minutes}`.padStart(2, "0")}</div>
          <div className={classes.dividers}>:</div>
          <div className={classes.numbers}>{`${seconds}`.padStart(2, "0")}</div>
          <div className={classes.time}>Days</div>
          <div className={classes.time}>Hours</div>
          <div className={classes.time}>Mins</div>
          <div className={classes.time}>Secs</div>
        </div>
        <Button>
          Shop now <FaArrowRightLong />
        </Button>
      </div>
      <img className={classes.img} src="/img/home-specials.png" />
    </div>
  );
}
