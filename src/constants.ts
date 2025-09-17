// types
import type { ChatMessage } from "./types";

export const SENDER = {
  Bot: "Bot",
  User: "User",
} as const;

export const LOADING_MESSAGE: ChatMessage = {
  id: "LOADING_MESSAGE_ID",
  sender: SENDER.Bot,
  message: "",
};
