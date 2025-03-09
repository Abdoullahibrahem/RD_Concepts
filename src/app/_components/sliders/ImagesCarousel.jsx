"use client";
import React, { useState, useEffect, useRef } from "react";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(4);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef(null);

  // Sample images array if none provided
  const defaultImages = [
    {
      src: "/api/placeholder/400/400",
      alt: "Image 1",
    },
    {
      src: "/api/placeholder/400/400",
      alt: "Image 2",
    },
    {
      src: "/api/placeholder/400/400",
      alt: "Image 3",
    },
    {
      src: "/api/placeholder/400/400",
      alt: "Image 4",
    },
    {
      src: "/api/placeholder/400/400",
      alt: "Image 5",
    },
    {
      src: "/api/placeholder/400/400",
      alt: "Image 6",
    },
    {
      src: "/api/placeholder/400/400",
      alt: "Image 7",
    },
    {
      src: "/api/placeholder/400/400",
      alt: "Image 8",
    },
  ];

  const carouselImages = images || defaultImages;

  // Update number of visible slides based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setVisibleSlides(1); // Mobile: 1 slide
      } else if (window.innerWidth < 768) {
        setVisibleSlides(2); // Small devices: 2 slides
      } else if (window.innerWidth < 992) {
        setVisibleSlides(3); // Medium devices: 3 slides
      } else {
        setVisibleSlides(3); // Large devices: 4 slides
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate maximum index based on visible slides
  const maxIndex = Math.max(0, carouselImages.length - visibleSlides);

  // Calculate the width percentage for each slide based on visible slides
  const slideWidth = 100 / visibleSlides;

  // Mouse event handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);

    // Change cursor to grabbing
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grabbing";
      carouselRef.current.style.userSelect = "none";
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const containerWidth = carouselRef.current?.clientWidth || 1;
    const slideWidthPx = (containerWidth * slideWidth) / 100;
    const offset = e.clientX - dragStartX;

    // Calculate drag offset as a percentage of slide width
    setDragOffset((offset / slideWidthPx) * slideWidth);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    // If dragged more than 15% of slide width, change slide
    if (Math.abs(dragOffset) > 15) {
      if (dragOffset < 0 && currentIndex < maxIndex) {
        // Dragged left - go to next slide
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
      } else if (dragOffset > 0 && currentIndex > 0) {
        // Dragged right - go to previous slide
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      }
    }

    // Reset dragging state
    setIsDragging(false);
    setDragOffset(0);

    // Reset cursor
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab";
      carouselRef.current.style.userSelect = "auto";
    }
  };

  // Touch event handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const containerWidth = carouselRef.current?.clientWidth || 1;
    const slideWidthPx = (containerWidth * slideWidth) / 100;
    const offset = e.touches[0].clientX - dragStartX;

    // Calculate drag offset as a percentage of slide width
    setDragOffset((offset / slideWidthPx) * slideWidth);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    // If dragged more than 15% of slide width, change slide
    if (Math.abs(dragOffset) > 15) {
      if (dragOffset < 0 && currentIndex < maxIndex) {
        // Dragged left - go to next slide
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
      } else if (dragOffset > 0 && currentIndex > 0) {
        // Dragged right - go to previous slide
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      }
    }

    // Reset dragging state
    setIsDragging(false);
    setDragOffset(0);
  };

  // Clean up function for mouse events when component unmounts or when user leaves the carousel
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);

      if (carouselRef.current) {
        carouselRef.current.style.cursor = "grab";
        carouselRef.current.style.userSelect = "auto";
      }
    }
  };

  // Ensure window event listeners are cleaned up
  useEffect(() => {
    const handleMouseUpGlobal = () => {
      if (isDragging) {
        handleMouseUp();
      }
    };

    window.addEventListener("mouseup", handleMouseUpGlobal);
    return () => {
      window.removeEventListener("mouseup", handleMouseUpGlobal);
    };
  }, [isDragging]);

  // Custom styles for minimalist design
  const styles = {
    carouselContainer: {
      position: "relative",
      overflow: "visible",
      maxWidth: "1400px",
      cursor: "grab",
    },
    carouselInner: {
      display: "flex",
      transition: isDragging ? "none" : "transform 0.3s ease",
      transform: `translateX(-${currentIndex * slideWidth - dragOffset}%)`,
    },
    slide: {
      flex: `0 0 ${slideWidth}%`,
      paddingRight: "14px",
      boxSizing: "border-box",
    },
    imageContainer: {
      width: "100%",
      paddingBottom: "70%",
      position: "relative",
      overflow: "hidden",
      borderRadius: "4px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    },
    image: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      pointerEvents: "none", // Prevent image drag interfering with carousel drag
      backgroundColor: "#f0f0f0",
    },
  };

  return (
    <div
      ref={carouselRef}
      className="carousel"
      style={styles.carouselContainer}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="carousel-inner" style={styles.carouselInner}>
        {carouselImages.map((image, index) => (
          <div key={index} className="carousel-item" style={styles.slide}>
            <div style={styles.imageContainer}>
              <img
                src={image.src}
                alt={image.alt}
                style={styles.image}
                draggable="false"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
