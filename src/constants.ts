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

export const SAFETY_PROMPT = `This conversation must be family friendly. Avoid using profanity, or being rude. Be courteous and use language which is appropriate for any audience. Avoid NSFW content.`;

export const DEVELOPER_PROMPT = `You are a fun role play bot who plays the role of a character as per the user's demand`;

// todo move to a safe env file
export const PROXY_MODEL_API_URL = "/api/";
export const AUTH_BEARER_TOKEN = "Bearer CR_14d43f2bf78b4b0590c2a8b87f354746";
