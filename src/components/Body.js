import { FaTrash } from "react-icons/fa";

export default function Body({ stickyNotes }) {
  // const length = 15;
  // const stickyNotes = Array.from({ length: length }, (_, i) => i + 1);

  return (
    <div id="sticky-notes-container">
      {stickyNotes.map((data) => (
        <StickyNote data={data} key={data.date} />
      ))}
    </div>
  );
}

function StickyNote({ data }) {
  return (
    <div className="sticky-note">
      <div className="title">
        <span>{data.title}</span>
        <div id="trash-icon">
          <FaTrash />
        </div>
      </div>
      <div className="content">
        <span>{data.content}</span>
      </div>
    </div>
  );
}
