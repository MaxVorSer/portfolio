import { Flex } from "antd";
import Api from "../../api/api";
import { Albums } from "../../models";
import Album from "../Album/Album";
import { ReactElement } from "react";

	const getData = async (): Promise<Albums> => {
		const data = await Api.getAlbums();
		return data;
	};

	const AlbumsList = async (): Promise<ReactElement> => {
		const data = await getData();
	
	return (
		<Flex wrap="wrap" gap="middle" justify="center">
			{data.map((album) => (
				<Album albumId={album.id} key={album.id} />
			))}
		</Flex>
	);
};

export default AlbumsList;
