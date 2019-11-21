import React, {useContext} from 'react';
import Boards from './Boards';
import SavedArticles from "./SavedArticles"
import { BoardContext } from '../contexts/BoardContext';


const Profile = () => {
    const { logged, setLogged } = useContext(BoardContext);
    setLogged(localStorage.getItem("token") ? true : false)
    return(
        <div className="user-profile">
            <SavedArticles />
            <Boards/>
        </div>
    )
}

export default Profile;
