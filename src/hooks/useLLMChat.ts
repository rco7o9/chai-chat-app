// libs
import { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

// constants
import { SENDER, LOADING_MESSAGE } from "@/constants";

// utils
import { sendMessageToLLM } from "@/utils";

// types
import type { ChatMessage } from "@/types";

export type OnAction = (params: {
  type: "POST_MESSAGE";
  payload: string;
}) => void;

export type LLMChatState = {
  messages: Array<ChatMessage>;
  loading: boolean;
};

type ReturnUseLLMChat = [onAction: OnAction, state: LLMChatState];

export const useLLMChat = (): ReturnUseLLMChat => {
  const [messages, setMessages] = useState<LLMChatState["messages"]>([]);
  const [loading, setLoading] = useState<LLMChatState["loading"]>(false);

  const onAction: ReturnUseLLMChat[0] = useCallback(
    (params) => {
      const { type, payload } = params;

      switch (type) {
        case "POST_MESSAGE": {
          const updatedChatMessages = [
            ...messages,
            {
              id: uuidv4(),
              sender: SENDER.User,
              message: payload,
            },
          ];

          // set loading states correctly
          setLoading(true);
          setMessages([...updatedChatMessages, LOADING_MESSAGE]);

          sendMessageToLLM(updatedChatMessages).then((botResponse) => {
            setLoading(false);
            setMessages((prev) => {
              const chatMessagesWithoutLoadingMessage = prev.filter(
                (msg) => msg.id !== LOADING_MESSAGE.id,
              );

              return [
                ...chatMessagesWithoutLoadingMessage,
                {
                  id: uuidv4(),
                  message: botResponse ?? "Something went wrong!!",
                  sender: SENDER.Bot,
                },
              ];
            });
          });

          break;
        }

        default:
          break;
      }
    },
    [messages],
  );

  return [onAction, { messages, loading }];
};
