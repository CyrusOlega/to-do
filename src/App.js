import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { useState } from "react";
import useOnClickOutside from "./hooks/useOnClickOutside";
import { useRef } from "react";
import FormModal from "./components/FormModal";

function App() {
  const [modal, setModal] = useState(false);

  //toggle modal visibility
  const toggleModal = () => {
    setModal(!modal);
  };

  //when mouse is pressed outside the area of the form modal, it will close
  const ref = useRef();
  useOnClickOutside(ref, toggleModal);

  return (
    <div>
      {modal && <FormModal ref={ref} />}
      <Header toggleModal={toggleModal} />
      <Body />
    </div>
  );
}

export default App;
