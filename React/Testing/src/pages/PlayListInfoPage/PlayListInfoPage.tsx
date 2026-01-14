import { PLAYLISTS } from "../../data";
import { PlayListPage } from "../PlaylistPage/PlayListPage";
import "./PlayListInfoPage.css";
import { Link, useParams } from "react-router-dom";

export function PlayListInfoPage(){

const {playlistId} = useParams();
const list = PLAYLISTS[Number(playlistId)];


if (!list) {
  return (
    <div className="PlayListInfoPage">
      <h2>UserInfoPage</h2>
      <div className="list">
        <p>Такого плейлиста нет</p>
      </div>
    </div>
  );
}
if(list){
  const filter = list.genre.toLocaleLowerCase();
  return(
  <div className="PlayListInfoPage" >
    <h2>PlayListInfoPage</h2>
    <p className="playList-p">Жанр: <Link to={`/playlists?searchGenre=${filter}`} >
    {list.genre} 
    </Link> </p>
    <p className="playList-p2">Название: {list.name}</p>
    <ul className="PlayList-ul">
      { list.songs.map((song, index) =><li className="PlayList-li" key={index}>-{song}</li> ) }
    </ul>
  </div>
)
}

}