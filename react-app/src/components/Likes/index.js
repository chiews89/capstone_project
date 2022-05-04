import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addALike, removeALike } from "../../store/likes";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const AllLikes = ({ post }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const likes = Object.values(useSelector((state) => state.likes));

  const filteredLikes = likes.filter((like) => {
    return like.post_id === post.id;
  });

  const userLiked = filteredLikes.filter((like) => {
    return like.user_id === user.id;
  });

  const slicedFilter = filteredLikes.slice(0, 1);

  const newLikeSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      user_id: user.id,
      post_id: post.id,
    };
    dispatch(addALike(payload));
  };

  const removeLikeSubmit = async (e) => {
    e.preventDefault();
    dispatch(removeALike(userLiked[0].id));
  };

  return (
    <div className="likes-container">
      <div className="heart-container">
        {userLiked.length < 1 && <AiOutlineHeart onClick={newLikeSubmit} />}
        {userLiked.length > 0 && (
          <span className="filled-heart">
            <AiFillHeart onClick={removeLikeSubmit} />
          </span>
        )}
      </div>
      {slicedFilter.length > 0 && (
        <span className="liked-by">
          Liked by{" "}
          <NavLink to={`/users/${slicedFilter[0].user_id}`}>
            <span className="like-username"> {slicedFilter[0].username}</span>
          </NavLink>{" "}
          and{" "}
          <span className="like-others">{filteredLikes.length - 1} others</span>
        </span>
      )}
    </div>
  );
};
