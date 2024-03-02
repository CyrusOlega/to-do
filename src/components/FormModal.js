import { forwardRef, useState } from "react";
import { IconContext } from "react-icons";
import { SlArrowDown } from "react-icons/sl";

const FormModal = forwardRef(function FormModal(props, ref) {
  const [isOverflow, setOverflow] = useState(false);
  const [isScrollbarBottom, setScrollbarPosition] = useState(false);
  const [overflowGradientStyle, setOverflowGradientStyle] = useState(null);

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
      if (
        textArea.scrollHeight ===
        textArea.clientHeight + textArea.scrollTop + 1
      ) {
        setScrollbarPosition(true);
        setOverflowGradientStyle(null);
      } else {
        setScrollbarPosition(false);
        setOverflowGradientStyle({
          WebkitMaskImage:
            "linear-gradient(to bottom, black 90%, transparent 100%)",
          MaskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
        });
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
              onKeyDown={checkOverflow}
              onScroll={checkScrollPosition}
              style={overflowGradientStyle}
            />
            {/* show arrow icon when there is overflow and is not scrolled to the bottom */}
            {!(isOverflow && isScrollbarBottom) && (
              <IconContext.Provider value={{ size: "30px" }}>
                <SlArrowDown id="down-arrow" />
              </IconContext.Provider>
            )}
          </div>
        </form>
      </div>
    </div>
  );
});

export default FormModal;
