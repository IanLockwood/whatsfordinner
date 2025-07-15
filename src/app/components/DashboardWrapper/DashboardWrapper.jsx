'use client';

import WeatherWidget from "components/WeatherWidget/WeatherWidget";

export default function DashboardWrapper() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center pt-18">How's The Weather?</h1>
      <div className="
          grid
          grid-rows-[20px_1fr_20px]
          p-4
          pb-0
          gap-16
      ">
          <main className="flex flex-col row-start-1 items-center w-full w-max-[1200px]">
            <WeatherWidget />
          </main>
      </div>
    </div>
  );
}
