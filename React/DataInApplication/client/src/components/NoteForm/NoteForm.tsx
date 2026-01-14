import { FormField } from "../FormField";
import { Button } from "../Button";
import "./NoteForm.css";
import { FC } from "react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../api/queryClient";
import { createNote, exit } from "../../api/Post";
import { ButtonExit } from "../Button/ButtonExit";
import { FetchNotesListVieew } from "../NotesListView/FetchNotesListView";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


export interface IPostFormProp{}

const CreateNoteSchema = z.object({
  title: z.string().min(5, "Текст заметки должен быть не мение 5 символов"),
  text: z.string().min(10, "Текст заметки должен быть не мение 10 символов").max(300, "Текст заметки должен быть не болие 300 символов"),
 })

type CreateNoteForm = z.infer<typeof CreateNoteSchema>;

export const NoteForm: FC<IPostFormProp> = () => {
  
  
  const {register, handleSubmit, formState:{errors}} = useForm<CreateNoteForm>({
    resolver: zodResolver(CreateNoteSchema)
  })
  
  
  const createNoteMutation = useMutation({
    mutationFn: createNote,
    onSuccess() {
      queryClient.invalidateQueries({queryKey: ["posts"]})
    },
  }, queryClient)

  const exitMutation = useMutation({
    mutationFn:() => exit(),
    onSuccess(){
      queryClient.invalidateQueries({queryKey:["users","me"]})
    }
   }, queryClient)
  
   const handleSubmitExit = (event) => {
      event.preventDefault();
      exitMutation.mutate();
          }
       
  return (
    <div className="div-class">
       <form className="note-form" onSubmit= {handleSubmit(({text, title})=>{
        createNoteMutation.mutate({text, title} )
        })}>
      <FormField label="Заголовок" errorMessage={errors.title?.message}>
        <input type="text"
        {...register("title")}
         />
      </FormField>
      <FormField label="Текст" errorMessage={errors.text?.message}>
        <textarea
        {...register("text")}
        />
      </FormField>
      <Button isLoading={createNoteMutation.isPending}>Сохранить</Button>
    </form>
    <FetchNotesListVieew/>
    <ButtonExit isLoading={exitMutation.isPending} onClick={handleSubmitExit}>Выход</ButtonExit>
    </div>
  );
};
