import React, { useEffect, useRef, useState } from "react";
import css from "./Header2.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../../utils/motion";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../../hooks/useHeaderShadow";
import { useNavigate } from "react-router-dom";

const Header2 = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const navigate = useNavigate();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{boxShadow: headerShadow}}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name} onClick={()=>navigate('/')}>M.Ahmad Sultan</div>
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li onClick={()=>navigate('/')} ><a href="#experties">About</a></li>
          <li onClick={()=>navigate('/')} ><a href="#work">Experience</a></li>
          <li onClick={()=>navigate('/')} ><a href="#portfolio">Portfolio</a></li>
          <li onClick={()=>navigate('/')} ><a href="#people">Testimonials</a></li>
          <li className={`flexCenter ${css.phone}`}>
          <a href="tel:+923120685288" >
           <p>+923120685288</p>
           <BiPhoneCall size={"40px"} style={{backgroundColor:'orange', color:'white', 
            boxShadow:'0px 5px 30px orange'
            }} />
           </a>
          </li>
        </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header2;
