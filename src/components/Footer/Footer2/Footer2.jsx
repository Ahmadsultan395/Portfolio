import React from "react";
import { footerVariants, staggerChildren } from "../../../utils/motion";
import css from "./Footer2.module.scss";
import {motion} from 'framer-motion'
import { useNavigate } from "react-router-dom";
const Footer2 = () => {
  const navigate = useNavigate();
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:ahmad395sultan@gmail.com" style={{color:'white'}}>saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Lahore, Pakistan</p>
          </div>
          <ul className={css.menu}>
          <li onClick={()=>navigate('/')} ><a href="#experties">About</a></li>
          <li onClick={()=>navigate('/')} ><a href="#work">Experience</a></li>
          <li onClick={()=>navigate('/')} ><a href="#portfolio">Portfolio</a></li>
          <li onClick={()=>navigate('/')} ><a href="#people">Testimonials</a></li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer2;
