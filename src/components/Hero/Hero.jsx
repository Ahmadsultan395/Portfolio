import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";




const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            I'm Ahmad Sultan.
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
            I craft beautiful & seamless
            <br />
            website, And I love what i do{" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./ahmad.png" alt="" />
        </motion.div>

        <a className={css.email} href="mailto:zainkeepscode@gmail.com">
          ahmadsultan395@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">2</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            
            <a href="" style={{
              textDecoration:'none'
            }}><span className={css.certificatespan1}> Download CV<FaDownload style={{marginLeft:'.2rem'}}/></span></a>
           <a href=""> <span className={css.certificatespan2}><FaGithub /></span></a>
           <a href=""> <span className={css.certificatespan3}><FaLinkedinIn /></span></a>
          </motion.div>

          {/* <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./resumeicone.png" alt="" />
            <span>CERTIFIED PROFATIONAL</span>
            <span>WEB DEVELOPER</span>
          </motion.div><motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./resumeicone.png" alt="" />
            <span>CERTIFIED PROFATIONAL</span>
            <span>WEB DEVELOPER</span>
          </motion.div> */}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
