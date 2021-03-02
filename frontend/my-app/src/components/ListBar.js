import React from "react";
import TaskList from "./TaskList";
import GratitudeList from "./GratitudeList";
import JournalList from "./JournalList";

function ListBar() {
    return(
        <div className="list-bar-div">
            <h2>ListBar</h2>
            <TaskList />
            <GratitudeList />
            <JournalList />
        </div>
    )
}

export default ListBar;