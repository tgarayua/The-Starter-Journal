import React from "react";

function GratitudeCard({
  gratitude_item,
  setGratitudeItem,
  setIsEditingGratitudeItem,
  handleShowForm,
  handleDelete
}) {
  return (
    <li>
      {gratitude_item.title}
      <button
        onClick={() => {
          setGratitudeItem(gratitude_item);
          setIsEditingGratitudeItem(true);
          handleShowForm();
        }}
      >
        Edit
      </button>
      <button onClick={e => {
        handleDelete(e, gratitude_item.id);
      }}>Delete</button>
    </li>
  );
}

export default GratitudeCard;
