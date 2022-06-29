import { keyframes } from "@stitches/react";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { styled } from "../../stitches.config";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <ScrollTop visible={isVisible}>
      {isVisible && (
        <div onClick={scrollToTop}>
          <FaArrowUp size={32} />
        </div>
      )}
    </ScrollTop>
  );
}

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const ScrollTop = styled("div", {
  variants: {
    visible: {
      true: {
        display: "block",
      },
      false: {
        display: "none",
      },
    },
  },
  backgroundColor: "white",
  border: "1px solid",
  borderRadius: "50%",
  width: "32px",
  height: "32px",
  p: "2px",
  color: "$blue900",
  position: "fixed",
  bottom: "2rem",
  right: "2rem",
  animation: `${fadeIn} 700ms ease-in-out 1s both`,
  cursor: "pointer",
});
