import React, {useContext} from "react";
import UserContext from "./UserContext";

export default function UserProfile() {
    const userData = useContext(UserContext);
    return (
        <div>
            <h2> {UserData.name}</h2>
            <p>Age: {UserData.age}</p>
            <p>Bio: {UserData.bio}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
};