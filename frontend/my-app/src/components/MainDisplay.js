import React, { useState } from "react";
import Form from "./Form";
import JournalPost from "./JournalPost";

function MainDisplay({
  displayPost,
  displayForm,
  setDisplayForm,
  journalTitle,
  setJournalTitle,
  journalContent,
  setJournalContent,
  handleCreate,
  handleDelete,
  handleUpdate,
  setIsEditing,
  isEditing
}) {
  return (
    <>
      {displayForm ? (
        <Form
          setDisplayForm={setDisplayForm}
          journalTitle={journalTitle}
          setJournalTitle={setJournalTitle}
          journalContent={journalContent}
          setJournalContent={setJournalContent}
          handleCreate={handleCreate}
          handleUpdate={handleUpdate}
          displayPost={displayPost}
          isEditing={isEditing}
        />
      ) : (
        <JournalPost
          setJournalTitle={setJournalTitle}
          journalTitle={setJournalContent}
          setJournalContent={setJournalContent}
          journalContent={journalContent}
          displayPost={displayPost}
          handleDelete={handleDelete}
          setDisplayForm={setDisplayForm}
          displayForm={displayForm}
          setIsEditing={setIsEditing}
        />
      )}
    </>
  );
}

export default MainDisplay;
