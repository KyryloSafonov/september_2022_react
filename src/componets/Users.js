import React from 'react';

export const Users = ({users, onSelectUser}) => {
    return (
        <div>
            {users.map((item) => {
                const {id: userId, name} = item;
                return (
                    <div key={`${userId}-item`}>
                        {userId} --- {name}
                        <button onClick={() => onSelectUser(userId)}>Select user</button>
                    </div>
                )
            })}
        </div>
    );
};
