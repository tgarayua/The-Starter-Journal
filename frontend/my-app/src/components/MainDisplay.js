import React from "react";

function MainDisplay({ displayPost }) {
    return(
        <div className="main-display-div">
            {displayPost && <h2>{displayPost.title}</h2>}
            {displayPost && displayPost.content}
            {!displayPost && "Nothing to see here!"}
        </div>
         
    )
}

export default MainDisplay;