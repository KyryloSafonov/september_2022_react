import React, { useEffect, useState } from 'react';
import { getUser } from "../api/getUsers";

export const UserDetails = ({userId, onRemoveUserDetails}) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        if (userId) {
            getUser(userId).then(resp => setUser(resp))
        }
    }, [userId])
    console.log(user);
    if (!user) return null;
    return (
        <div>
            UserDetails
            <div>name: {user.name}</div>
            <div>username: {user.username}</div>
            <button onClick={() => onRemoveUserDetails(null)}>Clean up user details</button>
        </div>
    );
};
