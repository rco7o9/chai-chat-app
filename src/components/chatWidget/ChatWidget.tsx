// components
import { ChatBody } from "./components/ChatBody";
import { ChatControls } from "./components/ChatControls";
import { Placeholder } from "./components/Placeholder";
import { Error } from "./components/Error";

// hooks
import { useLLMChat } from "@/hooks/useLLMChat";

// images
import background from "@/assets/space.png";

// types
import type { JSX } from "react";

const CHAT_BOX_SHADOW = "#343333";

export const ChatWidget = (): JSX.Element => {
  const [onAction, { loading, error, messages }] = useLLMChat();

  return (
    <div
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        boxShadow: `1px 1px 24px ${CHAT_BOX_SHADOW}`,
      }}
      className="relative h-full w-lg m-auto p-4 rounded-2xl flex flex-col justify-between gap-10"
    >
      {error === undefined ? (
        messages.length === 0 ? (
          <Placeholder />
        ) : (
          <ChatBody className="flex-1" messages={messages} />
        )
      ) : (
        <Error error={error} />
      )}

      <ChatControls loading={loading} onAction={onAction} />
    </div>
  );
};
