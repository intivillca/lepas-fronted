import {
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";

type AutoSlideProps =
  | { autoSlide?: false; timeout?: never }
  | { autoSlide?: true; timeout?: number };
export interface CommonProps {
  noSlides: number;
}
export type UseCarouselProps = CommonProps & AutoSlideProps;
export const useCarousel = ({
  noSlides,
  autoSlide = false,
  timeout = 5000,
}: UseCarouselProps): [
  number,
  Dispatch<SetStateAction<number>>,
  () => void,
  () => void
] => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slidesCount: number = noSlides;

  /**
   * next and previous slide control, standard set of next slide and when it reaches the end goes back to first slide/last slide depending on sliding direction
   */
  const prevSlide = useCallback((): void => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  }, [slidesCount]);

  const nextSlide = useCallback((): void => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  }, [slidesCount]);

  /**
   * Controls timing of timed slide moving
   */
  useEffect(() => {
    if (autoSlide) {
      const timer = setTimeout(() => {
        nextSlide();
      }, timeout);
      return () => {
        clearTimeout(timer);
      };
    }
    return;
  });

  return [currentSlide, setCurrentSlide, nextSlide, prevSlide];
};
