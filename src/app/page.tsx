'use client';

import { useChat } from 'ai/react';
import React from "react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-8 px-4 mx-auto">
      <div className="text-xl font-bold text-center mb-2">Chat with AI</div>
      <div className="text-sm text-gray-600 text-center mb-4">
        Ask me anything and I will do my best to help you.
      </div>

      <div className="flex flex-col w-full max-w-md mx-auto">
        <div className="flex flex-col space-y-2 overflow-y-auto max-h-[400px] mb-4">
          {messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap">
              <span className="font-semibold">{m.role === 'user' ? 'User:' : 'AI:'}</span> {m.content}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex items-center border border-pink-700 rounded shadow-xl p-2 mb-4 fixed bottom-0 w-full max-w-md bg-white mx-auto left-0 right-0">
          <input
            className="flex-1 p-2 text-gray-800 placeholder-gray-800 rounded-l   focus:outline-none"
            value={input}
            placeholder="How can I help you?"
            onChange={handleInputChange}
          />

          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-r"
          >
            Send
          </button>
        </form>
      </div>
    </div>

  );
}