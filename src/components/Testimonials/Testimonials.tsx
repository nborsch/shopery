import React from "react"
import classes from "./Testimonials.module.css"

export default function Testimonials(){

    return (
      <div className={classes.container}>
        <h2 className={classes.title}>What our Clients Say</h2>
        <div className={classes.info}>
          <img src="/img/home-icon-quotes.png" />
          <p className={classes.testimonial}>“Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele.”</p>
        </div>
        <div className={classes.info}>
          <img src="/img/home-icon-quotes.png" />
          <p className={classes.testimonial}>“Proin sed neque nec tellus malesuada ultrices eget a justo. Nullam a nibh faucibus, semper risus ac, ultricies est. Maecenas eget purus in enim imperdiet dapibus in ac mi. Fusce faucibus lacus felis.”</p>
        </div>
        <div className={classes.info}>
          <img src="/img/home-icon-quotes.png" />
          <p className={classes.testimonial}>“Nam sed odio diam. Mauris sagittis sapien sed convallis cursus. Proin mattis ultrices urna ac eleifend. Cras vel nisi nec lectus sagittis venenatis. Curabitur laoreet leo sed lorem pulvina.”</p>
        </div>
        <div className={classes.client}>
          <img className={classes.headshot} src="/img/temp-headshot-jenny.webp" />
          <span className={classes.name}>Jenny Wilson</span>
          <span className={classes.clientType}>Customer</span>
        </div>
        <div className={classes.client}>
          <img className={classes.headshot} src="/img/temp-headshot-guy.webp" />
          <span className={classes.name}>Guy Hawkins</span>
          <span className={classes.clientType}>Customer</span>
        </div>
        <div className={classes.client}>
          <img className={classes.headshot} src="/img/temp-headshot-kathryn.webp" />
          <span className={classes.name}>Kathryn Murphy</span>
          <span className={classes.clientType}>Customer</span>
        </div>
      </div>
    )
}