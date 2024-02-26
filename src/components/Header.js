import { IconContext } from "react-icons";
import { CiStickyNote } from "react-icons/ci";

export default function Header() {
  return (
    <div id="header">
      <span>What To Do?</span>
      <button>
        <IconContext.Provider value={{ size: "40px", color: "#766835" }}>
          <CiStickyNote className="button-icons" />
        </IconContext.Provider>
      </button>
    </div>
  );
}
