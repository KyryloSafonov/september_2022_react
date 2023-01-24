import React, { useEffect, useState } from 'react';
import { usersRequests } from "../../api/requests/usersRequests";

export const Users = ({users}) => {
    return (
        <div>
            {users.map(item => {
                const {id, username} = item;
                return (
                    <div key={id}>
                        {id} --- {username}
                    </div>
                )
            })}
        </div>
    );
};
