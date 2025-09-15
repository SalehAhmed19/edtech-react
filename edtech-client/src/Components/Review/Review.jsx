import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import "./Review.css";
import { FaBook, FaQuoteLeft } from "react-icons/fa";
import SectionTitle from "../SectionTitle/SectionTitle";
import { QuotesIcon } from "@phosphor-icons/react";
import useGetReviews from "../../Hooks/Reviews/useGetReviews";
import LoadingSpinner from "../UI/LoadingSpinner";
import { Fade, Zoom } from "react-awesome-reveal";

export default function Review() {
  const { isLoading, reviews } = useGetReviews();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 15,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  if (isLoading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="mb-10">
      <Fade direction="up" cascade={true} duration={800}>
        {" "}
        <h2 className="text-[45px] font-bold text-center">
          <span className="text-primary">Reviews</span> of Students
        </h2>
        <p className="text-center text-secondary">
          Hear what our students have to say.
        </p>
      </Fade>

      <div className="navigation-wrapper mt-5">
        <div ref={sliderRef} className="keen-slider">
          {reviews.map((review, idx) => (
            <Zoom key={idx} cascade={true} duration={800}>
              <div className="keen-slider__slide relative">
                <QuotesIcon
                  size={62}
                  className="ml-auto text-primary mb-[-15px]"
                />
                <div className="px-5 pb-10 rounded-md">
                  <p>{review.reviewText}</p>

                  <div className="flex items-center gap-2 mt-5">
                    <img
                      src="https://avatar.iran.liara.run/public/35"
                      alt="reviewe-image"
                      className="w-12 rounded-full"
                    />
                    <h5 className="text-xl text-primary">
                      {review.reviewerName}
                    </h5>
                  </div>
                  <p className="text-secondary" style={{ fontSize: "14px" }}>
                    {review.reviewDate}
                  </p>
                </div>
              </div>
            </Zoom>
          ))}
        </div>

        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </div>
  );
}
function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
