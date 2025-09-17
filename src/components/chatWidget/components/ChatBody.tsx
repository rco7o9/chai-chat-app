// libs
import { useRef, useLayoutEffect } from "react";

// components
import { BotMessage } from "./BotMessage";
import { UserMessage } from "./UserMessage";

// constants
import { SENDER } from "@/constants";

// types
import type { ChatMessage } from "@/types";

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
