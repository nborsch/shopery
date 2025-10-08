import classes from "./Footer.module.css"
import Logo from "../Logo"
import NewsLetter from "../NewsLetter/Newsletter"
import Instagram from "../Instagram/Instagram"
import PhoneNumber from "../PhoneNumber"
import Email from "../Email"

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
          <div className={classes.footerBottomMidAbout}>
            <h3>About Shopery</h3>
            <p>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
            <PhoneNumber /> or <Email />
          </div>
          <nav className={classes.footerBottomMidLinks}>
            <div>
              My account
            </div>
            <div>
              Help
            </div>
            <div>
              Pages
            </div>
          </nav>
          <Instagram />
        </div>
        <div className={classes.footerBottomBottom}>
          Bottom
        </div>
      </div>
    </div>
  </footer>
  )
}