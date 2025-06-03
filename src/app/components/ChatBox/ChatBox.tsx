'use client'

import { useState, FormEvent } from "react";

export default function ChatBox() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse(null);
    setError(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unknown error");
      setResponse(data.text);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded shadow">
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Ask ChatGPT:</span>
          <textarea
            rows={3}
            className="mt-1 block w-full border rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your question here..."
          />
        </label>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Thinking…" : "Send"}
        </button>
      </form>

      <div className="mt-6">
        {error && (
          <p className="text-red-500">
            Error: {error}
          </p>
        )}
        {response && (
          <div className="whitespace-pre-wrap bg-gray-50 p-4 rounded">
            {response}
          </div>
        )}
      </div>
    </div>
  );
}
