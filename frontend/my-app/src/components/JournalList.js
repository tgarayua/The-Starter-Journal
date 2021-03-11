import React, { useState } from "react";
import JournalCard from "./JournalCard";

function JournalList({
  journal_posts,
  setDisplayPost,
  setDisplayForm,
  setIsEditing,
  setJournalTitle,
  setJournalContent,
}) {
  const handleEnterNewPostMode = () => {
    setDisplayForm(true);
    setIsEditing(false);
    setJournalTitle("");
    setJournalContent("");
  };

  return (
    <div className="list-journal">
      <div className="journal-bar-header header">
        <span class="sidebar-header">Journal List</span>
        <span class="icon">
          <i class="far fa-sticky-note fa-lg" onClick={handleEnterNewPostMode} />
        </span>
      </div>
      <div className="journal-bar-body">
        {journal_posts
          ? journal_posts.sort((a, b) => b.id - a.id ).map((journal_post) => {
              return (
                <JournalCard
                  key={journal_post.id}
                  journal_post={journal_post}
                  setDisplayPost={setDisplayPost}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

export default JournalList;
