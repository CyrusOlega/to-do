export default function Body() {
  const length = 15;
  const stickyNotes = Array.from({ length: length }, (_, i) => i + 1);

  return <div id="sticky-notes-container">{stickyNotes.map(StickyNote)}</div>;
}

function StickyNote() {
  return (
    <div className="sticky-note">
      <div className="title">
        <span>asdasd</span>
      </div>
      <div className="content">
        <span>
          Consectetur deserunt ut velit aliqua laborum. Ullamco eiusmod amet
          labore eu mollit ut velit mollit pariatur est mollit laboris do
          cillum. Occaecat irure velit velit cupidatat eu culpa labore irure
          occaecat esse proident exercitation non aliqua. Aute pariatur non elit
          adipisicing. Commodo aute cillum ex tempor ex culpa voluptate est
          dolore. Proident nisi duis veniam nulla ex fugiat. Cupidatat voluptate
          laborum aute sit eu deserunt consequat non non.
        </span>
      </div>
    </div>
  );
}
