'use client'
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  const [mode, setMode] = useState<"editorial" | "party">("editorial");

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode);
  }, [mode]);

  return (
    <div className="fixed top-4 right-4 flex flex-col gap-2 items-end z-50">
      <button
        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
        onClick={() => setDark(d => !d)}
        aria-label="Toggle dark mode"
      >
        {dark ? "🌙 Dark" : "☀️ Light"}
      </button>
      <button
        className="px-4 py-2 rounded bg-pink-200 text-black hover:bg-pink-300"
        onClick={() => setMode(m => m === "editorial" ? "party" : "editorial")}
        aria-label="Toggle mode"
      >
        {mode === "editorial" ? "📰 Editorial" : "🎉 Party"}
      </button>
    </div>
  );
}