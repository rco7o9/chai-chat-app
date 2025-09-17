// libs
import { useRef, useLayoutEffect } from "react";
import { Skeleton } from "baseui/skeleton";

// constants
import { SENDER, LOADING_MESSAGE } from "@/constants";

// types
import type { ChatMessage } from "@/types";

const BotMessage = ({
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
          <Skeleton height="18px" width="96px" animation />
        ) : (
          <>{message.message}</>
        )}
      </div>
    </div>
  );
};

const UserMessage = ({
  message,
  className,
}: {
  message: ChatMessage;
  className: string;
}) => {
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

export const ChatBody = ({
  className,
  messages,
}: {
  className: string;
  messages: ChatMessage[];
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className={`${className} flex flex-col justify-start gap-8 overflow-y-scroll`}
    >
      {messages.map((message) => {
        const Message =
          message.sender === SENDER.User ? UserMessage : BotMessage;
        return <Message key={message.id} message={message} className="w-2/3" />;
      })}
    </div>
  );
};
