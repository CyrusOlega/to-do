import { IconContext } from "react-icons";
import { PiNotePencilThin } from "react-icons/pi";

export default function Header() {
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
