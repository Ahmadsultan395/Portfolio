import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderSettings } from "../../utils/data";

const images = [
  { _id:1 , src: "./itify.png", alt: "Project 1" },
  { _id:2,  src: "./black-tech.png", alt: "Project 2" },
  {_id:3,  src: "./showCase3.png", alt: "Project 3" },
  // Add more images as needed
];

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}>
              Perfect solution for digital experience
            </p>
          </div>
          <span className="secondaryText">Explore More Works</span>
          {/* <button onClick={() => navigate("/footer")}>move</button> */}
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          <Slider {...sliderSettings} className={css.slider}>
            {images.map((image, index) => (
              <motion.div key={index} variants={fadeIn("up", "tween", 0.5, 0.6)} style={{marginRight:'3rem'}}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className={css.sliderImage}
                  onClick={()=>navigate(`ProjectDetail/${image._id}`)}
                />
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
