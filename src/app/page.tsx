import ChatBox from "components/ChatBox/ChatBox";

export default function Home() {
  return (
    <div className="grid
    grid-rows-[20px_1fr_20px]
    items-center
    justify-items-center
    min-h-screen
    p-8
    pb-20
    gap-16
    sm:p-20
    font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full w-max-[1200px]">
        <div className="w-full max-w-[1200px]">
          <ChatBox />
        </div>
      </main>
    </div>
  );
}
