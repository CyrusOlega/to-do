import { forwardRef, useState } from "react";
import { IconContext } from "react-icons";
import { SlArrowDown } from "react-icons/sl";

const FormModal = forwardRef(function FormModal(props, ref) {
  const [isOverflow, setOverflow] = useState(false);
  const [isScrollbarBottom, setScrollbarBottom] = useState(false);
  const [overflowGradientStyle, setOverflowGradientStyle] = useState(undefined);
  const [animationStyle, setAnimation] = useState(undefined);
  const [renderDownArrow, setRemoveDownArrow] = useState(false);

  //set isOverflow state when there is overflow (when the textarea becomes scrollable, even though the scrollbar is hidden through css)
  const checkOverflow = () => {
    const textArea = document.getElementById("text-area");
    if (textArea.clientHeight < textArea.scrollHeight) {
      setOverflow(true);
    } else {
      setOverflow(false);
    }
  };

  //set isScrollbarBottom state to true when the textarea is scrolled all the way to the bottom, otherwise set to false
  //also disable overflow gradient when scrolled to the bottom
  const checkScrollPosition = () => {
    if (isOverflow) {
      const textArea = document.getElementById("text-area");
      // if scrolled to bottom
      if (
        textArea.scrollHeight ===
        textArea.clientHeight + textArea.scrollTop + 1 //for some reason its always off by 1
      ) {
        setScrollbarBottom(true);
        setOverflowGradientStyle(undefined);
        setAnimation({
          animationName: "arrowFadeOut",
          color: "transparent",
        });
      } else {
        setScrollbarBottom(false);
        setOverflowGradientStyle({
          WebkitMaskImage:
            "linear-gradient(to bottom, black 90%, transparent 100%)",
          MaskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
        });
        setAnimation({
          animationName: "arrowFadeIn",
        });
        setRemoveDownArrow(false);
      }
    }
  };

  return (
    <div id="form-modal-container">
      <div id="form-modal" ref={ref}>
        <form>
          <div id="input-container">
            <input name="Title" placeholder="Title" className="input-form" />
          </div>
          <div id="text-area-container">
            <textarea
              id="text-area"
              name="Content"
              placeholder="Enter Task..."
              onKeyUp={checkOverflow}
              onScroll={checkScrollPosition}
              style={overflowGradientStyle}
            />
            <IconContext.Provider value={{ size: "30px" }}>
              {/* 1. if there is overflow and is scrolled NOT to bottom */}
              {/* 2. if there is overflow and is scrolled to bottom */}
              {isOverflow && !renderDownArrow && (
                <SlArrowDown
                  id="down-arrow"
                  style={animationStyle}
                  onAnimationEnd={() => {
                    if (isScrollbarBottom) setRemoveDownArrow(true);
                  }}
                />
              )}
            </IconContext.Provider>
          </div>
        </form>
      </div>
    </div>
  );
});

export default FormModal;
