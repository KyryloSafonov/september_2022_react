import React from 'react';
import { useForm } from "react-hook-form";
import { usersRequests } from "../../api/requests/usersRequests";
import { commentRequests } from "../../api/requests/commentRequests";

export const CommentsForm = ({setComments}) => {
    const { register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        mode: 'all',
    })


    const submit = async (data) => {
        await commentRequests.addComment(data).then(({data}) => setComments((prevState) => [...prevState, data]))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="name of comment" {...register('name')}/>
            <button>Create new comment</button>
        </form>
    );
};
