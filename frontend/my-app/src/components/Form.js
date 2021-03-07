import React from "react";

function Form({
  journalTitle,
  setJournalTitle,
  journalContent,
  setJournalContent,
  submit,
}) {
  return (
    <form onSubmit={submit}>
      <label>Title</label>
      <input
        type="text"
        name="title"
        id="journal-title"
        value={journalTitle}
        onChange={(e) => setJournalTitle(e.target.value)}
      />
      <label>Content</label>
      <textarea
        name="content"
        id="journal-content"
        rows="10"
        cols="50"
        value={journalContent}
        onChange={(e) => setJournalContent(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default Form;

