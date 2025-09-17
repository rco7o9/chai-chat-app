// types
import { JSX } from "react";

// components
import { ChatBody } from "./components/ChatBody";
import { ChatControls } from "./components/ChatControls";

// hooks
import { useLLMChat } from "@/hooks/useLLMChat";

// images
import background from "@/assets/space.png";

export const ChatWidget = (): JSX.Element => {
  const [onAction, { loading, messages }] = useLLMChat();

  return (
    <div
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        boxShadow: "1px 1px 24px #343333",
      }}
      className="relative h-full w-lg m-auto p-4 rounded-2xl flex flex-col justify-between gap-10"
    >
      <ChatBody className="flex-1" messages={messages} />
      <ChatControls loading={loading} onAction={onAction} />
    </div>
  );
};
