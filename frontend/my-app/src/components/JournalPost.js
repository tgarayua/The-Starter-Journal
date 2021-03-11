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
      {!displayPost && <div className="main-display-image">
      </div>}
      {displayPost && (
        <div className="main-content">
          <h2>{displayPost.title}</h2>
          <p>{displayPost.content}</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEnterEditMode}>Edit</button>
        </div>
      )}
      {!displayPost && <p className="welcome-text">Welcome to The Starter Journal</p>}
    </div>
  );
}

export default JournalPost;
