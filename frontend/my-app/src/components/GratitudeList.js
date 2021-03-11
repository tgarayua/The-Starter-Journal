import React, { useState } from "react";
import GratitudeCard from "./GratitudeCard";

function GratitudeList({ gratitude_list, setUserData }) {
  const [gratitudeTitle, setGratitudeTitle] = useState("");
  const [gratitudeItem, setGratitudeItem] = useState({});
  const [displayGratitudeForm, setDisplayGratitudeForm] = useState(false);
  const [isEditingGratitudeItem, setIsEditingGratitudeItem] = useState(false);

  const handleCreateGratitudeItem = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/gratitude_item/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: gratitudeTitle }),
    })
      .then((r) => r.json())
      .then((user) => {
        setUserData(user)
        setGratitudeTitle(gratitudeTitle);
        setDisplayGratitudeForm(false);
      });
    };
    
    const handleShowForm = value => {
      setGratitudeTitle(value);
      setDisplayGratitudeForm(true);
    };
    
    const handleEditGratitudeItem = e => {
      e.preventDefault();
      fetch(`http://localhost:3000/gratitude_item/${gratitudeItem.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: gratitudeTitle }),
      })
      .then(res => res.json())
      .then((user) => {
        setUserData(user)
        setDisplayGratitudeForm(false);
    });
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    fetch(`http://localhost:3000/gratitude_item/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
    .then(res => res.json())
    .then(user => {
      setUserData(user)
    })
  };


  return (
    <div className="list-gratitude">
      <div className="gratitude-header header">
      <h3>GratitudeList</h3>
      <button
        onClick={
          displayGratitudeForm
            ? isEditingGratitudeItem
              ? handleEditGratitudeItem
              : handleCreateGratitudeItem
            : () => handleShowForm("")
        }
      >
        {displayGratitudeForm ? (isEditingGratitudeItem ? "Update" : "Submit"): "Create"} Gratitude Item
      </button>
      </div>
      <div className="gratitude-body">
      {displayGratitudeForm && (
        <input
          type="text"
          name="title"
          id="gratitude-title"
          value={gratitudeTitle}
          onChange={(e) => setGratitudeTitle(e.target.value)}
        />
      )}
      
        {gratitude_list?.map((gratitude_item) => {
          return (
            <GratitudeCard
              setGratitudeItem={setGratitudeItem}
              handleEditGratitudeItem={handleEditGratitudeItem}
              key={gratitude_item.id}
              gratitude_item={gratitude_item}
              isEditingGratitudeItem={isEditingGratitudeItem}
              setIsEditingGratitudeItem={setIsEditingGratitudeItem}
              handleShowForm={handleShowForm}
              handleDelete={handleDelete}
            />
          );
        })}
      
      </div>
    </div>
  );
}

export default GratitudeList;
