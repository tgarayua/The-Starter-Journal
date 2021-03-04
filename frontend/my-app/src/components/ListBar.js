import React from "react";
import TaskList from "./TaskList";
import GratitudeList from "./GratitudeList";
import JournalList from "./JournalList";

function ListBar({ gratitude_list, tasks, journal_posts, setDisplayPost }) {

    return(
        <div className="list-bar-div">
            <TaskList tasks={tasks} />
            <GratitudeList gratitude_list={gratitude_list} />
            <JournalList journal_posts={journal_posts} setDisplayPost={setDisplayPost} />
        </div>
    )
}

export default ListBar;