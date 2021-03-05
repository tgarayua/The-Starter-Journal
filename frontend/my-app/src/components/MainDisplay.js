import React, { useState } from "react";
import Form from "./Form"

function MainDisplay({ displayPost, displayForm, journalTitle, setJournalTitle, journalContent, setJournalContent, submit }) {

    return(
        <div> 
            {displayForm ? 
                <Form 
                journalTitle={journalTitle}
                setJournalTitle={setJournalTitle}
                journalContent={journalContent}
                setJournalContent={setJournalContent}
                submit={submit}
                /> 
            : 
            <div className="main-display-div">
                {displayPost && <h2>{displayPost.title}</h2>}
                {displayPost && displayPost.content}
                {!displayPost && "Nothing to see here!"}
            </div>
            }
        </div>
    )
    }
    
    export default MainDisplay;