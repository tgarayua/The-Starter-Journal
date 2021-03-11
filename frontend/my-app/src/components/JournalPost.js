import React from "react";
import welcomeImage from "../images/introImage.gif";

function JournalPost({
  displayPost,
  handleDelete,
  setDisplayForm,
  setJournalTitle,
  setJournalContent,
  setIsEditing,
}) {
  const handleEnterEditMode = () => {
    setDisplayForm(true);
    setIsEditing(true);
    setJournalTitle(displayPost.title);
    setJournalContent(displayPost.content);
  };

  return (
    <>
      {displayPost && (
        <div className="main-content">
          <div className="display-post-header">
            <span className="header">{displayPost.title}</span>
            <button className="delete-button" onClick={handleDelete}>Delete</button>
            <button className="edit-button" onClick={handleEnterEditMode}>Edit</button>
          </div>
          <p>{displayPost.content}</p>
        </div>
      )}
      {!displayPost && (
        <p className="welcome-text header">Welcome to The Starter Journal</p>
      )}
      {!displayPost && (
        <img src={welcomeImage} className="main-display-image" />
      )}
    </>
  );
}

export default JournalPost;
