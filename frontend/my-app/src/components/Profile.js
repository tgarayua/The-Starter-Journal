import React, { useReducer } from "react";
import ListBar from "./ListBar";
import MainDisplay from "./MainDisplay";

function Profile() {
    // some state (user)


    // make fetch request fetch request => http://localhost:3000/users/1
    // save response to state
    // Pass specific parts of state down as props

    return (
    <div className="profile-div">
        <ListBar  />
        <MainDisplay />
    </div>
    );
}

export default Profile;
