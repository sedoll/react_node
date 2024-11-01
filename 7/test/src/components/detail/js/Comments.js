import styles from "../css/Comments.module.css";
import movieStyles from "../css/MovieDetail.module.css";

function Comments({ comments }) {
  return (
    <div className={`${movieStyles.movie_info}`}>
      <h3>Comment</h3>
      <div className="comment-list">
        {/* {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <p><strong>{comment.user}</strong></p>
              <p>{comment.text}</p>
            </div>
          ))} */}
      </div>
    </div>
  );
}

export default Comments;
