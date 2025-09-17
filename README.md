This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## How to Run the App

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Start by sending a message to the LLM
and the chat continues from there.

## Scope of Improvements
1. While doing frontend development, I prefer to do TDD only for the critical logical utils, hooks and some business-critical components in React. But, due to more time required to setup Jest (testing framework) and react-testing-library, I have not added tests in this repo yet. Maybe we can take that up on the onsite day.
2. I have built the design completely out of my own mind in limited time, that can be improved with more time.

## Features that can be built during on-site (or more)
1. Currently, I have disabled sending another message till the LLM does not response, we can add support to stop the current in-flight request and issue a new message to the bot.
2. Light / Dark theme toggle support
3. A Chatgpt like GUI to show previous chats persisted and the ability to continue any of the previous chats
4. Option to select a chat wallpaper
5. Bot-Bot auto-chat
6. AI Chatroom

## Screenshots

### 1. Initial State
![Initial State UI](./public/initial_state.png)

### 2. User & Bot Messages
![User & Bot Messages](./public/bot_reply.png)

### 3. Loading State
![Loading State](./public/loading_state.png)