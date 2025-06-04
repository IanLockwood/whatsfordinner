'use client'

import { useState, FormEvent, useEffect, useRef } from "react";

export default function ChatBox() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Ref to the form element
  const formRef = useRef<HTMLFormElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null); // Add this line

  // Focus the textarea on mount
  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const handleSubmit = async (e: FormEvent | KeyboardEvent) => {
    if ("preventDefault" in e) e.preventDefault();
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

  // Listen for global ⌘+Enter
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.metaKey && e.key === "Enter") {
        // Prevent double submit if focused in textarea
        if (document.activeElement?.tagName === "TEXTAREA") return;
        if (formRef.current) {
          handleSubmit(e);
        }
      }
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [prompt]); // re-run if prompt changes

  return (
    <div className="mx-auto p-4">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-2">
            <label className="block">
            <textarea
              ref={textareaRef}
              rows={2}
              className="mt-1 block w-full border rounded p-2 focus:outline-none focus:ring focus:border-blue-300 italic resize-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Type the ingredients you have in your kitchen here, and we'll find you recipes that use those ingredients to make delicious meals."
              onKeyDown={(e) => {
                if (e.metaKey && e.key === "Enter") {
                  handleSubmit(e);
                }
              }}
            />
            </label>
            <div className="flex justify-end">
            <button
                type="submit"
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                disabled={loading}
            >
                {loading ? "Wait for it..." : "Submit or ⌘⏎"}
            </button>
            </div>
        </form>

      <div className="block mt-3 max-h-[400px]">
        {error && (
          <p className="text-red-500 text-center italic">
            Error: {error}
          </p>
        )}

        {loading && (
            <div className="text-center">
                <img
                    src="/pizza.png"
                    alt="Loading"
                    className="inline-block w-16 h-16 animate-spin [animation-duration:2s]"
                />
                <p className="text-center italic pt-2">
                    Sit tight! Our chefs are preparing something delicious for you...
                </p>
            </div>
        )}

        {response && (
          <div
            className="
                whitespace-pre-wrap
                p-4
                rounded
                bg-gray-50
                border-1
                border-gray-200
                max-h-[400px]
                overflow-y-scroll
            "
            dangerouslySetInnerHTML={{ __html: response }}
          />
        )}
      </div>
    </div>
  );
}
