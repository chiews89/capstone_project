import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getAllComments } from "../../../store/comments";

export const GetAllComments = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const user = useSelector((state) => state.session.user)
    const comments = useSelector((state) => state.comments)
    const commentsArr = Object.values(comments)

    useEffect(() => {
        dispatch(getAllComments())
    }, [dispatch])

    if (!user) {
        history.push('/login')
    }

    return (
        <main className="comments-main">
            <h2>Comments</h2>
            {commentsArr.map((comment) => (
                <div className="comments-container">
                    {comment.username}  {comment.comment}
                </div>
            ))}
        </main>
    )
}
