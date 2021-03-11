import React from "react";

function GratitudeCard({
  gratitude_item,
  setGratitudeItem,
  setIsEditingGratitudeItem,
  handleShowForm,
  handleDelete,
}) {
  return (
    <div className="gratitude-card">
      <span class="gratitude-title">{gratitude_item.title}</span>
      <span class="edit-button">
        <i
          class="far fa-edit"
          onClick={() => {
            setGratitudeItem(gratitude_item);
            setIsEditingGratitudeItem(true);
            handleShowForm(gratitude_item.title);
          }}
        />
      </span>
      <span class="delete-button">
        <i
          class="far fa-trash-alt"
          onClick={(e) => {
            handleDelete(e, gratitude_item.id);
          }}
        />
      </span>
    </div>
  );
}

export default GratitudeCard;
