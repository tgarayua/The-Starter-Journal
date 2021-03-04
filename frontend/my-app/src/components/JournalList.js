import React, { useState } from "react";
import JournalCard from "./JournalCard"

function JournalList({ journal_posts, setDisplayPost }) {
    return(
        <div className="list-journal">
            <h3>Journal List</h3>
            <ul>
                {journal_posts?.map(journal_post => {
                    return <JournalCard 
                        key={journal_post.id} 
                        journal_post={journal_post}
                        setDisplayPost={setDisplayPost}
                    />
                })}
            </ul>
        </div>
    )
}

export default JournalList;