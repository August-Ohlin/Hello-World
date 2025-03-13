'use client';
import React, { useState } from 'react';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const logChatEvent = (event: string, details?: any) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${event}`, details || '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    logChatEvent('Användaren skickar meddelande', { message });

    try {
      logChatEvent('Skickar förfrågan till API');
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) {
        throw new Error('Något gick fel');
      }

      const data = await res.json();
      logChatEvent('Svar mottaget från API', { response: data.response });
      setResponse(data.response);
    } catch (error) {
      logChatEvent('Fel vid API-anrop', { error });
      console.error('Error:', error);
      setResponse('Ett fel uppstod vid kommunikation med servern.');
    } finally {
      setIsLoading(false);
      logChatEvent('Chat-session avslutad');
    }
  };

  return (
    <div className="container">
      <h1>Chat med AI</h1>
      <div className="mt-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                logChatEvent('Användaren skriver meddelande', { length: e.target.value.length });
              }}
              className="w-full p-4 bg-white/10 text-white rounded-lg border border-white/20 focus:border-white/40 focus:outline-none"
              rows={4}
              placeholder="Skriv ditt meddelande här..."
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-white/10 text-white rounded-full border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Skickar...' : 'Skicka'}
          </button>
        </form>

        {response && (
          <div className="mt-8 p-4 bg-white/10 rounded-lg border border-white/20">
            <h3 className="text-xl text-white mb-2">Svar:</h3>
            <p className="text-gray-300 whitespace-pre-wrap">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
} 