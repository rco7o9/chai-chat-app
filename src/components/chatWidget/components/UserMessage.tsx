// types
import type { ChatMessage } from "@/types";
import type { JSX } from "react";

export const UserMessage = ({
  message,
  className,
}: {
  message: ChatMessage;
  className: string;
}): JSX.Element => {
  return (
    <div className={`${className} self-end flex justify-end`}>
      <div
        style={{ backgroundColor: "#1d1f1f" }}
        className="p-2 rounded-lg rounded-tr-none mr-2 mt-3"
      >
        {message.message}
      </div>
      <div className="text-2xl">👱🏽</div>
    </div>
  );
};
