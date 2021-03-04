import React, { useEffect } from "react";

function JournalCard({ journal_post, setDisplayPost }) {
    return(
        <li onClick={() => setDisplayPost(journal_post)}>
            {journal_post.title}
        </li>
    )
}

export default JournalCard;