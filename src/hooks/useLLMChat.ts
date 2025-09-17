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
  error: string | undefined;
};

type ReturnUseLLMChat = [onAction: OnAction, state: LLMChatState];

const ERROR_MESSAGE = "Something went wrong! Please try again.";

export const useLLMChat = (): ReturnUseLLMChat => {
  const [messages, setMessages] = useState<LLMChatState["messages"]>([]);
  const [loading, setLoading] = useState<LLMChatState["loading"]>(false);
  const [error, setError] = useState<LLMChatState["error"]>(undefined);

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
          setError(undefined);
          setMessages([...updatedChatMessages, LOADING_MESSAGE]);

          const updateMessagesOnResponse = (
            llmResponse: string,
            error?: string,
          ) => {
            setLoading(false);

            setMessages((prev) => {
              const chatMessagesWithoutLoadingMessage = prev.filter(
                (msg) => msg.id !== LOADING_MESSAGE.id,
              );

              if (!error) {
                chatMessagesWithoutLoadingMessage.push({
                  id: uuidv4(),
                  message: llmResponse ?? ERROR_MESSAGE,
                  sender: SENDER.Bot,
                });
              } else {
                setError(ERROR_MESSAGE);
              }

              return chatMessagesWithoutLoadingMessage;
            });
          };

          try {
            sendMessageToLLM(updatedChatMessages)
              .then((llmResponse) => {
                updateMessagesOnResponse(llmResponse);
              })
              .catch(() => {
                updateMessagesOnResponse("", ERROR_MESSAGE);
              });
          } catch (e) {
            updateMessagesOnResponse("", ERROR_MESSAGE);
          }

          break;
        }

        default:
          break;
      }
    },
    [messages],
  );

  return [onAction, { messages, loading, error }];
};
