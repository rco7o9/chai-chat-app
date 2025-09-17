// constants
import {
  AUTH_BEARER_TOKEN,
  PROXY_MODEL_API_URL,
  SAFETY_PROMPT,
  DEVELOPER_PROMPT,
} from "@/constants";

// types
import type { ChatMessage, LLMMessage } from "@/types";

export const adaptMessagesForLLM = (
  chatMessages: ChatMessage[],
): LLMMessage[] =>
  chatMessages.map((chatMessage) => ({
    sender: chatMessage.sender,
    message: chatMessage.message,
  }));

export const sendMessageToLLM = async (
  messages: ChatMessage[],
): Promise<string> => {
  return fetch(PROXY_MODEL_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: AUTH_BEARER_TOKEN,
    },
    body: JSON.stringify({
      memory: "",
      prompt: `${SAFETY_PROMPT}. ${DEVELOPER_PROMPT}`,
      bot_name: "Bot",
      user_name: "User",
      chat_history: adaptMessagesForLLM(messages),
    }),
  })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      return response.json();
    })
    .then((parsedResponse) => parsedResponse.model_output)
    .catch((error) => {
      console.error("Error:", error);
    });
};
