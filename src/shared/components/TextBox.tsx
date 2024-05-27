// import { Input } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import style from "./textbox.module.css";
import { ulid } from "ulidx";
import { IPost } from "../models/post";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { CreatePost, CreatePostJsonServer } from "@/actions/PostAction";
import { GetProfileById } from "@/actions/ProfileAction";
import { useAuth } from "@/context/AuthContext";
import { useToken } from "../hooks/useToken";

type TextBoxProps = {
  linkedTo: string | null;
};
export const TextBox = ({ linkedTo = null }: TextBoxProps) => {
  function handleClick() {
    if (input.current == null || input.current.value === "") {
      return;
    }

    const newPost: any = {
      title: "No title",
      content: input.current.value,
      token: token(),
    };

    const newPostJsonServer: IPost = {
      id: ulid(),
      user_id: idLoggedUser,
      content: input.current.value,
      createdAt: `${new Date().toISOString()}`,
      likes: 0,
      deslikes: 0,
      linked_to: linkedTo,
    };

    addNewPost(newPost);
    addNewPostJsonServer(newPostJsonServer);
    input.current.value = "";
  }

  const input = useRef<HTMLTextAreaElement>(null);
  const { mutate: addNewPost } = CreatePost();
  const { mutate: addNewPostJsonServer } = CreatePostJsonServer();
  const { user: loggedUser } = useAuth();
  const name = loggedUser?.first_name;

  const idLoggedUser = loggedUser?.id ?? "";
  const { response: profile } = GetProfileById(idLoggedUser);
  const { token } = useToken();

  return (
    <div>
      <div className="flex flex-col w-full align-middle pb-10 border-b-2  pl-3 pr-3 border-rebeccapurple2">
        <div className="w-full flex flex-row gap-8 items-center">
          <Avatar className="w-12 h-12 rounded-full">
            <AvatarImage
              src={
                profile?.profile_image_link ?? "src/assets/chorro-timido.JPG"
              }
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <textarea
            onKeyDown={(e) => {
              e.key == "Enter" && handleClick();
            }}
            ref={input}
            className="bg-transparent py-5 w-full content-center border-none text-white outline-none resize-none"
            name="text"
            maxLength={400}
            placeholder={`No que voce está pensando ${name}?`}
          ></textarea>
        </div>
        <div className="self-end justify-self-end w-fit h-fit">
          <Button
            onClick={handleClick}
            className=" bg-rebeccapurple2 hover:bg-rebeccapurple w-full h-full rounded-full font-bold"
          >
            POST
          </Button>
        </div>
      </div>
    </div>
  );
};
