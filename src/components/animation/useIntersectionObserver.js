import React, { useEffect, useRef, useState } from "react";

const IntersectionObserverComponent = ({ children, animationClass }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Ativa a classe de animação
          }
        });
      },
      {
        threshold: 0.1, // Quando 10% do elemento está visível
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={isVisible ? `animate__animated ${animationClass}` : ""}
    >
      {children}
    </div>
  );
};

export default IntersectionObserverComponent;
