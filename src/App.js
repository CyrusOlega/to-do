import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { useState } from "react";
import useOnClickOutside from "./hooks/useOnClickOutside";
import { useRef } from "react";
import FormModal from "./components/FormModal";

function App() {
  const [modal, setModal] = useState(false);
  const [stickyNotes, setStickyNotes] = useState([]);

  //store form data
  const storeFormData = (event) => {
    event.preventDefault();
    setStickyNotes((stickyNotes) => [
      ...stickyNotes,
      {
        date: new Date(),
        title: event.target.title.value,
        content: event.target.content.value,
      },
    ]);

    toggleModal();
  };

  //toggle modal visibility
  const toggleModal = () => {
    setModal(!modal);
  };

  //when mouse is pressed outside the area of the form modal, it will close
  const ref = useRef();
  useOnClickOutside(ref, toggleModal);

  return (
    <div>
      {modal && (
        <FormModal
          ref={ref}
          toggleModal={toggleModal}
          storeFormData={storeFormData}
        />
      )}
      <Header toggleModal={toggleModal} />
      <Body stickyNotes={stickyNotes} />
    </div>
  );
}

export default App;
