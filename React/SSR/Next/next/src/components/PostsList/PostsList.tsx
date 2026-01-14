import { Space } from "antd";
import Post from "../Post/Post";
import Api from "../../api/api";
import { Posts } from "../../models";
import { ReactElement } from "react";

	const getData = async (): Promise<Posts> => {
		const data = await Api.getPosts();
		return data;
	};

	const PostsList = async (): Promise<ReactElement> => {
		const data = await getData();
	

	return (
		<Space direction="vertical" size="middle" style={{ display: "flex" }}>
			{data.map((post) => (
				<Post post={post} key={post.id} />
			))}
		</Space>
	);
};

export default PostsList;
