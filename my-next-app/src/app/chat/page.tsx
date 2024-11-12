"use client";
import { useChat } from 'ai/react';
import React from "react";

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    return (
        <div className="flex flex-col w-full max-w-lg py-8 px-4 mx-auto min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="text-xl md:text-2xl font-bold text-center mb-2 text-gray-900 dark:text-white">
                Chat with AI
            </div>
            <div className="text-sm md:text-base text-gray-700 dark:text-gray-300 text-center mb-4">
                Ask me anything, and I will do my best to help you.
            </div>

            <div className="flex flex-col w-full">
                <div className="flex flex-col space-y-2 overflow-y-auto max-h-[400px] mb-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                    {messages.map((m) => (
                        <div key={m.id} className="whitespace-pre-wrap text-gray-900 dark:text-gray-300">
                            <span className="font-semibold">{m.role === 'user' ? 'User:' : 'AI:'}</span> {m.content}
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit} className="flex items-center border-t border-gray-300 dark:border-gray-700 p-2 fixed bottom-0 left-0 right-0 max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg">
                    <input
                        className="flex-1 p-2 text-gray-900 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none bg-white dark:bg-gray-800 rounded-l-lg"
                        value={input}
                        placeholder="How can I help you?"
                        onChange={handleInputChange}
                    />
                    <button
                        type="submit"
                        className="p-2 bg-blue-500 text-white rounded-lg"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}