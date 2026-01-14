import { Photos } from "../../models";
import Api from "../../api/api";
import "./index.css";
import { ReactElement } from "react";

type Props = {
	albumId: number;
};

const Album = async ({albumId}: Props): Promise<ReactElement> => {
		
	const getData = async (): Promise<Photos> => {
		const data = await Api.getPhotos(albumId);
		return data;
	};

	const data = await getData();

	return (
		<div className="album-container">
			{data.map((photo) => (
				<div key={photo.id} className="photo-container">
					<img src={photo.url} className="photo-img" />
				</div>
			))}
		</div>
	);
};

export default Album;
