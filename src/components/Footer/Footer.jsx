import { 
  FaFacebook, 
  FaSquareXTwitter, 
  FaPinterestP,
  FaInstagram,
  FaApplePay,
  FaCcVisa,
  FaCcDiscover,
  FaCcMastercard,

} from "react-icons/fa6"
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
              <h3>My account</h3>
              <ul>
                <li><a href="">Account</a></li>
                <li><a href="">Order history</a></li>
                <li><a href="">Shopping Cart</a></li>
                <li><a href="">Settings</a></li>
              </ul>
            </div>
            <div>
              <h3>Help</h3>
              <ul>
                <li><a href="">Contact us</a></li>
                <li><a href="">Terms & conditions</a></li>
                <li><a href="">Privacy policy</a></li>
              </ul>
            </div>
            <div>
              <h3>Pages</h3>
              <ul>
                <li><a href="">About</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">Track order</a></li>
              </ul>
            </div>
          </nav>
          <Instagram />
        </div>
        <div className={classes.footerBottomBottom}>
          <div className={classes.footerBottomBottomSocials}>
            <a href="facebook.com"><FaFacebook size="30px" /></a>
            <a href="x.com"><FaSquareXTwitter size="30px" /></a>
            <a href="pinterest.com"><FaPinterestP size="30px" /></a>
            <a href="instagramcom"><FaInstagram size="30px" /></a>
          </div>
          <p>Shopery eCommerce by Nadia Borsch © {new Date().getFullYear()}. All Rights Reserved</p>
          <div className={classes.footerBottomBottomFlags}>
            <a href=""><FaApplePay size="45px" /></a>
            <a href=""><FaCcVisa size="45px" /></a>
            <a href=""><FaCcDiscover size="45px" /></a>
            <a href=""><FaCcMastercard size="45px" /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}