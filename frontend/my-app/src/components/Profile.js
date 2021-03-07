import React, { useEffect, useState } from "react";
import ListBar from "./ListBar";
import MainDisplay from "./MainDisplay";

function Profile() {
  const [userData, setUserData] = useState({});
  const [displayPost, setDisplayPost] = useState();
  const [displayForm, setDisplayForm] = useState(false);
  const [journalTitle, setJournalTitle] = useState("");
  const [journalContent, setJournalContent] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/users/1")
      .then((r) => r.json())
      .then((userData) => {
        setUserData(userData);
      });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/journal_posts/", {
      method: "POST",
      body: JSON.stringify({ title: journalTitle, content: journalContent }),
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then(() => {
        setJournalTitle(journalTitle);
        setJournalContent(journalContent);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/journal_posts/${displayPost.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
    .then(
      setDisplayPost(null)
    );
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/journal_posts/${displayPost.id}`, {
      method: "PUT",
      body: JSON.stringify({ title: journalTitle, content: journalContent }),
      headers: { "Content-Type": "application/json" },
    })
    .then(
      setDisplayPost(displayPost)
    );
  };

  useEffect(() => {
    setDisplayForm(false);
    setDisplayPost(displayPost);
  }, [displayPost]);

  return (
    <div className="profile-div">
      <ListBar
        gratitude_list={userData.gratitude_lists}
        tasks={userData.task_lists}
        journal_posts={userData.journal_posts}
        setDisplayPost={setDisplayPost}
        setDisplayForm={setDisplayForm}
        displayForm={displayForm}
      />
      <MainDisplay
      handleUpdate={handleUpdate}
        displayPost={displayPost}
        displayForm={displayForm}
        journalTitle={journalTitle}
        setJournalTitle={setJournalTitle}
        journalContent={journalContent}
        setJournalContent={setJournalContent}
        submit={submit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Profile;
