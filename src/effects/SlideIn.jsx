import { useState, useRef, useEffect } from "react";

const SlideIn = ({ children, direction = 'up', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const directions = {
    up: 'translate-y-16',
    down: '-translate-y-16',
    left: 'translate-x-16',
    right: '-translate-x-16',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-900 ${
        isVisible
          ? 'opacity-100 translate-x-0 translate-y-0'
          : `opacity-20 ${directions[direction]}`
      }`}
    >
      {children}
    </div>
  );
};

export default SlideIn