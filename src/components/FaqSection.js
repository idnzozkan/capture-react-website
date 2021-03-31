import React from "react";
import Toggle from "./Toggle";
import { AnimateSharedLayout, motion } from "framer-motion";
import { fade, scrollReveal } from "../animation";
import { useScroll } from "./useScroll";
// Styles
import styled from "styled-components";
import { Section } from "../styles";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      initial="hidden"
      animate={controls}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            className="answer"
          >
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              minima!
            </p>
          </motion.div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            className="answer"
          >
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              minima!
            </p>
          </motion.div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            className="answer"
          >
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              minima!
            </p>
          </motion.div>
        </Toggle>
        <Toggle title="What Products Do You Offer?">
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            className="answer"
          >
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              minima!
            </p>
          </motion.div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(Section)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    width: 100%;
    height: 0.2rem;
    margin: 2rem 0rem;
    background: #ccc;
  }

  .question {
    cursor: pointer;
    padding: 3rem 0rem;
  }

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
