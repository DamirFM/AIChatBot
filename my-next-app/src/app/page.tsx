import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white">
        Welcome to AI Chat App
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 text-center">
        Chat with AI and get instant answers.
      </p>
      <Link href="/chat">
        <div className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 text-lg md:text-xl">
          Start Chatting
        </div>
      </Link>
    </div>
  );
}