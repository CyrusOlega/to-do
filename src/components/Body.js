export default function Body() {
  const length = 15;
  const stickyNotes = [];
  for (let i = 0; i < length; i++) stickyNotes.push({ id: i });

  return <div id="sticky-notes-container">{stickyNotes.map(StickyNote)}</div>;
}

function StickyNote() {
  return (
    <div className="sticky-note">
      <div className="title">
        <span>asdasd</span>
      </div>
      <div className="content">
        <span>asdasd</span>
      </div>
    </div>
  );
}
