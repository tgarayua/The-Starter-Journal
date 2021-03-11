import React, { useState } from "react";
import JournalCard from "./JournalCard";

function JournalList({
  journal_posts,
  setDisplayPost,
  setDisplayForm,
  setIsEditing,
  setJournalTitle,
  setJournalContent
}) {

  const handleEnterNewPostMode = () => {
    setDisplayForm(true)
    setIsEditing(false)
    setJournalTitle("")
    setJournalContent("")
  }

  return (
    <div className="list-journal">
      <div className="journal-bar-header">
      <h3>Journal List</h3>
      <button onClick={handleEnterNewPostMode}>
        New Journal Post
      </button>
      </div>
      <div className="journal-bar-body">
      <ul>
        {journal_posts ? 
        journal_posts.reverse().map((journal_post) => {
          return (
            <JournalCard
              key={journal_post.id}
              journal_post={journal_post}
              setDisplayPost={setDisplayPost}
            />
          );
        })
        :
        null
      }
      </ul>
      </div>
    </div>
  );
}

export default JournalList;
