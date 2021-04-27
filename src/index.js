import "./pwr-high.svg";
import "./pwr-wide.svg";
import "./wust-high.svg";
import "./wust-wide.svg";

const PWRTheme = () => {
  function setSlideClass(currentClassList, container) {
    const isMainSlide = currentClassList.contains("main-slide");
    const isFullWidthSlide = currentClassList.contains("full-width-slide");
    const isFullWidthCompressedSlide = currentClassList.contains(
      "full-width-compressed-slide"
    );
    const isCompressedSlide = currentClassList.contains("compressed-slide");

    if (isMainSlide) {
      container.classList.add("main-slide");
    } else {
      container.classList.remove("main-slide");
    }
    if (isFullWidthSlide) {
      container.classList.add("full-width-slide");
    } else {
      container.classList.remove("full-width-slide");
    }
    if (isFullWidthCompressedSlide) {
      container.classList.add("full-width-compressed-slide");
    } else {
      container.classList.remove("full-width-compressed-slide");
    }
    if (isCompressedSlide || (!isMainSlide && !isFullWidthSlide && !isFullWidthCompressedSlide)) {
      container.classList.add("compressed-slide");
    } else {
      container.classList.remove("compressed-slide");
    }
  }

  return {
    id: "pwr-theme",
    init: (deck) => {
      Reveal.on("slidechanged", (event) => {
        setSlideClass(event.currentSlide.classList, event.target);
      });
      Reveal.on("ready", (event) => {
        setSlideClass(event.currentSlide.classList, event.target);
      });
    },
  };
};

export default PWRTheme;
