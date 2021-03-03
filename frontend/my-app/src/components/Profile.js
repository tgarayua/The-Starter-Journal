import React, { useReducer, useEffect, useState } from "react";
import ListBar from "./ListBar";
import MainDisplay from "./MainDisplay";

function Profile() {

    const [ userData, setUserData ] = useState({})
    // some state (user)


    // make fetch request fetch request => http://localhost:3000/users/1
    // save response to state
    // Pass specific parts of state down as props

    useEffect(() => {
        fetch("http://localhost:3000/users/1")
        .then((r) => r.json())
        .then((userData) => {
            setUserData(userData);
        });
    }, []);

    return (
    <div className="profile-div">
        <ListBar 
            gratitude_list={userData.gratitude_lists}
            tasks={userData.task_lists}
            journal_posts={userData.journal_posts}
        />
        <MainDisplay />
    </div>
    );
}

export default Profile;
