import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <h1 className="text-4xl font-bold mb-4">Welcome to AI Chat App</h1>
      <p className="text-lg ext-white mb-8">Chat with AI and get instant answers.</p>
      <Link href="/chat">
        <a className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
          Start Chatting
        </a>
      </Link>
    </div>
  );
}
