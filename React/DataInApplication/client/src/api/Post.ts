import { useEffect, useState } from 'react';
import { z } from 'zod';
import { validateResponse } from './validateResponse';

export const PostSchema = z.object({
  id: z.string(),
  title: z.string(),
  text: z.string(),
  userId: z.string(),
  createdAt: z.number(),
});

export type Post = z.infer<typeof PostSchema>;

export const PostList = z.array(PostSchema);

export type PostList = z.infer<typeof PostList>;

export const FetchPostListSchema = z.object({
  list: PostList,
});

type FetchPostListResponse = z.infer<typeof FetchPostListSchema>;

export function fetchPostList(): Promise <FetchPostListResponse> {
  return fetch("/api/notes")
  .then((response)=>response.json())
  .then((data) => FetchPostListSchema.parse(data));
}

interface IdleRequestState{
status: "idle";
}

interface LoadRequestState{
status: "pending";
}

interface SuccessRequestState{
  status:"success";
  data:PostList;
}

interface ErrorRequestState{
  status: "error";
  error: unknown;
}

type  RequestState = 
|IdleRequestState
|LoadRequestState
|SuccessRequestState
|ErrorRequestState;


export function useNotesList(){
 const [state, setState] = useState<RequestState>({status: "idle"});
 
 useEffect(() => {
  if (state.status === "pending") {
  fetchPostList()
    .then((data) => {
      setState({ status: "success",  data: data.list });
    })  
    .catch((error)=>{
      setState({status: "error", error})
    });
  }
 }, [state]);

 useEffect(()=> {
setState({status: "pending"});
 },[]);

 const refetch = () => {
  setState({status: "pending"})
 }

 return{
  state,
  refetch
 };
}

export function createNote({title, text}: {title: string, text: string}): Promise<void>{
  return fetch("api/notes",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      text,
    }),
  }).then((validateResponse))
  .then(()=> undefined);
}

export function exit(): Promise<void>{
  return fetch("api/logout",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    }) .then(()=> undefined);
}