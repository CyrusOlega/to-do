import { forwardRef, useState } from "react";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";

const FormModal = forwardRef(function FormModal(props, ref) {
  const [isOverflow, setOverflow] = useState(false);
  const [isScrollbarBottom, setScrollbarPosition] = useState(false);

  const checkOverflow = () => {
    const textArea = document.getElementById("text-area");
    if (textArea.clientHeight < textArea.scrollHeight) {
      setOverflow(true);
    } else {
      setOverflow(false);
    }
  };

  const checkScrollPosition = () => {
    if (isOverflow) {
      const textArea = document.getElementById("text-area");
      if (
        textArea.scrollHeight ===
        textArea.clientHeight + textArea.scrollTop + 1
      ) {
        setScrollbarPosition(true);
      } else {
        setScrollbarPosition(false);
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
            />
            {isOverflow && isScrollbarBottom && (
              <IconContext.Provider value={{ size: "50px" }}>
                <IoIosArrowDown id="down-arrow" />
              </IconContext.Provider>
            )}
          </div>
        </form>
      </div>
    </div>
  );
});

export default FormModal;
