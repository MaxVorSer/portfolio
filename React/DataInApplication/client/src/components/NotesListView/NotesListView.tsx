import "./NotesListView.css";
import { NoteView } from "../NoteView";
import { useMeQuery } from "../../api/useNote";

export const NotesListView = ({datalist}) => {
const meQuery = useMeQuery();
const id = meQuery.data?.id;

  return (
        <ul className="note-list-view">
            {datalist.list.filter((data) => (data.userId === id)).map((data) => (
        <li key={data.id} className="post-list__item">
          <NoteView data={data} />
        </li>
      ))}
    </ul>
    
  );
};
