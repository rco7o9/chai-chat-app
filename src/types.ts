import { SENDER } from "./constants";

export type ChatMessage = {
  id: string;
  message: string;
  sender: keyof typeof SENDER;
};

export type LLMMessage = Pick<ChatMessage, "sender" | "message">;
