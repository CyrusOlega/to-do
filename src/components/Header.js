import { useState } from "react";
import { IconContext } from "react-icons";
import { PiNotePencilThin } from "react-icons/pi";
import useOnClickOutside from "../hooks/useOnClickOutside";

export default function Header() {
  const [modal, setModal] = useState(false);

  return (
    <div id="header">
      <span>What To Do?</span>
      <button>
        <IconContext.Provider value={{ size: "40px", color: "#766835" }}>
          <PiNotePencilThin className="button-icons" />
        </IconContext.Provider>
      </button>
    </div>
  );
}
