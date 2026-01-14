import { ChangeEvent } from "react";
import { PLAYLISTS } from "../../data";
import "./PlayListPage.css";
import { Link, useSearchParams } from "react-router-dom";

export function PlayListPage(  ) {
  const [searchParam, setSearchParam] = useSearchParams();
  
  const searchGenre = searchParam.get("searchGenre") || "";
  const searchName = searchParam.get("searchName") || "";

  const handleSearchGenre = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSearchParam({ searchGenre: value.toLowerCase(), searchName: searchName });
    
  };
  const handleSearchName = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSearchParam({searchGenre: searchGenre , searchName: value.toLowerCase() });
  };


  const List = PLAYLISTS.filter(({genre})=> genre !== 'Non Music')
  const filteredList = List.filter(({ genre, name }) =>
    genre.toLowerCase().includes(searchGenre) && name.toLowerCase().includes(searchName)
  );

  console.log(searchParam)
  console.log(filteredList)

  return (
    <div className="PlayListPage">
      <h2>PlayListPage</h2>
      <div className="list">
        <label>
					введите жанр{" "}
					<input type="text" value={searchGenre} onChange={handleSearchGenre} />
				</label>
        <label>
					введите название{" "}
					<input type="text" value={searchName} onChange={handleSearchName} />
				</label>
            {filteredList.map(({ id, name }) => (
          <Link to={`/playlists/${id}`} key={id}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}