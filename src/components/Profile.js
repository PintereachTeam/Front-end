import React from 'react';
import Boards from './Boards';
import SavedArticles from "./SavedArticles"

const Profile = () => {
    return(
        <div className="user-profile">
            <SavedArticles />
            <Boards/>
        </div>
    )
}

export default Profile;
