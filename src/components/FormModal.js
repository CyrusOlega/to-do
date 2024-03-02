import { forwardRef } from "react";

const FormModal = forwardRef(function FormModal(props, ref) {
  return (
    <div id="form-modal-container">
      <div id="form-modal" ref={ref}>
        <form>
          <div id="input-container">
            <input name="Title" placeholder="Title" className="input-form" />
          </div>
        </form>
      </div>
    </div>
  );
});

export default FormModal;
