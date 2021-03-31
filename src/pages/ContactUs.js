import React from "react";
import styled from "styled-components";

// Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";

const OurWork = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "white" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>

      <div>
        {/* Email */}
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a title="Send an email" href="mailto:idnzozkan@protonmail.com">
              <h2>Email</h2>
            </a>
          </Social>
        </Hide>

        {/* Linkedin */}
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a
              title="Linkedin"
              href="https://www.linkedin.com/in/idnzozkan"
              target="_blank"
            >
              <h2>Linkedin</h2>
            </a>
          </Social>
        </Hide>

        {/* Twitter */}
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a
              title="Twitter"
              href="https://www.twitter.com/idnzozkan"
              target="_blank"
            >
              <h2>Twitter</h2>
            </a>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;

  h2 {
    font-weight: 200 !important;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 1.75rem;
  height: 1.75rem;
  background-color: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    margin: 2rem;
  }
`;

export default OurWork;
