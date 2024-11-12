# AI Chat Bot App 🤖💬

This is a simple AI-powered chat application built using Next.js, leveraging OpenAI's GPT-4-turbo model to provide conversational responses to users. The application allows users to interact with an AI assistant and get responses in real-time, offering a streamlined, responsive interface for a seamless chatting experience.

## Features

- **AI Chatbot**: Chat with an AI model (GPT-4-turbo) to get instant answers to your queries.
- **Real-time Response Streaming**: Uses OpenAI's streaming API to deliver fast, real-time responses.
- **Responsive Design**: Built with Tailwind CSS for a fully responsive experience across devices.
- **User-Friendly Interface**: Simple and clean layout with a fixed chat input for easy message submission.
- **Customizable Interaction**: Includes user roles (`User`, `AI`) to distinguish between user input and AI responses visually.
- **'Clean' and 'Send' Buttons**: Allows users to submit messages or clear the conversation easily.

## Deployment

The application is live and accessible at: [https://ai-chat-bot-ivory-ten.vercel.app](https://ai-chat-bot-ivory-ten.vercel.app).

## Screenshots

Provide a visual overview of the app, such as the following:

### Chat Page

![Chat Page](public/screenshots/about.png)

### User Input

![User Input](public/screenshots/main.png)

### AI Output

![AI Output](public/screenshots/main_1.png)

## Technology Stack

- **Next.js**: For server-side rendering and API routing.
- **OpenAI GPT-4 API**: Powering the chatbot with conversational AI.
- **Tailwind CSS**: A utility-first CSS framework for responsive and customizable styling.
- **React**: For a dynamic user interface and state management.

## Architecture Overview

The application consists of:

- **Server-side API**: Manages API calls to OpenAI's GPT-4 model.
- **Client-side Chat Interface**: A React-based chat interface for users to interact with the AI.
- **Custom Hooks**: Uses `useChat` from `ai/react` to manage the chat state, input handling, and response streaming.

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone git@github.com:DamirFM/AIChatBot.git
   ```

2. **Navigate to Project Directory**:

   ```bash
   cd my-next-app
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Set Up OpenAI API Key**:
   Add your OpenAI API key in a `.env` file in the root directory:
   ```plaintext
   NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
   ```

## Reference

You can find a full instruction here: [https://sdk.vercel.ai/docs/getting-started/nextjs-app-router](https://sdk.vercel.ai/docs/getting-started/nextjs-app-router).
