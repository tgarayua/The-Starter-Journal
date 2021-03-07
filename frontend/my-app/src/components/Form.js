import React from "react";

function Form({
  setDisplayForm,
  journalTitle,
  setJournalTitle,
  journalContent,
  setJournalContent,
  handleCreate,
  handleUpdate,
  isEditing
}) {

  function handleCancel() {
    setDisplayForm(false)
    setJournalTitle("")
    setJournalContent("")
  }

  return (
    <form onSubmit={isEditing ? handleUpdate : handleCreate}>
      {<h3>{isEditing ? "Edit" : "Create"} Journal Post</h3>}
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
      <button onClick={() => {handleCancel()}} >Cancel</button>
    </form>
  );
}

export default Form;