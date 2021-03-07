import React, { useState } from "react";
import Form from "./Form";
import JournalPost from "./JournalPost";

function MainDisplay({
  handleUpdate,
  displayPost,
  displayForm,
  journalTitle,
  setJournalTitle,
  journalContent,
  setJournalContent,
  submit,
  handleDelete
}) {
  return (
    <div>
      {displayForm ? (
        <Form
          journalTitle={journalTitle}
          setJournalTitle={setJournalTitle}
          journalContent={journalContent}
          setJournalContent={setJournalContent}
          submit={submit}
        />
      ) : <JournalPost handleUpdate={handleUpdate} displayPost={displayPost} handleDelete={handleDelete}/>}
    </div>
  );
}

export default MainDisplay;
