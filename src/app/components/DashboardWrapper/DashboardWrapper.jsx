'use client';

import WeatherWidget from "components/WeatherWidget/WeatherWidget";

export default function DashboardWrapper() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">Dashboard</h1>
      <div className="
          grid
          grid-rows-[20px_1fr_20px]
          p-8
          pb-0
          gap-16
      ">
          {/* <p>This is the Experiments page. Here you can add and manage your experiments. This is the Experiments page. Here you can add and manage your experiments. This is the Experiments page. Here you can add and manage your experiments. This is the Experiments page. Here you can add and manage your experiments. This is the Experiments page. Here you can add and manage your experiments. This is the Experiments page. Here you can add and manage your experiments. This is the Experiments page. Here you can add and manage your experiments. This is the Experiments page. Here you can add and manage your experiments. This is the Experiments page. Here you can add and manage your experiments. This is the Experiments page. Here you can add and manage your experiments.</p> */}
          <div className="w-full max-w-[1200px] rounded-lg shadow-md p-6 mt-4 mx-auto">
            {/* <p>This is the Experiments page. Here you can add and manage your experiments. This is the Experiments page. Here you can add and manage your experiments. This is the Experiments page. Here you can add and manage your experiments. This is the Experiments page. Here you can add and manage your experiments. This is the Experiments page. Here you can add and manage your experiments. This is the Experiments page. Here you can add and manage your experiments. This is the Experiments page. Here you can add and manage your experiments. This is the Experiments page. Here you can add and manage your experiments. This is the Experiments page. Here you can add and manage your experiments. This is the Experiments page. Here you can add and manage your experiments.</p> */}
            <WeatherWidget />
        </div>
      </div>
    </div>
  );
}
