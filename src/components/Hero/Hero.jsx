import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { saveAs } from "file-saver";

const Hero = () => {
  const handleDownload = () => {
    saveAs("/AhmadSultan.pdf", "ahmadResume.pdf");
  };

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
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            <span style={{color:'#243749'}}>Hey! I Am ,</span>
            <br />
           <span style={{ color:'orange'}}> Ahmad Sultan</span>
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            I craft beautiful & seamless
            <br />
            website, And I love what i do{" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img className="ahmadimage"
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./ahmadnew.png"
            alt=""
          />
        </motion.div>

        <a className={css.email} href="mailto:ahmad395sultan@gmail.com">
          {/* ahmad395sultan@gmail.com */}
        </a>

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">2</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <a
              href=""
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                handleDownload();
              }}
              style={{
                textDecoration: "none",
              }}
            >
              <span className={css.certificatespan1}>
                {" "}
                Download CV
                <FaDownload style={{ marginLeft: ".2rem" }} />
              </span>
            </a>
            <a href="https://github.com/Ahmadsultan395">
              {" "}
              <span className={css.certificatespan2}>
                <FaGithub />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-ahmad-b9214b271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              {" "}
              <span className={css.certificatespan3}>
                <FaLinkedinIn />
              </span>
            </a>
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
