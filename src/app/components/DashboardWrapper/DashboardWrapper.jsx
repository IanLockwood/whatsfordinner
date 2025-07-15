'use client';

import WeatherWidget from "components/WeatherWidget/WeatherWidget";

export default function DashboardWrapper() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8 pt-18">How's The Weather?</h1>
      <div className="
          grid
          grid-rows-[20px_1fr_20px]
          p-8
          pb-0
          gap-16
      ">
          <main className="flex flex-col row-start-1 items-center w-full w-max-[1200px]">
            <div className="w-full max-w-[1200px] rounded-lg shadow-md p-6">
              <WeatherWidget />
            </div>
          </main>
      </div>
    </div>
  );
}
