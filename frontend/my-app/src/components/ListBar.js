import React from "react";
import TaskList from "./TaskList";
import GratitudeList from "./GratitudeList";
import JournalList from "./JournalList";

function ListBar({
  gratitude_list,
  tasks,
  journal_posts,
  setDisplayPost,
  setDisplayForm,
  displayForm,
  setIsEditing,
  setJournalTitle,
  setJournalContent
}) {
  return (
    <div className="list-bar-div">
      <TaskList tasks={tasks} />
      <GratitudeList gratitude_list={gratitude_list} />
      <JournalList
        journal_posts={journal_posts}
        setDisplayPost={setDisplayPost}
        setDisplayForm={setDisplayForm}
        displayForm={displayForm}
        setIsEditing={setIsEditing}
        setJournalTitle={setJournalTitle}
        setJournalContent={setJournalContent}
      />
    </div>
  );
}

export default ListBar;
