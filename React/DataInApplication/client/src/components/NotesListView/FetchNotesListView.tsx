import { useNoteListQuery } from "../../api/useNote";
import { Loader } from "../Loader";
import { NotesListView } from "./NotesListView";

export const FetchNotesListVieew = () => {
 const noteQuery = useNoteListQuery();

 switch (noteQuery.status){
     case "pending":
      return <Loader/>
      case "success":
      return  <NotesListView datalist = {noteQuery.data}/>
    case "error":
      <div>
        <span>Произошла ошибка</span>
        <button onClick={()=>noteQuery.refetch()}>Повторить запрос</button>
      </div>
  }

}