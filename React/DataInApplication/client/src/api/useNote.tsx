import { useQuery } from "@tanstack/react-query";
import { fetchPostList } from "./Post";
import { queryClient } from "./queryClient";
import { fetchMe } from "./User";

export function useNoteListQuery () {
  const noteListQuery = useQuery({
    queryFn:()=> fetchPostList(),
    queryKey: ["posts"]
  }, queryClient);

  return noteListQuery;
}

export function useMeQuery (){
  const meQuery = useQuery({
    queryFn:()=> fetchMe(),
    queryKey: ["users", "me"],
  });

  return meQuery;
}



