import React from "react";

function JournalPost({ displayPost, handleDelete, handleUpdate }) {

  return (
    <div className="main-display-div">
      {displayPost && (
        <div>
          <h2>{displayPost.title}</h2>
          {displayPost.content}
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleUpdate}>Edit</button>
        </div>
      )}
      {!displayPost && "Nothing to see here!"}
    </div>
  );
}

export default JournalPost;
