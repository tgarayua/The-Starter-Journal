import React from "react";
import TaskList from "./TaskList";
import GratitudeList from "./GratitudeList";
import JournalList from "./JournalList";

function ListBar() {
    return(
        <div className="list-bar-div">
            <TaskList />
            <GratitudeList />
            <JournalList />
        </div>
    )
}

export default ListBar;