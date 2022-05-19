import { keyframes } from "@stitches/react";
import { useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { transform } from "typescript";
import { styled } from "../../../stitches.config";
import { ImageBase } from "../../../utils/parseImageLink";
import { CarouselSlide } from "./CarouselSlide";
import { useCarousel } from "./useCarousel";
interface CarouselProps {
  slides: ImageBase[];
}
export const Carousel = ({ slides }: CarouselProps) => {
  const [currentSlide, setCurrentSlide, nextSlide, prevSlide] = useCarousel({
    noSlides: slides.length,
    autoSlide: true,
  });
  console.log(
    currentSlide + 1,
    slides.length,
    currentSlide + 1 === slides.length
  );
  const begginingX = useRef<number>(0);
  const endX = useRef<number>(0);

  const startHandler = (e: React.TouchEvent<HTMLDivElement>): void => {
    begginingX.current = e.touches[0]?.clientX ?? 0;
    endX.current = 0;
  };
  const moveHandler = (e: React.TouchEvent<HTMLDivElement>): void => {
    endX.current = e.touches[0]?.clientX ?? 0;
  };
  const endHandler = (): void => {
    if (endX.current != 0) {
      if (begginingX.current < endX.current) {
        prevSlide();
      }
      if (begginingX.current > endX.current) {
        nextSlide();
      }
    }
  };
  const animation = keyframes({
    "0%": { transform: `translateX(-${(currentSlide - 1) * 100}%)` },
    "100%": {
      transform: `translateX(${
        currentSlide === slides.length + 1 ? "100%" : -(currentSlide * 100)
      }%)`,
    },
  });
  const CarouselControler = styled("div", {
    display: "flex",
    width: "$full",
    transform: `translateX(-${
      currentSlide + 1 === slides.length ? "100%" : currentSlide * 100
    }%)`,
    animation: `${animation} 1s`,
    maxWidth: "$full",
  });

  const Dot = styled("div", {
    cursor: "pointer",
    width: "7px",
    height: "7px",
    "@bp2": {
      width: "15px",
      height: "15px",
    },
    margin: "0 2px",
    borderRadius: "50%",
    display: "inline-block",
    transition: "background-color 0.6s ease",
    "&:hover": {
      backgroundColor: "$gray900",
    },
    variants: {
      active: {
        true: { backgroundColor: "$gray900" },
        false: { backgroundColor: "$gray200" },
      },
    },
  });
  return (
    <CarouselWrapper>
      <ArrowContainer onClick={prevSlide}>
        <FaArrowAltCircleLeft size={32} />
      </ArrowContainer>

      <CarouselContainer>
        <CarouselControler
          onTouchStart={(e) => startHandler(e)}
          onTouchMove={(e) => moveHandler(e)}
          onTouchEnd={() => endHandler()}
        >
          {slides.map((slide, idx) => (
            <CarouselSlide key={idx} image={slide} />
          ))}
        </CarouselControler>
        <DotContainer>
          {slides.map((slide, idx) => (
            <Dot key={idx} active={idx === currentSlide} />
          ))}
        </DotContainer>
      </CarouselContainer>

      <ArrowContainer onClick={nextSlide}>
        <FaArrowAltCircleRight size={32} />
      </ArrowContainer>
    </CarouselWrapper>
  );
};
const DotContainer = styled("div", {
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  bottom: "8px",
  width: "$full",
  display: "flex",
  opacity: "70%",
});

const CarouselWrapper = styled("div", {
  display: "flex",
  width: "$full",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "$xl7",
  margin: "0 auto",
});
const CarouselContainer = styled("div", {
  display: "flex",
  width: "$full",
  overflow: "hidden",
  position: "relative",
});
const ArrowContainer = styled("div", {
  cursor: "pointer",
  display: "none",
  pos: "absolute",
  w: "auto",
  color: "white",
  transition: "0.6s ease",
  borderRadius: "0 3px 3px 0",
  userSelect: "none",
  padding: "$3",
  "&:hover": {
    opacity: 0.8,
    bg: "black",
  },
  "@bp2": {
    display: "block",
  },
});
