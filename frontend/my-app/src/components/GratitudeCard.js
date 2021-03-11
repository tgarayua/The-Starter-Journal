import React from "react";

function GratitudeCard({
  gratitude_item,
  setGratitudeItem,
  setIsEditingGratitudeItem,
  handleShowForm,
  handleDelete
}) {
  return (
    <div>
      <p>
        {gratitude_item.title}
      </p>
      <button
        onClick={() => {
          setGratitudeItem(gratitude_item);
          setIsEditingGratitudeItem(true);
          handleShowForm(gratitude_item.title);
        }}
      >
        Edit
      </button>
      <button onClick={e => {
        handleDelete(e, gratitude_item.id);
      }}>Delete</button>
    </div>
  );
}

export default GratitudeCard;
