import "./globals.css";
import ChatBox from "components/ChatBox/ChatBox";
import AppTitle from "@/app/components/AppTitle/AppTitle";
import DarkModeToggle from "./components/DarkModeToggle/DarkModeToggle";

export default function Home() {
  return (
    <div className="
      min-h-screen
      max-h-screen
      overflow-hidden">
      <DarkModeToggle />
      <AppTitle />
      <div className="grid
      grid-rows-[20px_1fr_20px]
      p-8
      pb-0
      gap-16
    ">
        <main className="flex flex-col row-start-1 items-center w-full w-max-[1200px]">
          <div className="w-full max-w-[800px] bg-chatbox-background rounded-lg shadow-md p-6">
            <ChatBox />
          </div>
        </main>
      </div>
    </div>
  );
}
