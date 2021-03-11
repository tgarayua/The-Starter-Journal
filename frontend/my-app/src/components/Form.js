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
    <form className="new-post-form" onSubmit={isEditing ? handleUpdate : handleCreate}>
      {<h2 className="header">{isEditing ? "Edit" : "Create"} Journal Post</h2>}
      <div>
        <input
          className="new-post-title"
          type="text"
          name="title"
          id="journal-title"
          value={journalTitle}
          onChange={(e) => setJournalTitle(e.target.value)}
          placeholder="Enter a Title..."
        />
      </div>
      <div className="new-post-content">
        <textarea
          className="new-post-textarea"
          name="content"
          id="journal-content"
          rows="10"
          cols="50"
          value={journalContent}
          onChange={(e) => setJournalContent(e.target.value)}
          placeholder="Create your journal post..."
        />
      </div>
      <div className="new-post-buttons">
        <input className="submit-button" type="submit" />
        <button className="cancel-button" onClick={() => {handleCancel()}} >Cancel</button>
      </div>
    </form>
  );
}

export default Form;