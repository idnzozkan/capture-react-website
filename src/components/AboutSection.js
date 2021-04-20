import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Style
import { Section, Description, Image, Hide } from "../styles";

// Image
import home1 from "../img/home1.png";

// Animation
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <Section>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact Us</motion.button>
        </Link>
      </Description>

      <Image>
        <motion.img variants={photoAnim} src={home1} alt="About us" />
      </Image>

      <Wave />
    </Section>
  );
};

export default AboutSection;
