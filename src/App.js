import React, { useEffect, useState } from "react";
import './App.css';
import { Users } from "./componets/Users";
import { UserDetails } from "./componets/UserDetails";
import { getUsers } from "./api/getUsers";

function App() {
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        getUsers().then(resp => setUsers(resp));
    }, []);

    return (
        <div className="App">
            <div className="info-block">
                {!!users.length && <Users users={users} onSelectUser={setUserId}/>}
            </div>
            <div className="divider"/>
            <div className="info-block">
                {!!userId && <UserDetails onRemoveUserDetails={setUserId} userId={userId}/>}
            </div>
        </div>
    );
}

export default App;
