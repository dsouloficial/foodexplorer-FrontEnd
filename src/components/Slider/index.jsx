import React, { useState, Children } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { Container } from './styles';

export function Slider({ title, children }) {

  const hasNoChilds = Children.count(children) === 0;

  if (hasNoChilds) return null;

  const [ currentSlide, setCurrentSlide ] = useState(0);
  const [ loaded, setLoaded ] = useState(false);
  const sliderConfig = {
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    mode: "free-snap",
    loop: false,
    slides: {
      origin: "center",
      spacing: 15,
    },
    breakpoints: {
      '(min-width: 1px)': {
        slides: { perView: 1.2, },
      },
      '(min-width: 355px)': {
        slides: { perView: 1.4, },
      },
      '(min-width: 375px)': {
        slides: { perView: 1.5, },
      },
      '(min-width: 425px)': {
        slides: { perView: 1.7, },
      },
      '(min-width: 550px)': {
        slides: { perView: 2.3, },
      },
      '(min-width: 650px)': {
        slides: { perView: 2.7, },
      },
      '(min-width: 800px)': {
        slides: { perView: 3.2, },
      },
      '(min-width: 900px)': {
        slides: { perView: 3.5, },
      },
      '(min-width: 976px)': {
        slides: { perView: 2.7, },
      },
      '(min-width: 1110px)': {
        slides: { perView: 3.4, },
      },
    }
  };
  const [ sliderRef, instanceRef ] = useKeenSlider(sliderConfig);

  return (
    <Container className="slider-wrapper">
      {title && <h2 className="title">{title}</h2>}
      <div ref={sliderRef} className="keen-slider">
        {Children.map(children, (child, idx) =>
        (<div className={`keen-slider__slide number-slide${idx + 1}`} key={idx}>
            {child}
        </div>)
        )}
      </div>

      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
          />

          <Arrow
            onClick={(e) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
          />
        </>
      )}
    </Container>

  );
}

function Arrow(props) {
  return (
    <>
      {props.left && <div className="arrow-bg arrow--left"></div>}
      {!props.left && <div className="arrow-bg arrow--right"></div>}
      <svg
        onClick={props.onClick}
        className={`arrow ${props.left ? "arrow--left" : "arrow--right"}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
      >
        {props.left && (
          <path
            d="M25.8839 6.61612C26.372 7.10427 26.372 7.89573 25.8839 8.38388L14.2678 20L25.8839 31.6161C26.372 32.1043 26.372 32.8957 25.8839 33.3839C25.3957 33.872 24.6043 33.872 24.1161 33.3839L11.6161 20.8839C11.128 20.3957 11.128 19.6043 11.6161 19.1161L24.1161 6.61612C24.6043 6.12796 25.3957 6.12796 25.8839 6.61612Z"
          />
        )}
        {!props.left && (
          <path
            d="M14.1166 6.61612C14.6048 6.12796 15.3962 6.12796 15.8844 6.61612L28.3844 19.1161C28.8725 19.6043 28.8725 20.3957 28.3844 20.8839L15.8844 33.3839C15.3962 33.872 14.6048 33.872 14.1166 33.3839C13.6284 32.8957 13.6284 32.1043 14.1166 31.6161L25.7327 20L14.1166 8.38388C13.6284 7.89573 13.6284 7.10427 14.1166 6.61612Z"
          />
        )}
      </svg>
    </>
  );
}
