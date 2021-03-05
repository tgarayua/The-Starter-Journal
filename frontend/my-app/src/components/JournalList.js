import React, { useState } from "react";
import JournalCard from "./JournalCard"

function JournalList({ journal_posts, setDisplayPost, setDisplayForm, displayForm,  }) {

    return(
        <div className="list-journal">
            <h3>Journal List</h3>
            <button onClick={() => setDisplayForm(!displayForm)} >New Journal Post</button>
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