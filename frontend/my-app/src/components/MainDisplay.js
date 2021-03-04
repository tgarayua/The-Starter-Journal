import React, { useState } from "react";
import Form from "./Form"

function MainDisplay({ displayPost, displayForm }) {

    return(
        <div> 
            {displayForm ? 
                <Form /> 
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
    //    if displayForm
    //   Display a Form Component
    //  <h1>
    // else 
    // Display some contennt component


        // <div className="main-display-div">
        //     {displayPost && <h2>{displayPost.title}</h2>}
        //     {displayPost && displayPost.content}
        //     {!displayPost && "Nothing to see here!"}
        // </div>