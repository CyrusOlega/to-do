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
    const textAreaElement = document.getElementById("text-area");
    if (textAreaElement.clientHeight < textAreaElement.scrollHeight) {
      setOverflow(true);
    } else {
      setOverflow(false);
    }
  };

  //set isScrollbarBottom state to true when the textarea is scrolled all the way to the bottom, otherwise set to false
  //also disable overflow gradient when scrolled to the bottom
  const checkScrollPosition = () => {
    if (isOverflow) {
      const textAreaElement = document.getElementById("text-area");
      // if scrolled to bottom
      if (
        textAreaElement.scrollTop ===
        textAreaElement.scrollHeight - textAreaElement.clientHeight - 1 //for some reason its always off by 1
      ) {
        setScrollbarBottom(true);
        setOverflowGradientStyle(undefined);
        setAnimation({
          bottom: "40px",
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
          bottom: "30px",
          animationName: "arrowFadeIn",
        });
        setRemoveDownArrow(false);
      }
    }
  };

  const scrollToBottom = () => {
    if (!isScrollbarBottom) {
      const textAreaElement = document.getElementById("text-area");
      textAreaElement.scrollTop =
        textAreaElement.scrollHeight - textAreaElement.clientHeight - 1;
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
          </div>
        </form>
        <IconContext.Provider value={{ size: "40px" }}>
          {/* down arrow only appears when there is overflow and is not scrolled to the bottom.
                  when the animation ends, it checks if the textarea is scrolled all the way to the 
                  bottom. if it is, the removeDownArrow variable will be set to true, which will 
                  cause <SlArrowDown> to not render*/}
          {isOverflow && !renderDownArrow && (
            <button
              id="down-arrow-button"
              style={animationStyle}
              onAnimationEnd={() => {
                if (isScrollbarBottom) setRemoveDownArrow(true);
              }}
              onClick={scrollToBottom}
            >
              <SlArrowDown />
            </button>
          )}
        </IconContext.Provider>
      </div>
    </div>
  );
});

export default FormModal;
