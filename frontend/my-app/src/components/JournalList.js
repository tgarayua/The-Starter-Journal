import React from "react";
import JournalCard from "./JournalCard"

function JournalList({ journal_posts }) {

    console.log(journal_posts)

    return(
        <div className="list-journal">
            <h3>Journal List</h3>
            <ul>
                {journal_posts?.map(journal_post => {
                    return <JournalCard 
                        key={journal_post.id} 
                        journal_post={journal_post}
                    />
                })}
            </ul>
        </div>
    )
}

export default JournalList;