import React from "react"

function Form() {
    return(
        <form >
            <label>Title</label>
            <input type="text" name="title" id="journal-title"/>
            <label>Content</label>
            <textarea name="content" id="journal-content" rows="10" cols="50" />
            <input type="submit"/>
        </form>
    )
}

export default Form;