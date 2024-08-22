import React from 'react';
import { WhatDoIHelp } from '../../utils/data';
import css from './Experties.module.scss';
import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../../utils/motion.js';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'React.js', 'Material-UI', 'Tailwind CSS'
];

const Experties = () => {
  return (
    <section className={css.wrapper}>
      <a className="anchor" id="experties"></a>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}
      >
        <motion.div
          variants={textVariant(0.5)}
          className={css.rightSide}
        >
          <span className='primaryText'>About Us</span>
          {WhatDoIHelp.map((paragraph, i) => (
            <span className='secondaryText' key={i}>{paragraph}</span>
          ))}

          <div className={`flexCenter ${css.stats}`}>
            <div className={`flexCenter ${css.stat}`}>
              <span className='primaryText'>285+</span>
              <span className='secondaryText'>Project Completed</span>
            </div>
            <div className={`flexCenter ${css.stat}`}>
              <span className='primaryText'>190+</span>
              <span className='secondaryText'>Happy Clients</span>
            </div>
          </div>

          {/* New Skills Section */}
          <div className={css.skillsSection}>
            <h2 className='primaryText'>My Skills</h2>
            <div className={css.skills}>
              {skills.map((skill, i) => (
                <div className={css.skillBox} key={i}>
                  <span className='primaryText'>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experties;
