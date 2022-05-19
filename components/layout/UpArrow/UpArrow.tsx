import { styled } from "@stitches/react";
import { useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

export const UpArrow = () => {
  return (
    <Container
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      <FaArrowUp size={40} />
    </Container>
  );
};

const Container = styled("div", {
  position: "sticky",
  bottom: "0",
  left: "90%",
  backgroundColor: "$pink600",
  width: "40px",
  height: "40px",
  color: "White",
  zIndex: "999",
  cursor: "pointer",
  variants: {
    display: {
      true: { opacity: 1 },
      false: { opacity: 0 },
    },
  },
});
