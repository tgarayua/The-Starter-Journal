import React, { useEffect, useState } from "react";
import ListBar from "./ListBar";
import MainDisplay from "./MainDisplay";

function Profile() {
  const [userData, setUserData] = useState({});
  const [displayPost, setDisplayPost] = useState();
  const [displayForm, setDisplayForm] = useState(false);
  const [journalTitle, setJournalTitle] = useState("");
  const [journalContent, setJournalContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);


  useEffect(() => {
    fetch("http://localhost:3000/user/1")
      .then((r) => r.json())
      .then((userData) => {
        setUserData(userData);
      });
  }, []);

  const handleCreate = e => {
    e.preventDefault();
    fetch("http://localhost:3000/journal_post/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: journalTitle, content: journalContent }),
    })
      .then((r) => r.json())
      .then(() => {
        setJournalTitle(journalTitle);
        setJournalContent(journalContent);
        setDisplayForm(false);
      });
  };

  const handleDelete = e => {
    e.preventDefault();
    fetch(`http://localhost:3000/journal_post/${displayPost.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
    .then(setDisplayPost(null));
  };

  const handleUpdate = e => {
    e.preventDefault();
    fetch(`http://localhost:3000/journal_post/${displayPost.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: journalTitle, content: journalContent }),
    })
    .then(() => {
      setDisplayPost(displayPost);
      setDisplayForm(false);
    });
  };

  useEffect(() => {
    setDisplayForm(false);
    setDisplayPost(displayPost);
  }, [displayPost]);

  return (
    <div className="profile-div">
      <ListBar
        gratitude_list={userData.gratitude_items}
        tasks={userData.tasks}
        journal_posts={userData.journal_posts}
        setDisplayPost={setDisplayPost}
        setDisplayForm={setDisplayForm}
        displayForm={displayForm}
        setIsEditing={setIsEditing}
        setJournalTitle={setJournalTitle}
        setJournalContent={setJournalContent}
      />
      <MainDisplay
        setDisplayForm={setDisplayForm}
        displayPost={displayPost}
        displayForm={displayForm}
        journalTitle={journalTitle}
        setJournalTitle={setJournalTitle}
        journalContent={journalContent}
        setJournalContent={setJournalContent}
        handleCreate={handleCreate}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
    </div>
  );
}

export default Profile;
