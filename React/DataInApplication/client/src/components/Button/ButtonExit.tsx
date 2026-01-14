import { FC, HTMLAttributes } from "react";
import { Loader } from "../Loader";
import "./Button.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import { exit } from "../../api/Post";
import { queryClient } from "../../api/queryClient";

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isDisabled?: boolean;
  kind?: "primary" | "secondary";
  type?: "submit" | "reset" | "button";
}


export const ButtonExit: FC<IButtonProps> = ({
   isLoading,
  isDisabled = isLoading,
  children,
  className,
  kind = "secondary",
  type,
   ...props
}) => {
 
  return (
    <button
      disabled={isDisabled}
      type={type}
      className="button button-exit"
      data-kind={kind}
      {...props}
    >        {isLoading ? <Loader /> : children}
    </button>
  );


};