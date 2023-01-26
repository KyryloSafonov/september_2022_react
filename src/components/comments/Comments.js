import React from 'react';
import { useNavigate } from "react-router-dom";

export const Comments = ({comments = []}) => {
    const navigate = useNavigate();
    return (
        <div style={{
            display:
                'flex',
            flexDirection: 'column',
            gap: 10,
            height: 500,
            overflowY: 'scroll',
        }}>
            {comments.map(item => {
                const {postId, id, name} = item;
                return (
                    <div
                        key={id}
                        style={{
                            background: 'lightgrey'
                        }}
                    >
                        <div>ID: {id}</div>
                        <div>PostID: {postId}</div>
                        <div>Comment Name: {name}</div>
                        <button onClick={() => navigate(postId.toString())}>Get Post</button>
                    </div>
                )
            })}
        </div>
    );
};
