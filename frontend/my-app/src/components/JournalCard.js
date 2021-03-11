import React, { useEffect } from "react";

function JournalCard({ journal_post, setDisplayPost }) {
  return (
    <div className="journal-card" onClick={() => setDisplayPost(journal_post)}>{journal_post.title}</div>
  );
}

export default JournalCard;
