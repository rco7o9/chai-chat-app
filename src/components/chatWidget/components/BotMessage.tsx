// libs
import { ThreeDots } from "react-loader-spinner";

// constants
import { LOADING_MESSAGE } from "@/constants";

// types
import type { ChatMessage } from "@/types";

export const BotMessage = ({
  message,
  className,
}: {
  message: ChatMessage;
  className: string;
}) => {
  return (
    <div className={`${className} self-start flex`}>
      <div className="text-2xl">🤖</div>
      <div
        style={{ backgroundColor: "rgb(62 123 170)" }}
        className="p-2 rounded-lg rounded-tl-none ml-2 mt-3"
      >
        {message.id === LOADING_MESSAGE.id ? (
          <ThreeDots height="18" width="28" color="lightgrey" />
        ) : (
          <>{message.message}</>
        )}
      </div>
    </div>
  );
};
