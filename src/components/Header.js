import { IconContext } from "react-icons";
import { PiNotePencilThin } from "react-icons/pi";

export default function Header({ toggleModal }) {
  return (
    <div id="header">
      <span>What To Do?</span>
      <button onClick={toggleModal}>
        <IconContext.Provider value={{ size: "40px", color: "#766835" }}>
          <PiNotePencilThin className="button-icons" />
        </IconContext.Provider>
      </button>
    </div>
  );
}
