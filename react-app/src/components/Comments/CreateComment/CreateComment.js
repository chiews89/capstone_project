import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createNewComment } from "../../../store/comments";

export const CreateNewComment = ({post}) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const user = useSelector((state) => state.session.user?.id)

    const [comment, setComment] = useState('')

    const newCommentSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            user_id: user,
            post_id: post.id,
            comment,
        }
        const newComment = await dispatch(createNewComment(payload))
        if (newComment) {

        }
    }


    return (
        <form className="new-comment-container" onSubmit={newCommentSubmit}>
            <label className="comment-label">
                <input placeholder="Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                />
            </label>
            <button
          className="create-post-button"
          type="submit"
        //   disabled={errorValidator.length > 0}
        >
          Submit
        </button>
        {/* <button className="cancel-add-button" type="true" onClick={onClose}>
          Cancel
        </button> */}
        </form>
    )
}
