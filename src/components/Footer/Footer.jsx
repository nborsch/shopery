import classes from "./Footer.module.css"
import Logo from "../Logo"
import NewsLetter from "../NewsLetter/Newsletter"

export default function Footer(){

  return (
  <footer>
    <div className={classes.footerNewsContainer}>
      <div className={classes.footerNews}>
        <Logo width={225} />
        <div>
          <p className={classes.footerNewsPara}>Subscribe to our newletter</p>
          <span className={classes.footerNewsSpan}>Pellentesque eu nibh eget mauris congue mattis matti.</span>
        </div>
        <div>
            <NewsLetter />
        </div>
        </div>
    </div>
    <div className={classes.footerBottomContainer}>
      <div className={classes.footerBottom}>
        <div className={classes.footerBottomMid}>
          Mid
        </div>
        <div className={classes.footerBottomBottom}>
          Bottom
        </div>
      </div>
    </div>
  </footer>
  )
}