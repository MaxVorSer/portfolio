import "./LoginForm.css";
import { FormField } from "../FormField";
import { Button } from "../Button";
import { useMutation } from "@tanstack/react-query"
import { login } from "../../api/User";
import { FormEventHandler, useState } from "react";
import { queryClient } from "../../api/queryClient";

export const LoginForm = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const loginMutation = useMutation({
    mutationFn: () => login(email, password),
    onSuccess(){
queryClient.invalidateQueries({queryKey:["users","me"]})
    },
  },queryClient)

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    loginMutation.mutate();
  }

  return (
    <form className="login-form"onSubmit={handleSubmit}>
      <FormField label="Email">
        <input
        type = "text"
        name = "email"
        onChange={(event) => setUsername(event.target.value)}
        value = {email} />
      </FormField>
      <FormField label="Пароль">
        <input type="password"
             name = "password"
        onChange={(event) => setPassword(event.target.value)}
        value = {password} />
      </FormField>
      {loginMutation.error && <span>{loginMutation.error.message}</span>}
      <Button type="submit" isLoading={loginMutation.isPending}>Войти</Button>
    </form>
  );
};
