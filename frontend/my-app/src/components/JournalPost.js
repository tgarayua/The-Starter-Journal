import React from "react";

function JournalPost({
  displayPost,
  handleDelete,
  setDisplayForm,
  setJournalTitle,
  setJournalContent,
  setIsEditing
}) {

  const handleEnterEditMode = () => {
    setDisplayForm(true)
    setIsEditing(true)
    setJournalTitle(displayPost.title)
    setJournalContent(displayPost.content)
  }

  return (
    <div className="main-display-div">
      {displayPost && (
        <div>
          <h2>{displayPost.title}</h2>
          {displayPost.content}
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEnterEditMode}>Edit</button>
        </div>
      )}
      {!displayPost && "Nothing to see here!"}
    </div>
  );
}

export default JournalPost;
