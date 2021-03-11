import React from "react";
import welcomeImage from '../images/introImage.gif';

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
    <>
      {displayPost && (
        <div className="main-content">
          <h2 className="header">{displayPost.title}</h2>
          <p>{displayPost.content}</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEnterEditMode}>Edit</button>
        </div>
        )}
        {!displayPost && <p className="welcome-text header">Welcome to The Starter Journal</p>}
        {!displayPost && <img src={welcomeImage} className="main-display-image"/>}
    </>
  );
}

export default JournalPost;
