import { useEffect, useState } from "react";
import "./style/comment.css";
const Comments = [
	{
		id: 0,
		user: "NotAWeggie",
		comment: "Good song"
	},
	{
		id: 1,
		user: "JackBrown",
		comment: "The song is bop!"
	},
	{
		id: 2,
		user: "VeganVeteran",
		comment: "I love the song"
	},
	{
		id: 3,
		user: "sakurazaka98",
		comment: "すごいねえ～"
	}
];
function ViewMore() {
	return (
		<a href="#!">
			<u>Show all comments</u>
		</a>
	);
}
function CommentComponent({ type = 2 }) {
	const [Comments, setComments] = useState([]);
	const [commentStatus, setCommentStatus] = useState(false);
	useEffect(() => {
		let effectDouble = false;
		if (effectDouble) return;
		fetch("https://dummyjson.com/comments")
			.then((x) => x.json())
			.then((x) => {
				if (effectDouble) return;
				setComments(x);
				setCommentStatus(true);
			});
		return () => {
			effectDouble = true;
		};
	}, []);
	return (
		<div className="comment_section">
			<h1>Comment ({Comments?.limit ?? 0}) </h1>
			{!commentStatus && "No comment available"}
			{type == 1
				? Comments?.comments
						?.slice(0, 3)
						.map(({ postId, user, body }) => {
							return (
								<div key={postId} className="comment">
									<img
										src={
											"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF02Jj8T2t7PdkytAw42HDuuSz7yXguKn8Lg&s"
										}
										alt={user.username}
									/>
									<div>
										<b>{user.username}</b>
										<p>{body}</p>
										<button>Reply</button>
									</div>
									<br />
								</div>
							);
						})
				: Comments?.comments
						?.slice(7, 10)
						.map(({ postId, user, body }) => {
							return (
								<div key={postId} className="comment">
									<img
										src={
											"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF02Jj8T2t7PdkytAw42HDuuSz7yXguKn8Lg&s"
										}
										alt={user.username}
									/>
									<div>
										<b>{user.username}</b>
										<p>{body}</p>
										<button>Reply</button>
									</div>
									<br />
								</div>
							);
						})}
			{commentStatus && ViewMore()}
		</div>
	);
}
export default CommentComponent;
