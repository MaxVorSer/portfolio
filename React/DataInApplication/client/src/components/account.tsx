import { Loader } from "./Loader"
import { AuthForm } from "./AuthForm"
import { NoteForm } from "./NoteForm"
import { useMeQuery } from "../api/useNote"


export const Account = () => {
const meQuery = useMeQuery();

switch(meQuery.status){
  case "pending":
    return <Loader/>
  case "error":
    return <AuthForm/>
  case "success":
    return   <NoteForm/>;
  }
};