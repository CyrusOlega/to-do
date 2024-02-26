import { IconContext } from "react-icons";
import { HiPlus } from "react-icons/hi2";

export default function Header() {
  return (
    <div id="header">
      <span>What To Do?</span>
      <button>
        <IconContext.Provider value={{ size: "30px", color: "#ab9649" }}>
          <HiPlus className="button-icons" />
        </IconContext.Provider>
      </button>
    </div>
  );
}
